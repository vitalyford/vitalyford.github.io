"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ContributionDay {
    color: string;
    contributionCount: number;
    contributionLevel: string;
    date: string;
    x: number; // week index
    y: number; // day index
}

interface ContributionsData {
    contributions: ContributionDay[][];
    totalContributions: number;
}

interface GitHubActivityFunProps {
    username: string;
}

// Visual constants
const GAP = 1.05;
const WIDTH = 53;
const DEPTH = 7;
const BASE_Height = 0.1;
const MULTIPLIER = 0.4;

function getContributionColor(count: number): string {
    if (count === 0) return "#151515"; // empty, dark
    if (count < 3) return "#004466";   // low, dark cyan
    if (count < 6) return "#0088cc";   // medium, blue
    if (count < 10) return "#00f0ff";  // high, neon cyan
    return "#b026ff";                  // max, electric violet
}

function getEmissiveIntensity(count: number): number {
    if (count === 0) return 0;
    if (count < 3) return 0.5;
    if (count < 6) return 1.5;
    if (count < 10) return 2;
    return 3;
}

const DayMesh = ({ day, hoveredDay, setHoveredDay }: { day: ContributionDay, hoveredDay: ContributionDay | null, setHoveredDay: (day: ContributionDay | null) => void }) => {
    const isHovered = hoveredDay?.date === day.date;
    const count = day.contributionCount;

    // Calculate 3D position
    // Center the grid:
    const posX = (day.x - WIDTH / 2) * GAP;
    const posZ = (day.y - DEPTH / 2) * GAP;
    const height = count === 0 ? BASE_Height : BASE_Height + count * MULTIPLIER;
    const posY = height / 2; // Origin is center of box, so elevate by half height

    const color = getContributionColor(count);
    const emissiveInt = getEmissiveIntensity(count);

    return (
        <mesh
            position={[posX, posY, posZ]}
            onPointerOver={(e) => {
                e.stopPropagation();
                setHoveredDay(day);
                document.body.style.cursor = 'pointer';
            }}
            onPointerOut={(e) => {
                e.stopPropagation();
                setHoveredDay(null);
                document.body.style.cursor = 'auto';
            }}
        >
            <boxGeometry args={[0.85, height, 0.85]} />
            <meshStandardMaterial
                color={isHovered ? "#ff0055" : color}
                emissive={isHovered ? "#ff0055" : color}
                emissiveIntensity={isHovered ? 2.5 : emissiveInt}
                roughness={0.2}
                metalness={0.8}
            />
        </mesh>
    );
}

const BoardGroup = ({ data, hoveredDay, setHoveredDay }: { data: ContributionsData, hoveredDay: ContributionDay | null, setHoveredDay: (day: ContributionDay | null) => void }) => {
    // Flatten days
    const days = useMemo(() => {
        return data.contributions.flat();
    }, [data]);

    return (
        <group position={[0, 0, 0]}>
            {days.map((day) => (
                <DayMesh key={day.date} day={day} hoveredDay={hoveredDay} setHoveredDay={setHoveredDay} />
            ))}

            {/* Central Board Base */}
            <mesh position={[0, -0.4, 0]}>
                <boxGeometry args={[(WIDTH + 2) * GAP, 0.8, (DEPTH + 2) * GAP]} />
                <meshStandardMaterial color="#080808" roughness={0.1} metalness={0.9} />
            </mesh>

            {/* Glowing Edge/rim around the board */}
            <mesh position={[0, 0.05, 0]}>
                <boxGeometry args={[(WIDTH + 2.2) * GAP, 0.1, (DEPTH + 2.2) * GAP]} />
                <meshBasicMaterial color="#00f0ff" wireframe opacity={0.15} transparent />
            </mesh>
        </group>
    );
};

