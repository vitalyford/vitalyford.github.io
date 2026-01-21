"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        id: 0,
        text: "And now these three remain: faith, hope and love. But the greatest of these is love.",
        author: "1 Corinthians 13:13",
        context: "Wisdom",
        x: 90, y: 30
    },
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
        context: "Inspiration",
        x: 85, y: 15
    },
    {
        id: 3,
        text: "Security is not a product, but a process.",
        author: "Bruce Schneier",
        context: "Security Philosophy",
        x: 50, y: 20
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
        text: "Complexity is the worst enemy of security.",
        author: "Bruce Schneier",
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
        <section
            className="quotes-section"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                padding: "10rem 0",
                position: "relative",
                overflow: "hidden",
                background: "transparent"
            }}
        >
            {/* Knowledge Graph Background */}
            <div className="quotes-graph-container" style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                opacity: 0.8
            }}>
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ filter: 'none' }}>
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
                                r={activeIndex === i ? 2.5 : 1}
                                fill={activeIndex === i ? "var(--cyber-cyan)" : "transparent"}
                                stroke="var(--cyber-cyan)"
                                strokeWidth="0.2"
                                animate={{
                                    opacity: activeIndex === i ? 1 : 0.4,
                                    r: activeIndex === i ? 2.5 : 1
                                }}
                                transition={{ duration: 0.4 }}
                                style={{ cursor: 'pointer' }}
                                onClick={() => setActiveIndex(i)}
                            />
                            <AnimatePresence mode="wait">
                                {activeIndex === i && (
                                    <motion.circle
                                        key={`pulse-${q.id}`}
                                        cx={q.x}
                                        cy={q.y}
                                        r={q.x > 50 ? 5 : 4}
                                        fill="transparent"
                                        stroke="var(--cyber-cyan)"
                                        strokeWidth="0.1"
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 2.5, opacity: 0.8 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            opacity: { duration: 0.3 },
                                            scale: { repeat: Infinity, duration: 3, ease: "easeOut" }
                                        }}
                                    />
                                )}
                            </AnimatePresence>
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
                    {/* Clickable Left/Right Halves for Navigation */}
                    <div
                        onClick={() => handlePaginate(-1)}
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "50%",
                            height: "100%",
                            cursor: "pointer",
                            zIndex: 5
                        }}
                        aria-label="Previous slide"
                    />
                    <div
                        onClick={() => handlePaginate(1)}
                        style={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            width: "50%",
                            height: "100%",
                            cursor: "pointer",
                            zIndex: 5
                        }}
                        aria-label="Next slide"
                    />

                    {/* Navigation Arrows - Improved contrast and simplified */}
                    <button
                        onClick={() => handlePaginate(-1)}
                        className="nav-arrow left"
                        aria-label="Previous quote"
                    >
                        <ChevronLeft size={36} strokeWidth={2.5} />
                    </button>

                    <button
                        onClick={() => handlePaginate(1)}
                        className="nav-arrow right"
                        aria-label="Next quote"
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
                                    z: isCenter ? 0 : -400, // Denoted 3D depth to prevent Z-fighting
                                    zIndex: isCenter ? 50 : 10, // Deterministic stacking
                                    opacity: isVisible ? (isCenter ? 1 : 0.3) : 0,
                                    backgroundColor: isCenter ? "rgba(10, 10, 15, 0.98)" : "rgba(10, 10, 15, 0.7)",
                                    borderColor: isCenter ? "var(--cyber-cyan)" : "var(--cyber-border)",
                                    boxShadow: 'none',
                                    pointerEvents: isVisible ? "auto" : "none"
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 150, // Softer springs for more "weight"
                                    damping: 30,    // High damping prevents overshoot and flicker
                                    mass: 1.2,
                                    zIndex: { duration: 0 }
                                }}
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
                                    borderStyle: "solid",
                                    filter: isCenter ? "blur(0px)" : "blur(4px)",
                                    transition: "filter 0.4s ease-out"
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

                                <div className="quote-body">
                                    {/* Quote Watermark Icon */}
                                    <div className="quote-watermark">
                                        <svg className="quote-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                                            <path d="M3 21c3 0 7-1 7-8V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c0 3.5-3 4.5-5 5" />
                                            <path d="M14 21c3 0 7-1 7-8V5c0-1.1-.9-2-2-2h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c0 3.5-3 4.5-5 5" />
                                        </svg>
                                    </div>

                                    <div className="quote-text-container">
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

                                        <div className="quote-author-block">
                                            <div className="author-row">
                                                <div className="author-dash" />
                                                <cite className="author-name">{quote.author}</cite>
                                            </div>
                                            {quote.context && (
                                                <div className="quote-context">
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
                .nav-arrow {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(10, 10, 15, 0.95);
                    backdrop-filter: blur(12px);
                    border: 2px solid var(--cyber-cyan);
                    border-radius: 50%;
                    color: var(--cyber-cyan);
                    cursor: pointer;
                    z-index: 100;
                    width: 64px;
                    height: 64px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
                    box-shadow: none;
                }
                .nav-arrow.left {
                    left: 2rem; /* Inside the container */
                }
                .nav-arrow.right {
                    right: 2rem; /* Inside the container */
                }
                .nav-arrow:hover {
                    background: var(--cyber-cyan);
                    color: var(--cyber-black);
                    transform: translateY(-50%) scale(1.1);
                    box-shadow: none;
                }
                .nav-arrow:active {
                    transform: translateY(-50%) scale(0.9);
                }
                .preview:hover {
                    border-color: rgba(0, 245, 255, 0.5) !important;
                    opacity: 0.6 !important;
                }

                /* Default / Desktop Styles */
                .quote-body {
                    padding: 4rem 3rem;
                    position: relative;
                }
                .quote-watermark {
                    position: absolute;
                    top: 1.5rem;
                    left: 1rem;
                    color: var(--cyber-cyan);
                    opacity: 0.15;
                    user-select: none;
                    pointer-events: none;
                    z-index: 0;
                }
                .quote-svg {
                    width: 120px;
                    height: 120px;
                }
                .quote-text-container {
                    position: relative;
                    z-index: 1;
                    padding-left: 8rem;
                    padding-right: 1.5rem;
                }
                .quote-author-block {
                    margin-top: 3rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                }
                .author-row {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .author-dash {
                    width: 32px;
                    height: 2px;
                    background: var(--cyber-cyan);
                    box-shadow: none;
                    border-radius: 4px;
                }
                .author-name {
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: var(--cyber-cyan);
                    font-style: normal;
                }
                .quote-context {
                    margin-left: 3rem;
                    font-family: var(--font-mono), monospace;
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                }

                /* Tablet/Smaller Desktop Styles */
                @media (max-width: 1024px) {
                    .nav-arrow {
                        width: 48px;
                        height: 48px;
                    }
                    .nav-arrow.left {
                        left: 1rem;
                    }
                    .nav-arrow.right {
                        right: 1rem;
                    }
                }

                /* Mobile Optimizations */
                /* Mobile Optimizations */
                @media (max-width: 768px) {
                    .quote-body {
                        padding: 2rem 1.5rem;
                    }
                    .quote-svg {
                        width: 60px;
                        height: 60px;
                    }
                    .quote-text-container {
                        padding-left: 4.5rem;
                        padding-right: 0;
                    }
                    .quote-author-block {
                        margin-top: 1.5rem;
                    }
                    .author-name {
                        font-size: 1rem;
                    }
                    .quote-context {
                        margin-left: 3rem; 
                    }
                    
                    /* Move arrows to bottom on mobile */
                    .nav-arrow {
                        top: auto;
                        bottom: -5rem; /* Positioned relative to the container height */
                        transform: none;
                        width: 40px;
                        height: 40px;
                        background: rgba(10, 10, 15, 0.8);
                    }
                    .nav-arrow:hover {
                        transform: scale(1.1);
                    }
                    .nav-arrow:active {
                        transform: scale(0.9);
                    }
                    .nav-arrow.left {
                        left: 25%;
                        margin-left: -60px; /* Offset from center area */
                    }
                    .nav-arrow.right {
                        right: 25%;
                        margin-right: -60px; /* Offset from center area */
                        left: auto;
                    }
                }
                
                @media (max-width: 480px) {
                    .quote-watermark {
                        top: 1rem;
                        left: 1rem;
                    }
                    .quote-svg {
                        width: 40px;
                        height: 40px;
                    }
                    .quote-text-container {
                        padding-left: 0; /* Stack layout for very small screens */
                        padding-top: 4.5rem; /* Make room for icon at top-left */
                    }
                    .quote-context {
                         margin-left: 2rem;
                    }
                }
            `}</style>
        </section >
    );
}
