"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const funFacts = [
    { hex: "0x2F", text: "Hardware is the part of a computer that you can kick." },
    { hex: "0xED", text: "There are 10 types of people: those who understand binary, and those who don't." },
    { hex: "0xA1", text: "Oct 31 == Dec 25 (Programmers mix up Halloween and Christmas)." },
    { hex: "0x5C", text: "A SQL query walks into a bar, asks two tables, 'Can I join you?'" },
    { hex: "0x8D", text: "The first bug was a real moth found in a Relay Calculator in 1947." },
    { hex: "0xB2", text: "640K ought to be enough for anybody." },
    { hex: "0xF4", text: "Algorithm: A word used by programmers when they don't want to explain what they did." },
    { hex: "0x1A", text: "The Computer is incredibly fast, accurate and stupid. Man is unbelievably slow, inaccurate and brilliant. The marriage of the two is a challenge and an opportunity beyond imagination." },
    { hex: "0x3B", text: "Debugging is like being the detective in a crime movie where you are also the murderer. — Filipe Fortes" },
    { hex: "0x4C", text: "If at first you don't succeed, call it version 1.0." },
    { hex: "0x7D", text: "A programmer had a problem. He decided to use Java. Now he has a ProblemFactory." },
    { hex: "0x0E", text: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight. — Bill Gates" },
    { hex: "0xDE", text: "The best thing about a boolean is even if you are wrong, you are only off by a bit." },
    { hex: "0xAD", text: "Deleted code is debugged code. — Jeff Sickel" },
    { hex: "0x7F", text: "There is no place like 127.0.0.1." },
    { hex: "0x9E", text: "To err is human, but to really foul things up you need a computer. — Paul R. Ehrlich" },
    { hex: "0x5A", text: "Java is to JavaScript what car is to Carpet. — Chris Heilmann" },
    { hex: "0xB0", text: "Hardware eventually fails. Software eventually works. — Michael Hartung" },
    { hex: "0x0D", text: "Computer science is no more about computers than astronomy is about telescopes. — Edsger W. Dijkstra" },
    { hex: "0x2C", text: "Walking on water and developing software from a specification are easy if both are frozen. — Edward V. Berard" },
    { hex: "0x6F", text: "The gap between theory and practice is smaller in theory than in practice." },
    { hex: "0x3E", text: "The most disastrous thing you can ever learn is your first programming language. — Alan Kay" },
    { hex: "0x5F", text: "Real programmers count from 0." },
    { hex: "0x12", text: "Wait, it's all just 'if' statements? Always has been." },
    { hex: "0x9D", text: "Programming is 10% writing code and 90% understanding why the code you wrote isn't working." },
    { hex: "0xA0", text: "Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics. — Norman Augustine" },
    { hex: "0x72", text: "Rust: Because memory safety should be a right, not a privilege. Also, iterators are life. — Vitaly Ford" },
    { hex: "0x31", text: "Any complex problem can be solved in one line of Rust if you have enough iterators and a complete lack of fear. — Vitaly Ford" },
];

interface HexRouletteProps {
    showFact?: boolean;
    displayMode?: "inline" | "tooltip-bottom" | "tooltip-top-right";
}

export default function HexRoulette({ showFact = true, displayMode = "inline" }: HexRouletteProps) {
    const [isStopped, setIsStopped] = useState(false);
    const [hexValue, setHexValue] = useState("0x??");
    const [fact, setFact] = useState("");

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let timeout: NodeJS.Timeout;

        if (!isStopped) {
            interval = setInterval(() => {
                const randomHex = Math.floor(Math.random() * 256).toString(16).toUpperCase().padStart(2, "0");
                setHexValue(`0x${randomHex}`);
            }, 50);

            timeout = setTimeout(() => {
                clearInterval(interval);
                setIsStopped(true);
                const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
                setHexValue(randomFact.hex);
                setFact(randomFact.text);
            }, 1500);
        }

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [isStopped]);

    const isTooltip = displayMode === "tooltip-bottom" || displayMode === "tooltip-top-right";

    // Standard rendering for all devices
    const content = (
        <AnimatePresence>
            {isStopped && showFact && fact && (
                <motion.div
                    key="tooltip-standard"
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                        y: displayMode === "tooltip-bottom" ? 5 : (displayMode === "tooltip-top-right" ? -5 : 0),
                        x: isTooltip ? "-50%" : 0
                    }}
                    animate={{ opacity: 1, scale: 1, y: 0, x: isTooltip ? "-50%" : 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: isTooltip ? "-50%" : 0 }}
                    className={isTooltip ? "roulette-tooltip" : "roulette-inline"}
                    style={{
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-mono), monospace",
                        borderLeft: isTooltip ? "none" : "1px solid var(--cyber-border)",
                        paddingLeft: isTooltip ? "0" : "1rem",
                        maxWidth: isTooltip ? "350px" : "none",
                        lineHeight: "1.4",
                        whiteSpace: "normal",
                        flex: isTooltip ? "none" : "1",
                        ...(isTooltip ? {
                            position: "absolute",
                            background: "rgba(10, 10, 15, 0.95)",
                            backdropFilter: "blur(8px)",
                            padding: "0.75rem 1rem",
                            borderRadius: "8px",
                            border: "1px solid var(--cyber-cyan-glow)",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                            zIndex: 100,
                            width: "max-content",
                            minWidth: "200px",
                            ...(displayMode === "tooltip-bottom" ? {
                                top: "100%",
                                left: "50%",
                                marginTop: "0.75rem",
                            } : {
                                bottom: "100%",
                                left: "50%",
                                marginBottom: "0.75rem",
                            })
                        } : {})
                    }}
                >
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                        <span style={{ color: "var(--cyber-cyan)", fontWeight: "bold" }}>&gt;</span>
                        {fact}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    const handleReroll = () => {
        if (isStopped) {
            setIsStopped(false);
            setFact("");
        }
    };

    return (
        <div
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1rem",
                position: "relative",
                flexWrap: "wrap",
                width: isTooltip ? "auto" : "auto"
            }}
        >
            <span
                className="cyber-indicator"
                onClick={handleReroll}
                title="Click to roll again"
                style={{
                    animation: isStopped ? "none" : undefined,
                    cursor: isStopped ? "pointer" : "wait",
                }}
            >
                {hexValue}
            </span>
            {content}
        </div>
    );
}

// Helper to keep formatting, never used but prevents errors if I deleted too much
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _unused = null;


