"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ContributionDay {
    color: string;
    contributionCount: number;
    contributionLevel: "NONE" | "FIRST_QUARTILE" | "SECOND_QUARTILE" | "THIRD_QUARTILE" | "FOURTH_QUARTILE" | string;
    date: string;
}

interface ContributionsData {
    contributions: ContributionDay[][];
    totalContributions: number;
}

interface GitHubActivityFunProps {
    username: string;
}

export default function GitHubActivityFun({ username }: GitHubActivityFunProps) {
    const [data, setData] = useState<ContributionsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [pacmanPos, setPacmanPos] = useState({ x: 0, y: 0 });
    const [pacmanDir, setPacmanDir] = useState<"right" | "left" | "up" | "down">("right");
    const [hasEaten, setHasEaten] = useState<string[]>([]); // Array of dates eaten
    const [isAuto, setIsAuto] = useState(true);
    const [targetPos, setTargetPos] = useState<{ x: number; y: number } | null>(null);
    const [hackerMode, setHackerMode] = useState(false);
    const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://github-contributions-api.deno.dev/${username}.json?y=last`);
                if (!response.ok) throw new Error("Failed to fetch contribution data");
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error("Error fetching GitHub activity:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [username]);

    // Keyboard Controls
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"].includes(e.key)) {
                e.preventDefault();
                setIsAuto(false);
                setTargetPos(null);

                let nextDir: typeof pacmanDir = pacmanDir;
                let nextPos = { ...pacmanPos };

                if (e.key === "ArrowUp" || e.key === "w") { nextDir = "up"; nextPos.y = Math.max(0, pacmanPos.y - 1); }
                if (e.key === "ArrowDown" || e.key === "s") { nextDir = "down"; nextPos.y = Math.min(6, pacmanPos.y + 1); }
                if (e.key === "ArrowLeft" || e.key === "a") { nextDir = "left"; nextPos.x = Math.max(0, pacmanPos.x - 1); }
                if (e.key === "ArrowRight" || e.key === "d") { nextDir = "right"; nextPos.x = Math.min((data?.contributions.length || 1) - 1, pacmanPos.x + 1); }

                setPacmanDir(nextDir);
                setPacmanPos(nextPos);

                const day = data?.contributions[nextPos.x]?.[nextPos.y];
                if (day && day.contributionCount > 0) {
                    setHasEaten((prev) => [...prev.slice(-20), day.date]);
                    if (day.contributionCount > 5) triggerHackerMode();
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [pacmanPos, data, pacmanDir]);

    const triggerHackerMode = () => {
        setHackerMode(true);
        setTimeout(() => setHackerMode(false), 5000);
    };

    // Flatten the grid for animation traversal
    const flattenedDays = useMemo(() => {
        if (!data) return [];
        return data.contributions.flat();
    }, [data]);

    // Auto-traversal or Targeting Logic
    useEffect(() => {
        if (!data || (!isAuto && !targetPos)) return;

        const interval = setInterval(() => {
            if (isAuto) {
                const currentIndex = (pacmanPos.x * 7 + pacmanPos.y + 1) % flattenedDays.length;
                const weekIndex = Math.floor(currentIndex / 7);
                const dayIndex = currentIndex % 7;

                if (dayIndex === 0) setPacmanDir("right");
                else setPacmanDir("down");

                setPacmanPos({ x: weekIndex, y: dayIndex });

                const day = data.contributions[weekIndex][dayIndex];
                if (day && day.contributionCount > 0) {
                    setHasEaten((prev) => [...prev.slice(-20), day.date]);
                    if (day.contributionCount > 5) triggerHackerMode();
                }
            } else if (targetPos) {
                // Simple pathfinding towards target
                const nextPos = { ...pacmanPos };
                if (pacmanPos.x < targetPos.x) { nextPos.x++; setPacmanDir("right"); }
                else if (pacmanPos.x > targetPos.x) { nextPos.x--; setPacmanDir("left"); }
                else if (pacmanPos.y < targetPos.y) { nextPos.y++; setPacmanDir("down"); }
                else if (pacmanPos.y > targetPos.y) { nextPos.y--; setPacmanDir("up"); }
                else {
                    setTargetPos(null);
                    return;
                }
                setPacmanPos(nextPos);
                const day = data.contributions[nextPos.x][nextPos.y];
                if (day && day.contributionCount > 0) {
                    setHasEaten((prev) => [...prev.slice(-20), day.date]);
                    if (day.contributionCount > 5) triggerHackerMode();
                }
            }
        }, hackerMode ? 60 : 150);

        return () => clearInterval(interval);
    }, [data, isAuto, targetPos, pacmanPos, hackerMode, flattenedDays]);

    if (loading) {
        return (
            <div className="flex items-center justify-center p-8 h-[200px] border border-dashed border-cyan-500/30 rounded-lg">
                <div className="text-cyan-400 font-mono animate-pulse">Initializing Neural Link...</div>
            </div>
        );
    }

    if (!data) return null;

    return (
        <div className="relative w-full overflow-x-auto pb-4 pt-8 cursor-crosshair">
            <div className="min-w-[800px] flex gap-[4px] relative">
                {data.contributions.map((week, weekIdx) => (
                    <div key={weekIdx} className="flex flex-col gap-[4px]">
                        {week.map((day, dayIdx) => {
                            const isEaten = hasEaten.includes(day.date);
                            const isOccupied = pacmanPos.x === weekIdx && pacmanPos.y === dayIdx;
                            const isTarget = targetPos?.x === weekIdx && targetPos?.y === dayIdx;
                            const level = day.contributionLevel;

                            const getBgColor = (lvl: string) => {
                                switch (lvl) {
                                    case "FIRST_QUARTILE": return "bg-[#0e4429]";
                                    case "SECOND_QUARTILE": return "bg-[#006d32]";
                                    case "THIRD_QUARTILE": return "bg-[#26a641]";
                                    case "FOURTH_QUARTILE": return "bg-[#39d353]";
                                    default: return "bg-[#161b22]";
                                }
                            };

                            return (
                                <div
                                    key={day.date}
                                    onMouseEnter={(e) => {
                                        setHoveredDay(day);
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        setTooltipPos({ x: rect.left, y: rect.top });
                                    }}
                                    onMouseLeave={() => setHoveredDay(null)}
                                    onClick={() => {
                                        setIsAuto(false);
                                        setTargetPos({ x: weekIdx, y: dayIdx });
                                    }}
                                    className={cn(
                                        "w-[12px] h-[12px] rounded-sm transition-all duration-300 relative group cursor-pointer",
                                        getBgColor(level),
                                        isEaten && "ring-2 ring-cyan-400 shadow-[0_0_10px_rgba(0,245,255,0.5)] scale-110",
                                        isTarget && "animate-ping ring-1 ring-yellow-400"
                                    )}
                                >
                                    {isOccupied && (
                                        <motion.div
                                            layoutId="pacman"
                                            className="absolute inset-0 z-10 flex items-center justify-center"
                                        >
                                            <div className={cn(
                                                "w-[16px] h-[16px] rounded-full relative transition-colors duration-300",
                                                hackerMode ? "bg-cyan-400 shadow-[0_0_15px_#00f5ff]" : "bg-yellow-400",
                                                pacmanDir === "right" && "rotate-0",
                                                pacmanDir === "down" && "rotate-90",
                                                pacmanDir === "left" && "rotate-180",
                                                pacmanDir === "up" && "rotate-270",
                                            )}>
                                                <div className="absolute top-[2px] right-[4px] w-[2px] h-[2px] bg-black rounded-full" />
                                                <motion.div
                                                    className={cn("absolute inset-0", hackerMode ? "bg-cyan-400" : "bg-yellow-400")}
                                                    style={{
                                                        clipPath: "polygon(50% 50%, 100% 25%, 100% 0, 0 0, 0 100%, 100% 100%, 100% 75%)"
                                                    }}
                                                    animate={{
                                                        clipPath: [
                                                            "polygon(50% 50%, 100% 25%, 100% 0, 0 0, 0 100%, 100% 100%, 100% 75%)",
                                                            "polygon(50% 50%, 100% 50%, 100% 0, 0 0, 0 100%, 100% 100%, 100% 50%)"
                                                        ]
                                                    }}
                                                    transition={{ repeat: Infinity, duration: 0.2, ease: "linear" }}
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            {/* Intel Tooltip */}
            <AnimatePresence>
                {hoveredDay && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        style={{
                            position: "fixed",
                            left: tooltipPos.x,
                            top: tooltipPos.y - 70,
                            zIndex: 100,
                        }}
                        className="pointer-events-none bg-black/90 backdrop-blur-md border border-cyan-500/50 p-3 rounded-md font-mono text-[10px] text-cyan-400 shadow-[0_0_20px_rgba(0,245,255,0.3)] min-w-[120px]"
                    >
                        <div className="flex flex-col gap-1.5">
                            <div className="flex justify-between gap-4">
                                <span className="text-muted-foreground uppercase text-[8px]">Intel Date</span>
                                <span>{hoveredDay.date}</span>
                            </div>
                            <div className="flex justify-between gap-4 text-white">
                                <span className="text-muted-foreground uppercase text-[8px]">Payload Size</span>
                                <span className="text-cyan-400">{hoveredDay.contributionCount} Commits</span>
                            </div>
                            <div className="h-[1px] w-full bg-cyan-500/20 mt-1" />
                            <div className="text-[8px] text-cyan-400/60 flex items-center gap-1">
                                <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
                                SCANNING DIRECTORY...
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Controls Info */}
            <div className="mt-8 flex flex-wrap gap-6 items-center px-4">
                <div className="flex gap-3">
                    {[
                        { color: hackerMode ? "bg-cyan-500 animate-pulse" : "bg-red-500", name: "Blinky" },
                        { color: hackerMode ? "bg-cyan-400 animate-pulse" : "bg-pink-400", name: "Pinky" },
                        { color: hackerMode ? "bg-cyan-300 animate-pulse" : "bg-cyan-400", name: "Inky" },
                        { color: hackerMode ? "bg-cyan-200 animate-pulse" : "bg-orange-400", name: "Clyde" },
                    ].map(ghost => (
                        <div key={ghost.name} className="flex items-center gap-2 group">
                            <div className={cn("w-4 h-5 rounded-t-full relative transition-all duration-500", ghost.color)}>
                                <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full flex items-center justify-center">
                                    <div className="w-0.5 h-0.5 bg-blue-800 rounded-full" />
                                </div>
                                <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full flex items-center justify-center">
                                    <div className="w-0.5 h-0.5 bg-blue-800 rounded-full" />
                                </div>
                                <div className="absolute -bottom-1 left-0 right-0 flex justify-around">
                                    <div className={cn("w-1 h-1 rounded-full", ghost.color)} />
                                    <div className={cn("w-1 h-1 rounded-full", ghost.color)} />
                                    <div className={cn("w-1 h-1 rounded-full", ghost.color)} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex gap-3 text-[10px] font-mono uppercase tracking-tighter">
                    <div className="flex flex-col gap-1">
                        <span className="text-muted-foreground text-[8px]">System State</span>
                        <div className="flex gap-2">
                            <span className={cn("px-2 py-0.5 border rounded transition-colors", isAuto ? "border-cyan-500 bg-cyan-500/10 text-cyan-400" : "border-muted text-muted-foreground text-[8px]")}>Auto</span>
                            <span className={cn("px-2 py-0.5 border rounded transition-colors", !isAuto ? "border-yellow-500 bg-yellow-500/10 text-yellow-400" : "border-muted text-muted-foreground text-[8px]")}>Manual</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-muted-foreground text-[8px]">Navigation</span>
                        <div className="flex gap-2">
                            <kbd className="px-1.5 py-0.5 border border-muted rounded bg-muted/20 text-[8px]">WASD</kbd>
                            <kbd className="px-1.5 py-0.5 border border-muted rounded bg-muted/20 text-[8px]">CLICK</kbd>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsAuto(true)}
                        className="self-end px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded hover:bg-cyan-500/20 text-cyan-400 transition-all font-bold text-[9px] h-fit"
                    >
                        RESET AUTO-PILOT
                    </button>
                </div>

                <div className="ml-auto text-[10px] font-mono text-cyan-400/50 uppercase tracking-widest hidden lg:block border-l border-cyan-500/20 pl-6">
                    {hackerMode ? (
                        <span className="text-cyan-400 animate-pulse">&gt;&gt; T-MODE ACTIVE: NEURAL OVERDRIVE ENGAGED &lt;&lt;</span>
                    ) : (
                        "Bypassing contribution firewalls... [OK]"
                    )}
                </div>
            </div>
        </div>
    );
}
