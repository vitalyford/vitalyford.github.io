"use client";

import React, { useState, useEffect } from 'react';

interface Quote {
    text: string;
    author: string;
    context?: string;
}

const quotes: Quote[] = [
    {
        text: "Teach me and I will forget. Show me and I may remember. Involve me and I'll understand.",
        author: "Xun Kuang",
        context: "Fundamental Pedagogy"
    },
    {
        text: "Reach for the stars, and you won't even notice when you pass the sky.",
        author: "Vitaly Ford",
        context: "Core Directive"
    }
];

export default function QuotesStream() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % quotes.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="quotes-section" style={{ padding: "6rem 0", position: "relative", overflow: "hidden" }}>
            {/* Background Data Stream Effect */}
            <div className="data-stream-bg" style={{
                position: "absolute",
                inset: 0,
                opacity: 0.03,
                pointerEvents: "none",
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.8rem",
                lineHeight: "1.2",
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                padding: "1rem",
                userSelect: "none",
                zIndex: 0
            }}>
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="stream-column" style={{
                        display: "flex",
                        flexDirection: "column",
                        animation: `stream-fade-move ${5 + Math.random() * 5}s linear infinite`,
                        animationDelay: `${Math.random() * 5}s`
                    }}>
                        {Array.from({ length: 15 }).map((_, j) => (
                            <span key={j}>{(Math.random() > 0.5 ? '1' : '0')}</span>
                        ))}
                    </div>
                ))}
            </div>

            <div className="container-cyber" style={{ position: "relative", zIndex: 1 }}>
                <div className="quotes-grid" style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "2.5rem",
                    maxWidth: "1100px",
                    margin: "0 auto"
                }}>
                    {quotes.map((quote, index) => (
                        <div
                            key={index}
                            className="cyber-card quote-item"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0",
                                padding: "0",
                                background: "rgba(10, 10, 15, 0.6)",
                                border: "1px solid var(--cyber-border)",
                                transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
                                cursor: "default",
                                overflow: "hidden",
                                transform: activeIndex === index ? "translateY(-10px)" : "none",
                                boxShadow: activeIndex === index ? "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px var(--cyber-cyan-glow)" : "none"
                            }}
                        >
                            {/* Terminal Header */}
                            <div style={{
                                background: "rgba(255, 255, 255, 0.03)",
                                padding: "0.75rem 1.25rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                                borderBottom: "1px solid var(--cyber-border)"
                            }}>
                                <div style={{ display: "flex", gap: "6px" }}>
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff5f56" }} />
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ffbd2e" }} />
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#27c93f" }} />
                                </div>
                            </div>

                            <div style={{ padding: "2.5rem", position: "relative" }}>
                                <span style={{
                                    position: "absolute",
                                    top: "1.5rem",
                                    left: "1.5rem",
                                    fontSize: "4rem",
                                    fontFamily: "serif",
                                    color: "var(--cyber-cyan)",
                                    opacity: 0.1,
                                    lineHeight: 1,
                                    userSelect: "none"
                                }}>“</span>

                                <p style={{
                                    fontSize: "1.35rem",
                                    lineHeight: 1.6,
                                    color: "var(--text-primary)",
                                    margin: 0,
                                    position: "relative",
                                    zIndex: 1,
                                    fontWeight: 400,
                                    letterSpacing: "-0.01em"
                                }}>
                                    {quote.text}
                                </p>
                            </div>

                            <div style={{
                                marginTop: "auto",
                                padding: "1.5rem 2.5rem 2.5rem",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem"
                            }}>
                                <div style={{
                                    height: "1px",
                                    width: "100%",
                                    background: "linear-gradient(90deg, var(--cyber-cyan), transparent)",
                                    opacity: 0.3,
                                    marginBottom: "0.5rem"
                                }} />

                                <cite style={{
                                    fontSize: "1.1rem",
                                    fontWeight: 600,
                                    color: "var(--cyber-cyan)",
                                    fontStyle: "normal",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem"
                                }}>
                                    <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>—</span> {quote.author}
                                </cite>

                                {quote.context && (
                                    <div style={{
                                        fontFamily: "var(--font-mono), monospace",
                                        fontSize: "0.7rem",
                                        color: "var(--text-muted)",
                                        textTransform: "uppercase",
                                        letterSpacing: "1px"
                                    }}>
                                        Origin: {quote.context}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes stream-fade-move {
          0% { opacity: 0; transform: translateY(-20px); }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { opacity: 0; transform: translateY(20px); }
        }
        .quote-item:hover {
          border-color: var(--cyber-cyan) !important;
          background: rgba(10, 10, 15, 0.8) !important;
        }
        .quote-item:hover :global(cite) {
          text-shadow: 0 0 10px var(--cyber-cyan-glow);
        }
      `}</style>
        </section>
    );
}