export default function GitHubActivityFun({ username }: GitHubActivityFunProps) {
    const [data, setData] = useState<ContributionsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://github-contributions-api.deno.dev/${username}.json?y=last`);
                if (!response.ok) throw new Error("Connection Timeout");
                const json = await response.json();

                // Add coordinates
                const enrichedContributions = json.contributions.map((week: ContributionDay[], x: number) =>
                    week.map((day, y) => ({ ...day, x, y }))
                );
                setData({ ...json, contributions: enrichedContributions });
            } catch (error) {
                console.error("Uplink Error", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [username]);

    // Handle initial global pointer reset
    useEffect(() => {
        if (!hoveredDay) {
            document.body.style.cursor = 'auto';
        }
    }, [hoveredDay]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[400px] md:h-[600px] border border-cyan-500/20 rounded-xl bg-black/40 backdrop-blur-sm shadow-[0_0_15px_var(--cyber-white-glow)]">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-cyan-400 animate-pulse uppercase">
                        Syncing...
                    </div>
                </div>
            </div>
        );
    }

    if (!data) return null;

    return (
        <div
            className="w-full h-[400px] md:h-[600px] bg-black/90 rounded-xl border border-white/20 shadow-[0_0_30px_var(--cyber-white-glow)] overflow-hidden relative cursor-grab active:cursor-grabbing"
            onPointerMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
        >
            {/* Overlay UI elements */}
            <div className="absolute top-4 left-6 z-10 pointer-events-none">
                <h3 className="text-[12px] font-mono text-white uppercase tracking-widest font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                    Git Activity Matrix
                </h3>
                <div className="text-[9px] font-mono text-cyan-400 mt-1 uppercase tracking-widest">
                    {data.totalContributions} TOTAL COMMITS DETECTED
                </div>
            </div>

            <div className="absolute bottom-4 right-6 z-10 pointer-events-none">
                <div className="text-[8px] font-mono text-white/40 uppercase tracking-widest text-right">
                    Interactive 3D Subnet
                    <br />
                    Drag to rotate · Scroll to zoom
                </div>
            </div>

            <Canvas
                camera={{ position: [0, 25, 35], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <color attach="background" args={['#050505']} />
                <fog attach="fog" args={['#050505', 20, 80]} />

                <ambientLight intensity={0.4} />
                <spotLight position={[0, 40, 20]} intensity={2.5} color="#ffffff" angle={0.6} penumbra={1} castShadow />
                <pointLight position={[-30, 10, -10]} intensity={2} color="#00f0ff" />
                <pointLight position={[30, 10, 10]} intensity={2} color="#b026ff" />

                <BoardGroup data={data} hoveredDay={hoveredDay} setHoveredDay={setHoveredDay} />

                {/* Subdued Grid helping spatial context */}
                <Grid
                    position={[0, -0.39, 0]}
                    args={[100, 100]}
                    cellSize={1}
                    cellThickness={0.5}
                    cellColor="#222"
                    sectionSize={5}
                    sectionThickness={1}
                    sectionColor="#00f0ff"
                    fadeDistance={60}
                    fadeStrength={0.8}
                />

                <ContactShadows position={[0, -0.8, 0]} opacity={0.8} scale={80} blur={3} far={4} color="#000000" />

                <OrbitControls
                    autoRotate
                    autoRotateSpeed={1.2}
                    enablePan={false}
                    maxPolarAngle={Math.PI / 2.1} // Prevent viewing from totally underneath
                    minPolarAngle={0.1}
                    maxDistance={60}
                    minDistance={10}
                />
            </Canvas>

            {/* Custom Interactive Tooltip Overlay */}
            {hoveredDay && (
                <div
                    className="fixed z-50 pointer-events-none bg-black/90 backdrop-blur-xl border border-cyan-500/50 p-4 rounded-xl font-mono text-[10px] text-white shadow-[0_0_20px_rgba(0,240,255,0.3)] min-w-[170px] transform -translate-x-1/2 -translate-y-full transition-all duration-75"
                    style={{ left: mousePos.x, top: mousePos.y - 20 }}
                >
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <span className="text-white/60 uppercase text-[7px] tracking-widest border-b border-cyan-500/30 pb-0.5">Origin</span>
                            <span className="text-white/90">{hoveredDay.date}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-white/60 uppercase text-[7px] tracking-widest border-b border-cyan-500/30 pb-0.5">Payload</span>
                            <span className="text-cyan-400 font-bold drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]">
                                {hoveredDay.contributionCount} Commits
                            </span>
                        </div>
                        <div className="mt-1 pt-2 border-t border-white/10 text-[8px] text-white/50 animate-pulse">
                            [ TARGET ACQUIRED ]
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
