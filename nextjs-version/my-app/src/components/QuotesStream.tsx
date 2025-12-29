"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Quote {
    id: number;
    text: string;
    author: string;
    context?: string;
    x: number; // graph position %
    y: number; // graph position %
}

const quotes: Quote[] = [
    {
        id: 1,
        text: "Teach me and I will forget. Show me and I may remember. Involve me and I'll understand.",
        author: "Xun Kuang",
        context: "Fundamental Pedagogy",
        x: 15, y: 25
    },
    {
        id: 2,
        text: "Reach for the stars, and you won't even notice when you pass the sky.",
        author: "Vitaly Ford",
        context: "Core Directive",
        x: 85, y: 15
    },
    {
        id: 3,
        text: "Security is not a product, but a process.",
        author: "Bruce Schneier",
        context: "Security Philosophy",
        x: 50, y: 50
    },
    {
        id: 4,
        text: "The art of teaching is the art of assisting discovery.",
        author: "Mark Van Doren",
        context: "Educational Insight",
        x: 20, y: 75
    },
    {
        id: 5,
        text: "Complexity is the enemy of security.",
        author: "Gary McGraw",
        context: "System Design",
        x: 80, y: 80
    }
];

export default function QuotesStream() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % quotes.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isHovered, activeIndex]);

    const getDistance = (index: number) => {
        let diff = index - activeIndex;
        // Handle circular distance
        if (diff > quotes.length / 2) diff -= quotes.length;
        if (diff < -quotes.length / 2) diff += quotes.length;
        return diff;
    };

    const handlePaginate = (dir: number) => {
        setActiveIndex((prev) => (prev + dir + quotes.length) % quotes.length);
    };

    return (
        <section className="quotes-section" style={{
            padding: "10rem 0",
            position: "relative",
            overflow: "hidden",
            background: "radial-gradient(circle at 50% 50%, rgba(0, 245, 255, 0.05) 0%, transparent 80%)"
        }}>
            {/* Knowledge Graph Background */}
            <div className="quotes-graph-container" style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                opacity: 0.8
            }}>
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ filter: 'drop-shadow(0 0 8px var(--cyber-cyan-glow))' }}>
                    {quotes.map((q, i) => (
                        quotes.map((nextQ, j) => {
                            if (i >= j) return null;
                            const isActive = activeIndex === i || activeIndex === j;
                            return (
                                <motion.line
                                    key={`line-${i}-${j}`}
                                    x1={q.x}
                                    y1={q.y}
                                    x2={nextQ.x}
                                    y2={nextQ.y}
                                    stroke="var(--cyber-cyan)"
                                    strokeWidth={isActive ? "0.3" : "0.08"}
                                    animate={{
                                        opacity: isActive ? 0.35 : 0.05,
                                        strokeWidth: isActive ? 0.3 : 0.08
                                    }}
                                    transition={{ duration: 0.8 }}
                                />
                            );
                        })
                    ))}

                    {quotes.map((q, i) => (
                        <g key={`node-${q.id}`}>
                            <motion.circle
                                cx={q.x}
                                cy={q.y}
                                r={activeIndex === i ? 2.2 : 0.8}
                                fill={activeIndex === i ? "var(--cyber-cyan)" : "transparent"}
                                stroke="var(--cyber-cyan)"
                                strokeWidth="0.2"
                                animate={{
                                    opacity: activeIndex === i ? 1 : 0.4,
                                    r: activeIndex === i ? 2.5 : 1
                                }}
                                style={{ cursor: 'pointer' }}
                                onClick={() => setActiveIndex(i)}
                            />
                            {activeIndex === i && (
                                <motion.circle
                                    cx={q.x}
                                    cy={q.y}
                                    r={q.x > 50 ? 5 : 4}
                                    fill="transparent"
                                    stroke="var(--cyber-cyan)"
                                    strokeWidth="0.1"
                                    initial={{ scale: 0.5, opacity: 0.8 }}
                                    animate={{ scale: 2.5, opacity: 0 }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
                                />
                            )}
                        </g>
                    ))}
                </svg>
            </div>

            <div className="container-cyber" style={{ position: "relative", zIndex: 1 }}>
                <div style={{
                    position: "relative",
                    height: "480px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    perspective: "1200px",
                    transformStyle: "preserve-3d"
                }}>
                    {/* Navigation Arrows - Improved contrast and simplified */}
                    <button
                        onClick={() => handlePaginate(-1)}
                        className="nav-arrow left"
                        style={{
                            position: "absolute",
                            left: "-5vw",
                            background: "rgba(10, 10, 15, 0.95)",
                            backdropFilter: "blur(12px)",
                            border: "2px solid var(--cyber-cyan)",
                            borderRadius: "50%",
                            color: "var(--cyber-cyan)",
                            cursor: "pointer",
                            zIndex: 100,
                            width: "64px",
                            height: "64px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s cubic-bezier(0.19, 1, 0.22, 1)",
                            boxShadow: "0 0 30px rgba(0, 245, 255, 0.2)"
                        }}
                    >
                        <ChevronLeft size={36} strokeWidth={2.5} />
                    </button>

                    <button
                        onClick={() => handlePaginate(1)}
                        className="nav-arrow right"
                        style={{
                            position: "absolute",
                            right: "-5vw",
                            background: "rgba(10, 10, 15, 0.95)",
                            backdropFilter: "blur(12px)",
                            border: "2px solid var(--cyber-cyan)",
                            borderRadius: "50%",
                            color: "var(--cyber-cyan)",
                            cursor: "pointer",
                            zIndex: 100,
                            width: "64px",
                            height: "64px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s cubic-bezier(0.19, 1, 0.22, 1)",
                            boxShadow: "0 0 30px rgba(0, 245, 255, 0.2)"
                        }}
                    >
                        <ChevronRight size={36} strokeWidth={2.5} />
                    </button>

                    {/* All Cards Rendered with Stable Keys for Smooth Motion */}
                    {quotes.map((quote, idx) => {
                        const distance = getDistance(idx);
                        const isCenter = distance === 0;
                        const isVisible = Math.abs(distance) <= 1.5;

                        return (
                            <motion.div
                                key={quote.id}
                                initial={false}
                                animate={{
                                    x: distance * 340,
                                    scale: isCenter ? 1 : 0.82,
                                    rotateY: distance * -25,
                                    zIndex: isCenter ? 50 : 20 - Math.abs(distance),
                                    opacity: isVisible ? (isCenter ? 1 : 0.3) : 0,
                                    filter: isCenter ? "none" : "blur(3px)",
                                    backgroundColor: isCenter ? "rgba(10, 10, 15, 0.98)" : "rgba(10, 10, 15, 0.7)",
                                    borderColor: isCenter ? "var(--cyber-cyan)" : "var(--cyber-border)",
                                    boxShadow: isCenter
                                        ? "0 40px 80px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 245, 255, 0.25)"
                                        : "0 10px 40px rgba(0, 0, 0, 0.5)",
                                    pointerEvents: isVisible ? "auto" : "none"
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 220,
                                    damping: 24,
                                    mass: 1,
                                    zIndex: { duration: 0 }
                                }}
                                onMouseEnter={() => isCenter && setIsHovered(true)}
                                onMouseLeave={() => isCenter && setIsHovered(false)}
                                onClick={() => !isCenter && setActiveIndex(idx)}
                                className={`cyber-card quote-card-3d ${isCenter ? 'active' : 'preview'}`}
                                style={{
                                    position: "absolute",
                                    width: "min(600px, 85vw)",
                                    padding: "0",
                                    backdropFilter: "blur(20px)",
                                    transformStyle: "preserve-3d",
                                    cursor: isCenter ? "default" : "pointer",
                                    borderWidth: "1px",
                                    borderStyle: "solid"
                                }}
                            >
                                {/* Clean Header without Title */}
                                <div style={{
                                    background: isCenter ? "rgba(0, 245, 255, 0.12)" : "rgba(255, 255, 255, 0.03)",
                                    padding: "1rem 1.5rem",
                                    display: "flex",
                                    alignItems: "center",
                                    borderBottom: `1px solid ${isCenter ? "rgba(0, 245, 255, 0.25)" : "rgba(255, 255, 255, 0.08)"}`,
                                    transition: "background 0.4s ease, border-color 0.4s ease"
                                }}>
                                    <div style={{ display: "flex", gap: "8px" }}>
                                        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f56", boxShadow: "0 0 5px rgba(255, 95, 86, 0.3)" }} />
                                        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e", boxShadow: "0 0 5px rgba(255, 189, 46, 0.3)" }} />
                                        <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27c93f", boxShadow: "0 0 5px rgba(39, 201, 63, 0.3)" }} />
                                    </div>
                                </div>

                                <div style={{ padding: "4rem 3rem", position: "relative" }}>
                                    {/* Quote Watermark Icon */}
                                    <div style={{ position: "absolute", top: "1.5rem", left: "1rem", color: "var(--cyber-cyan)", opacity: 0.15, userSelect: "none", pointerEvents: "none", zIndex: 0 }}>
                                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                                            <path d="M3 21c3 0 7-1 7-8V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c0 3.5-3 4.5-5 5" />
                                            <path d="M14 21c3 0 7-1 7-8V5c0-1.1-.9-2-2-2h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c0 3.5-3 4.5-5 5" />
                                        </svg>
                                    </div>

                                    <div style={{ position: "relative", zIndex: 1, paddingLeft: "8rem", paddingRight: "1.5rem" }}>
                                        <p style={{
                                            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                                            lineHeight: 1.6,
                                            color: isCenter ? "var(--text-primary)" : "var(--text-secondary)",
                                            margin: 0,
                                            fontWeight: 400,
                                            fontStyle: "italic",
                                            letterSpacing: "0.01em"
                                        }}>
                                            &quot;{quote.text}&quot;
                                        </p>

                                        <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                                <div style={{ width: "32px", height: "2px", background: "var(--cyber-cyan)", boxShadow: "0 0 10px var(--cyber-cyan)", borderRadius: "4px" }} />
                                                <cite style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--cyber-cyan)", fontStyle: "normal" }}>{quote.author}</cite>
                                            </div>
                                            {quote.context && (
                                                <div style={{ marginLeft: "3rem", fontFamily: "var(--font-mono), monospace", fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                                                    {quote.context}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Simplified Pagination */}
                <div style={{ display: "flex", justifyContent: "center", gap: "0.85rem", marginTop: "4rem" }}>
                    {quotes.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            style={{
                                width: i === activeIndex ? "40px" : "12px",
                                height: "6px",
                                background: i === activeIndex ? "var(--cyber-cyan)" : "rgba(255, 255, 255, 0.15)",
                                border: "none",
                                cursor: "pointer",
                                transition: "all 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
                                borderRadius: "3px",
                                boxShadow: i === activeIndex ? "0 0 10px var(--cyber-cyan)" : "none"
                            }}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .quotes-section {
                    background-image: 
                        linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px);
                    background-size: 100px 100px;
                }
                .nav-arrow:hover {
                    background: var(--cyber-cyan) !important;
                    color: var(--cyber-black) !important;
                    transform: scale(1.1) !important;
                    box-shadow: 0 0 50px var(--cyber-cyan) !important;
                }
                .nav-arrow:active {
                    transform: scale(0.9) !important;
                }
                .preview:hover {
                    border-color: rgba(0, 245, 255, 0.5) !important;
                    opacity: 0.6 !important;
                }
                @media (max-width: 1024px) {
                    .nav-arrow {
                        width: 48px !important;
                        height: 48px !important;
                        left: 1rem !important;
                        right: auto !important;
                    }
                    .nav-arrow.right {
                        right: 1rem !important;
                        left: auto !important;
                    }
                }
            `}</style>
        </section>
    );
}
