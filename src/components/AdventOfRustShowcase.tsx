"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AdventOfRustShowcase() {
    return (
        <section className="animate-fade-in" style={{ padding: "4rem 0" }}>
            <div className="section-heading" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span>Beyond Academics</span>
                <div style={{ height: "1px", flex: 1, background: "linear-gradient(90deg, var(--cyber-cyan-glow), transparent)" }} />
            </div>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                gap: "2.5rem",
                alignItems: "stretch"
            }}>
                {/* Left side: Context & Stats */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="cyber-card" style={{ padding: "2rem", display: "flex", flexDirection: "column", height: "100%" }}>
                        <h3 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "1rem" }}>
                            Building & Breaking Software
                        </h3>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.2rem" }}>
                            Back in the day I competed in <a href="https://nationalcyberleague.org/" target="_blank" rel="noopener noreferrer">NCL</a>, <a href="https://icpc.global/" target="_blank" rel="noopener noreferrer">ICPC</a>, <a href="https://cp-tc.org/" target="_blank" rel="noopener noreferrer">CPTC</a>, <a href="https://www.nationalccdc.org/" target="_blank" rel="noopener noreferrer">CCDC</a>, and OWASP Secure Coding. Building on those experiences, I have been training teams in NCL and ICPC ever since.
                        </p>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.2rem" }}>
                            I am also working with many <a href="https://www.wicys.org/" target="_blank" rel="noopener noreferrer">Women in Cybersecurity</a> student chapters globally to help recruit, retain, and advance women in cybersecurity as part of a workforce solution.
                        </p>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.2rem" }}>
                            I also love building startups. As a co-founder and CTO of <a href="https://citodex.com" target="_blank" rel="noopener noreferrer">Citodex</a>, I have been working extensively with diverse tech stacks, AI, security, and cloud infrastructure.
                        </p>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                            I enjoy contributing to open-source software and occasionally engaging in bug bounty hunting. I also love solving puzzles, like <a href="https://adventofcode.com/" target="_blank" rel="noopener noreferrer">Advent of Code</a> in <b>Rust</b> was a blast, especially playing with the power of functional chains.
                        </p>
                        <motion.div
                            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{ position: "absolute", top: "1rem", right: "1rem", fontSize: "1.5rem", opacity: 0.3 }}
                        >
                            🦀
                        </motion.div>
                    </div>
                </div>

                {/* Right side: Code Window */}
                <div className="h-96 md:h-0 md:min-h-full" style={{ position: "relative" }}>
                    <div className="cyber-card" style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        padding: "0",
                        overflow: "hidden",
                        background: "#0d1117",
                        border: "1px solid var(--cyber-border)",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
                    }}>
                        {/* Terminal Header */}
                        <div style={{
                            background: "#161b22",
                            padding: "0.75rem 1rem",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderBottom: "1px solid var(--cyber-border)"
                        }}>
                            <div style={{ display: "flex", gap: "6px" }}>
                                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f56" }} />
                                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e" }} />
                                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27c93f" }} />
                            </div>
                            <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                                AdventOfCode2022/src/day05/main.rs
                            </div>
                        </div>
                        {/* Code Content */}
                        <div style={{
                            padding: "1.5rem",
                            flex: 1,
                            minHeight: 0,
                            overflowY: "auto",
                            fontFamily: "var(--font-mono), monospace",
                            fontSize: "0.85rem",
                            lineHeight: "1.5",
                            color: "#e6edf3"
                        }}>
                            <pre style={{ margin: 0 }}>
                                <span style={{ color: "#79c0ff" }}>use</span> std::collections::{"{"}BTreeMap, VecDeque{"}"};{"\n"}
                                <span style={{ color: "#79c0ff" }}>use</span> std::fs::read_to_string;{"\n\n"}
                                <span style={{ color: "#ff7b72" }}>fn</span> <span style={{ color: "#d2a8ff" }}>main</span>() {"{"}{"\n"}
                                {"    "}<span style={{ color: "#ff7b72" }}>let mut</span> crates = BTreeMap::<span style={{ color: "#d2a8ff" }}>new</span>();{"\n"}
                                {"    "}read_to_string(<span style={{ color: "#a5d6ff" }}>"./data.txt"</span>){"\n"}
                                {"        "}.<span style={{ color: "#d2a8ff" }}>expect</span>(<span style={{ color: "#a5d6ff" }}>"File does not exist!"</span>){"\n"}
                                {"        "}.<span style={{ color: "#d2a8ff" }}>lines</span>(){"\n"}
                                {"        "}.<span style={{ color: "#d2a8ff" }}>for_each</span>(|line| {"{"}{"\n"}
                                {"            "}<span style={{ color: "#ff7b72" }}>if</span> !line.<span style={{ color: "#d2a8ff" }}>trim</span>().<span style={{ color: "#d2a8ff" }}>is_empty</span>() {"{"}{"\n"}
                                {"                "}<span style={{ color: "#ff7b72" }}>match</span> &line.<span style={{ color: "#d2a8ff" }}>trim</span>()[<span style={{ color: "#a5d6ff" }}>0..1</span>] {"{"}{"\n"}
                                {"                    "}<span style={{ color: "#a5d6ff" }}>"["</span> =&gt; line{"\n"}
                                {"                        "}.<span style={{ color: "#d2a8ff" }}>chars</span>(){"\n"}
                                {"                        "}.<span style={{ color: "#d2a8ff" }}>collect</span>::&lt;Vec&lt;char&gt;&gt;(){"\n"}
                                {"                        "}.<span style={{ color: "#d2a8ff" }}>chunks</span>(<span style={{ color: "#79c0ff" }}>4</span>){"\n"}
                                {"                        "}.<span style={{ color: "#d2a8ff" }}>map</span>(|c| c.<span style={{ color: "#d2a8ff" }}>iter</span>().<span style={{ color: "#d2a8ff" }}>collect</span>::&lt;String&gt;()){"\n"}
                                {"                        "}.<span style={{ color: "#d2a8ff" }}>enumerate</span>(){"\n"}
                                {"                        "}.<span style={{ color: "#d2a8ff" }}>filter_map</span>(|(i, s)| <span style={{ color: "#ff7b72" }}>match</span> s.<span style={{ color: "#d2a8ff" }}>chars</span>().<span style={{ color: "#d2a8ff" }}>nth</span>(<span style={{ color: "#79c0ff" }}>1</span>).<span style={{ color: "#d2a8ff" }}>unwrap</span>() {"{"}{"\n"}
                                {"                            "}<span style={{ color: "#79c0ff" }}>' '</span> =&gt; <span style={{ color: "#79c0ff" }}>None</span>,{"\n"}
                                {"                            "}_ =&gt; <span style={{ color: "#79c0ff" }}>Some</span>(((i + <span style={{ color: "#79c0ff" }}>1</span>).<span style={{ color: "#d2a8ff" }}>to_string</span>(), s[<span style={{ color: "#a5d6ff" }}>1..2</span>].<span style={{ color: "#d2a8ff" }}>to_owned</span>())),{"\n"}
                                {"                        "}{"}"}){"\n"}
                                {"                        "}.<span style={{ color: "#d2a8ff" }}>for_each</span>(|(i, s)| crates.<span style={{ color: "#d2a8ff" }}>entry</span>(i).<span style={{ color: "#d2a8ff" }}>or_insert</span>(VecDeque::<span style={{ color: "#d2a8ff" }}>new</span>()).<span style={{ color: "#d2a8ff" }}>push_back</span>(s)),{"\n"}
                                {"                    "}<span style={{ color: "#a5d6ff" }}>"m"</span> =&gt; {"{"}{"\n"}
                                {"                        "}<span style={{ color: "#ff7b72" }}>for</span> i <span style={{ color: "#ff7b72" }}>in</span> <span style={{ color: "#79c0ff" }}>0</span>..line{"\n"}
                                {"                            "}.<span style={{ color: "#d2a8ff" }}>split</span>(<span style={{ color: "#a5d6ff" }}>" "</span>){"\n"}
                                {"                            "}.<span style={{ color: "#d2a8ff" }}>map</span>(|e| e.<span style={{ color: "#d2a8ff" }}>to_string</span>()){"\n"}
                                {"                            "}.<span style={{ color: "#d2a8ff" }}>collect</span>::&lt;Vec&lt;String&gt;&gt;()[<span style={{ color: "#79c0ff" }}>1</span>]{"\n"}
                                {"                            "}.<span style={{ color: "#d2a8ff" }}>parse</span>().<span style={{ color: "#d2a8ff" }}>unwrap</span>(){"\n"}
                                {"                        "} {"{"}{"\n"}
                                {"                            "}<span style={{ color: "#ff7b72" }}>let</span> val = crates{"\n"}
                                {"                                "}.<span style={{ color: "#d2a8ff" }}>get_mut</span>(&line.<span style={{ color: "#d2a8ff" }}>split</span>(<span style={{ color: "#a5d6ff" }}>" "</span>).<span style={{ color: "#d2a8ff" }}>map</span>(|e| e.<span style={{ color: "#d2a8ff" }}>to_string</span>()).<code style={{ color: "#d2a8ff" }}>collect</code>::&lt;Vec&lt;String&gt;&gt;()[<span style={{ color: "#79c0ff" }}>3</span>]){"\n"}
                                {"                                "}.<span style={{ color: "#d2a8ff" }}>unwrap</span>().<span style={{ color: "#d2a8ff" }}>pop_front</span>().<span style={{ color: "#d2a8ff" }}>unwrap</span>();{"\n"}
                                {"                            "}crates{"\n"}
                                {"                                "}.<span style={{ color: "#d2a8ff" }}>get_mut</span>(&line.<span style={{ color: "#d2a8ff" }}>split</span>(<span style={{ color: "#a5d6ff" }}>" "</span>).<span style={{ color: "#d2a8ff" }}>map</span>(|e| e.<span style={{ color: "#d2a8ff" }}>to_string</span>()).<code style={{ color: "#d2a8ff" }}>collect</code>::&lt;Vec&lt;String&gt;&gt;()[<span style={{ color: "#79c0ff" }}>5</span>]){"\n"}
                                {"                                "}.<span style={{ color: "#d2a8ff" }}>unwrap</span>().<span style={{ color: "#d2a8ff" }}>insert</span>(i, val);{"\n"}
                                {"                        "}{"}"}{"\n"}
                                {"                    "}{"}"}{"\n"}
                                {"                    "}_ =&gt; (),{"\n"}
                                {"                "}{"}"}{"\n"}
                                {"            "}{"}"}{"\n"}
                                {"        "}{"}"});{"\n\n"}
                                {"    "}<span style={{ color: "#8b949e" }}>// Part 2</span>{"\n"}
                                {"    "}<span style={{ color: "#8b949e" }}>// For Part 1, change Line 39 to push_front without the index i</span>{"\n"}
                                {"    "}crates{"\n"}
                                {"        "}.<span style={{ color: "#d2a8ff" }}>iter_mut</span>(){"\n"}
                                {"        "}.<span style={{ color: "#d2a8ff" }}>for_each</span>(|(_, v)| <span style={{ color: "#d2a8ff" }}>print!</span>(<span style={{ color: "#a5d6ff" }}>"{"{"}{"}"}"</span>, v.<span style={{ color: "#d2a8ff" }}>pop_front</span>().<span style={{ color: "#d2a8ff" }}>unwrap</span>()));{"\n"}
                                {"}"}
                            </pre>
                        </div>
                    </div>

                    <div style={{
                        position: "absolute",
                        zIndex: -1,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "120%",
                        height: "120%",
                        background: "radial-gradient(circle, rgba(0, 245, 255, 0.1) 0%, transparent 70%)"
                    }} />
                </div>
            </div>
        </section>
    );
}
