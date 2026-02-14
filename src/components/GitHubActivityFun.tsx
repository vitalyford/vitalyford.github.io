"use client";

import React, { useEffect, useState, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
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

interface LogEntry {
    id: string;
    msg: string;
    type: "info" | "success" | "warning" | "error";
    timestamp: number;
}

export default function GitHubActivityFun({ username }: GitHubActivityFunProps) {
    const [data, setData] = useState<ContributionsData | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [currentNode, setCurrentNode] = useState<{ x: number; y: number } | null>(null);
    const [visitedDates, setVisitedDates] = useState<Set<string>>(new Set());
    const [pathHistory, setPathHistory] = useState<{ x: number; y: number }[]>([]);
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [isAuto, setIsAuto] = useState(true);
    const [targetNode, setTargetNode] = useState<{ x: number; y: number } | null>(null);
    const [autoTarget, setAutoTarget] = useState<{ x: number; y: number; date: string } | null>(null);
    const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
    const [hackerMode, setHackerMode] = useState(false);

    const [activeMessage, setActiveMessage] = useState("Initializing neural subnet...");

    const funMessages = useMemo(() => [
        "Decrypting contribution metadata...",
        "Feeding the commit monster...",
        "Recalibrating flux capacitors...",
        "Optimizing TSP heuristic paths...",
        "Scanning for high-intensity nodes...",
        "Bypassing firewall sequence...",
        "Injection of neural packets successful.",
        "Harvesting green pixels...",
        "Syncing biometric data stream...",
        "Quantizing commit history...",
        "Rerouting local traffic through proxy...",
        "Compiling holographic output...",
        "Neural Link stable. Monitoring...",
        "Calibrating quantum commit oscillators...",
        "Intercepting pull request packets...",
        "Analyzing repository heat signatures...",
        "Synthesizing contribution isotopes...",
        "Overclocking the recursive crawler...",
        "Bending the spacetime contribution continuum...",
        "Extracting dark matter from git history...",
        "Reconstructing fragmented commit logs...",
        "Patching neural pathways to main branch...",
        "Deploying decoy commits to distract AI...",
        "Synchronizing git hooks with brain waves...",
        "Tunneling through the contribution firewall...",
        "Refactoring reality. Please wait...",
        "Decoding commit hash entropy...",
        "Purging merge conflict ghosts...",
        "Charging the contribution capacitor...",
        "Establishing secure handshake with GitHub API...",
        "Tracing recursive function echoes...",
        "Compiling destiny from source code...",
        "Mapping the multi-repo multiverse...",
    ], []);

    // Derived state for only days with contributions
    const contributionNodes = useMemo<ContributionDay[]>(() => {
        if (!data) return [];
        const nodes: ContributionDay[] = [];
        data.contributions.forEach((week, x) => {
            week.forEach((day, y) => {
                if (day.contributionCount > 0) {
                    nodes.push({ ...day, x, y });
                }
            });
        });
        return nodes;
    }, [data]);

    const addLog = (msg: string, type: LogEntry["type"] = "info") => {
        setLogs((prev) => [
            { id: Math.random().toString(36).substr(2, 9), msg, type, timestamp: Date.now() },
            ...prev.slice(0, 6),
        ]);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                addLog("Initiating Neural Link to GitHub...", "info");
                const response = await fetch(`https://github-contributions-api.deno.dev/${username}.json?y=last`);
                if (!response.ok) throw new Error("Connection Timeout");
                const json = await response.json();

                // Add coordinates to each day
                const enrichedContributions = json.contributions.map((week: ContributionDay[], x: number) =>
                    week.map((day, y) => ({ ...day, x, y }))
                );

                setData({ ...json, contributions: enrichedContributions });
                addLog("Biometric sequence confirmed. Data stream stable.", "success");
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Unknown error";
                addLog(`Uplink Error: ${errorMessage}`, "error");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
        setMounted(true);
    }, [username]);

    // Character Logic
    useEffect(() => {
        if (!data || contributionNodes.length === 0) return;

        // Initialize starting position
        if (!currentNode) {
            setCurrentNode({ x: 0, y: 0 });
            setPathHistory([{ x: 0, y: 0 }]);
            return;
        }

        const interval = setInterval(() => {
            if (!isAuto && !targetNode) return;
            if (!currentNode) return;

            const curr = currentNode;
            let next: { x: number; y: number } | null = null;

            // Determine destination: manual target takes priority, then autoTarget
            let destination: { x: number; y: number } | null = targetNode || (autoTarget ? { x: autoTarget.x, y: autoTarget.y } : null);

            // In auto mode, find a new TSP target only if we don't have one
            if (isAuto && !targetNode && !autoTarget) {
                const remaining = contributionNodes.filter(n => !visitedDates.has(n.date));

                if (remaining.length === 0) {
                    addLog("Optimization Complete. Resetting Path Buffer.", "info");
                    setVisitedDates(new Set());
                    setPathHistory([curr]);
                    return;
                }

                // Randomly change fun message
                if (Math.random() > 0.85) {
                    setActiveMessage(funMessages[Math.floor(Math.random() * funMessages.length)]);
                }

                // Find nearest node with bias towards higher contribution counts
                let minScore = Infinity;
                let nearest: ContributionDay | null = null;

                for (const node of remaining) {
                    const dist = Math.sqrt(Math.pow(node.x - curr.x, 2) + Math.pow(node.y - curr.y, 2));
                    const score = dist / (1 + node.contributionCount * 0.1);
                    if (score < minScore) {
                        minScore = score;
                        nearest = node;
                    }
                }

                if (nearest) {
                    // Set as autoTarget - DON'T mark as visited yet!
                    setAutoTarget({ x: nearest.x, y: nearest.y, date: nearest.date });
                    destination = { x: nearest.x, y: nearest.y };

                    if (nearest.contributionCount > 5) {
                        setHackerMode(true);
                        addLog(`High Intensity Node: ${nearest.contributionCount} commits detected!`, "success");
                        setActiveMessage("ALERT: High intensity energy detected!");
                        setTimeout(() => setHackerMode(false), 2000);
                    } else {
                        addLog(`Target [${nearest.x},${nearest.y}]: d=${minScore.toFixed(2)}`, "info");
                    }
                }
            }

            // Move towards destination
            if (destination) {
                const dx = destination.x - curr.x;
                const dy = destination.y - curr.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance === 0) {
                    // Already at destination - mark as visited and clear target
                    if (targetNode) {
                        setTargetNode(null);
                        setActiveMessage("Manual override complete.");
                    }
                    if (autoTarget) {
                        // Mark as visited NOW when we arrive
                        setVisitedDates(prev => {
                            const nextSet = new Set(prev);
                            nextSet.add(autoTarget.date);
                            return nextSet;
                        });
                        setAutoTarget(null);
                    }
                } else if (distance <= 1.5) {
                    // Close enough, snap to destination
                    next = { x: destination.x, y: destination.y };
                    if (targetNode) {
                        setTargetNode(null);
                        addLog(`Manual Override: Arrived at [${next.x},${next.y}]`, "success");
                        setActiveMessage("Manual override complete.");
                    }
                    if (autoTarget) {
                        // Mark as visited NOW when we arrive
                        setVisitedDates(prev => {
                            const nextSet = new Set(prev);
                            nextSet.add(autoTarget.date);
                            return nextSet;
                        });
                        setAutoTarget(null);
                    }
                } else {
                    // Move one step towards destination
                    const stepX = Math.sign(dx);
                    const stepY = Math.sign(dy);
                    next = { x: curr.x + stepX, y: curr.y + stepY };
                    if (targetNode) {
                        addLog(`Moving to [${next.x},${next.y}]`, "warning");
                        setActiveMessage("Manual override in progress...");
                    }
                }
            }

            // Update position and path history together
            if (next) {
                setCurrentNode(next);
                setPathHistory(prev => {
                    const newHistory = [...prev, next!];
                    return newHistory.slice(-40);
                });
            }
        }, hackerMode ? 80 : 150);

        return () => clearInterval(interval);
    }, [data, currentNode, visitedDates, isAuto, targetNode, autoTarget, contributionNodes, hackerMode, funMessages]);

    // Auto-scroll to keep Character in center (Camera Follow)
    useEffect(() => {
        if (!currentNode || !scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const nodeWidth = 16; // 12px width + 4px gap
        const paddingLeft = 8; // px-2 (container padding)

        // Calculate the center position of the target node relative to the container content
        const nodeCenter = paddingLeft + (currentNode.x * nodeWidth) + (nodeWidth / 2);

        // Calculate the desired scroll position to center the node
        // We want: nodeCenter - scrollLeft = containerWidth / 2
        // So: scrollLeft = nodeCenter - containerWidth / 2
        const halfContainer = container.clientWidth / 2;
        const targetScroll = nodeCenter - halfContainer;

        container.scrollTo({
            left: targetScroll,
            behavior: "smooth"
        });
    }, [currentNode]);

    if (loading) {
        return (
            <div className="flex items-center justify-center p-8 h-100 border border-cyan-500/20 rounded-xl bg-black/40 backdrop-blur-sm">
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
        <div className="flex flex-col lg:flex-row gap-6 p-4 bg-black/40 rounded-xl border border-white min-h-112.5 shadow-[0_0_15px_var(--cyber-white-glow)]">
            {/* Main Area: Grid & TSP Path */}
            <div className="flex-1 relative overflow-hidden flex flex-col">
                <div ref={scrollContainerRef} className="flex-1 relative overflow-x-auto pb-4 custom-scrollbar">
                    <div className="min-w-200 relative pt-6 px-2">
                        {/* SVG Layer for Path */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" style={{ left: 8, top: 24 }}>
                            <defs>
                                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
                                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0.6)" />
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            <path
                                d={pathHistory.map((p: { x: number; y: number }, i) => `${i === 0 ? 'M' : 'L'} ${p.x * 16 + 6} ${p.y * 16 + 6}`).join(' ')}
                                fill="none"
                                stroke="url(#pathGradient)"
                                strokeWidth="2"
                                strokeDasharray="4 2"
                                filter="url(#glow)"
                            />
                        </svg>

                        <div className="flex gap-1 relative z-10">
                            {data.contributions.map((week, weekIdx) => (
                                <div key={weekIdx} className="flex flex-col gap-1">
                                    {week.map((day, dayIdx) => {
                                        const isVisited = visitedDates.has(day.date);
                                        const isCurrent = currentNode?.x === weekIdx && currentNode?.y === dayIdx;
                                        const level = day.contributionLevel;

                                        const getBgColor = (lvl: string) => {
                                            switch (lvl) {
                                                case "FIRST_QUARTILE": return "bg-white/10";
                                                case "SECOND_QUARTILE": return "bg-white/30";
                                                case "THIRD_QUARTILE": return "bg-white/60";
                                                case "FOURTH_QUARTILE": return "bg-white";
                                                default: return "bg-white/5";
                                            }
                                        };

                                        return (
                                            <div
                                                key={day.date}
                                                onMouseEnter={(e) => {
                                                    setHoveredDay(day);
                                                    setTooltipPos({ x: e.clientX, y: e.clientY });
                                                }}
                                                onMouseMove={(e) => {
                                                    setTooltipPos({ x: e.clientX, y: e.clientY });
                                                }}
                                                onMouseLeave={() => setHoveredDay(null)}
                                                onClick={() => {
                                                    setIsAuto(false);
                                                    setTargetNode({ x: weekIdx, y: dayIdx });
                                                }}
                                                className={cn(
                                                    "w-3 h-3 rounded-xs transition-all duration-300 relative group cursor-pointer",
                                                    getBgColor(level),
                                                    isVisited && "ring-1 ring-white/50 shadow-[0_0_8px_var(--cyber-white-glow)]",
                                                    day.contributionCount > 0 && "hover:scale-125 hover:z-20",
                                                    isCurrent && "z-30"
                                                )}
                                            >
                                                {isCurrent && (
                                                    <motion.div
                                                        layoutId="cyber-probe"
                                                        className="absolute -inset-1 z-40"
                                                    >
                                                        <div className="w-full h-full relative">
                                                            <div className={cn(
                                                                "absolute inset-0 rounded-full border-2 border-white animate-ping opacity-75"
                                                            )} />
                                                            <div className={cn(
                                                                "w-full h-full rounded-sm bg-white shadow-[0_0_15px_var(--cyber-white-glow)] flex items-center justify-center",
                                                                hackerMode && "bg-red-500 animate-pulse shadow-[0_0_20px_var(--cyber-red)]"
                                                            )}>
                                                                <div className="w-1 h-1 bg-black rounded-full" />
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Fun Messages Area */}
                <div className="h-10 flex items-center justify-center bg-white/5 border-y border-white/20 mt-4 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeMessage}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-[10px] font-mono text-white uppercase tracking-[0.2em] italic text-center w-full"
                        >
                            &gt; {activeMessage}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Console Log */}
                <div className="flex flex-col gap-1.5 h-30 bg-black/40 p-3 mt-4 rounded-lg border border-white/20 font-mono overflow-hidden">
                    <div className="text-[8px] text-white/40 mb-2 border-b border-white/20 pb-1 flex justify-between">
                        <span>LIVE_CALC_STREAM_V4.2</span>
                        <span className="animate-pulse">STREAMING_ACTIVE</span>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <AnimatePresence initial={false}>
                            {logs.map((log) => (
                                <motion.div
                                    key={log.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={cn(
                                        "text-[9px] leading-tight mb-1",
                                        log.type === "success" ? "neon-white" :
                                            log.type === "warning" ? "text-red-400" :
                                                log.type === "error" ? "text-red-600" : "text-white/70"
                                    )}
                                >
                                    <span className="opacity-40 mr-1">[{new Date(log.timestamp).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
                                    {log.msg}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Sidebar: Neural Calc Lab */}
            <div className="w-full lg:w-72 flex flex-col gap-5 border-t lg:border-t-0 lg:border-l border-white/20 pt-4 lg:pt-0 lg:pl-6 bg-linear-to-b from-transparent to-black/10 shrink-0">
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_5px_var(--cyber-red)]" />
                        <h3 className="text-[10px] font-mono text-white uppercase tracking-widest font-bold">Neural Calc Lab</h3>
                    </div>
                </div>

                {/* Contribution Guide (Legend) */}
                <div className="flex flex-col gap-2 p-2 bg-white/5 rounded border border-white/20">
                    <div className="text-[7px] font-mono text-white/60 uppercase tracking-widest">Contribution Intensity</div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-[1px] bg-white/5" />
                        <div className="w-2.5 h-2.5 rounded-[1px] bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-[1px] bg-white/30" />
                        <div className="w-2.5 h-2.5 rounded-[1px] bg-white/60" />
                        <div className="w-2.5 h-2.5 rounded-[1px] bg-white" />
                        <div className="ml-auto text-[7px] font-mono text-white/40 uppercase">Low &rarr; High</div>
                    </div>
                </div>

                {/* Main Controls Section */}
                <div className="flex flex-col gap-2">
                    <div className="text-[8px] font-mono text-white/40 uppercase tracking-widest mb-1">Control Interface</div>
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={() => setIsAuto(!isAuto)}
                            className={cn(
                                "text-[9px] font-mono px-3 py-2 rounded border transition-all uppercase tracking-widest text-center font-bold cursor-pointer",
                                isAuto ? "bg-white/10 border border-white/50 text-white" : "bg-white/5 border border-white/20 text-white/60"
                            )}
                        >
                            {isAuto ? "Auto-Pilot: ACTIVE" : "Manual: STANDBY"}
                        </button>
                        {!isAuto && (
                            <button
                                onClick={() => {
                                    setIsAuto(true);
                                    setVisitedDates(new Set());
                                    setPathHistory([]);
                                }}
                                className="text-[9px] font-mono px-3 py-2 rounded border border-red-500/50 text-red-500 hover:bg-red-500/10 transition-all uppercase tracking-widest text-center font-bold cursor-pointer"
                            >
                                Re-Calibrate System
                            </button>
                        )}
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="flex flex-col gap-2">
                    <div className="text-[8px] font-mono text-white/40 uppercase tracking-widest mb-1">System Metrics</div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                        <div className="bg-white/5 p-2 rounded border border-white/20 h-11.25">
                            <div className="text-white/60 text-[7px] mb-1">VELOCITY</div>
                            <div className="text-white font-bold">{hackerMode ? "42.0 GB/s" : "12.5 GB/s"}</div>
                        </div>
                        <div className="bg-white/5 p-2 rounded border border-white/20 h-11.25">
                            <div className="text-white/60 text-[7px] mb-1">LATENCY</div>
                            <div className="text-white font-bold">1ms</div>
                        </div>
                        <div className="bg-white/5 p-2 rounded border border-white/20 h-11.25">
                            <div className="text-white/60 text-[7px] mb-1">NODES</div>
                            <div className="text-white font-bold">{contributionNodes.length}</div>
                        </div>
                        <div className="bg-white/5 p-2 rounded border border-white/20 h-11.25">
                            <div className="text-white/60 text-[7px] mb-1">CLEARANCE</div>
                            <div className="text-white font-bold">{Math.round((visitedDates.size / contributionNodes.length) * 100) || 0}%</div>
                        </div>
                    </div>
                </div>

                <div className="mt-auto pt-4 text-[8px] font-mono text-white/30 italic leading-relaxed border-t border-white/20">
                    Analyzing multidimensional contribution vectors using localized TSP heuristics... Optimized path found.
                </div>
            </div>

            {/* Intel Tooltip (Fixed with Portal) */}
            {/* Intel Tooltip (Fixed with Portal) */}
            {mounted && createPortal(
                <AnimatePresence>
                    {hoveredDay && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -5 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            style={{
                                position: "fixed",
                                left: tooltipPos.x,
                                top: tooltipPos.y + 15,
                                zIndex: 99999,
                                transform: "translateX(-50%)",
                                pointerEvents: "none",
                            }}
                            className="bg-black/95 backdrop-blur-xl border border-white/40 p-4 rounded-xl font-mono text-[10px] text-white shadow-[0_0_30px_var(--cyber-white-glow)] min-w-42.5"
                        >
                            <div className="relative">
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/60 uppercase text-[7px] tracking-widest border-b border-white/20 pb-0.5">Packet Origin</span>
                                        <span className="text-white/90">{hoveredDay.date}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/60 uppercase text-[7px] tracking-widest border-b border-white/20 pb-0.5">Payload</span>
                                        <span className="text-white font-bold">{hoveredDay.contributionCount} Commits</span>
                                    </div>
                                    <div className="mt-2 pt-2 border-t border-white/10 text-[8px] text-white/60 animate-pulse">
                                        [ DECRYPTING_CONTRIBUTION_METADATA... ]
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
}
