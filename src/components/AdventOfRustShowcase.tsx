"use client";

import React from "react";
import { motion } from "framer-motion";
import ExternalLink from "./ExternalLink";

const S = (c: string, t: React.ReactNode) => <span style={{ color: c }}>{t}</span>;
const p = { color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.2rem" };

export default function AdventOfRustShowcase() {
    return (
        <section className="animate-fade-in" style={{ padding: "4rem 0" }}>
            <div className="section-heading" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span>Beyond Academics</span>
                <div style={{ height: "1px", flex: 1, background: "linear-gradient(90deg, var(--cyber-cyan-glow), transparent)" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2.5rem", alignItems: "stretch" }}>
                <div className="cyber-card" style={{ padding: "2rem", position: "relative" }}>
                    <h3 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Building & Breaking Software</h3>
                    <p style={p}>Past competitions include <ExternalLink href="https://nationalcyberleague.org/">NCL</ExternalLink>, <ExternalLink href="https://icpc.global/">ICPC</ExternalLink>, <ExternalLink href="https://cp-tc.org/">CPTC</ExternalLink>, <ExternalLink href="https://www.nationalccdc.org/">CCDC</ExternalLink>, and OWASP Secure Coding. Building on those experiences, now training teams in NCL and ICPC.</p>
                    <p style={p}>Working with <ExternalLink href="https://www.wicys.org/">Women in Cybersecurity</ExternalLink> student chapters globally to help recruit, retain, and advance women in cybersecurity as part of a workforce solution.</p>
                    <p style={p}>Passionate about building startups. As co-founder and CTO of <ExternalLink href="https://citodex.com">Citodex</ExternalLink>, working extensively with diverse tech stacks, AI, security, and cloud infrastructure.</p>
                    <p style={p}>Consulting organizations on secure infrastructure design, zero-trust integration, OSINT & incident response engagements, and the resolution of complex system issues.</p>
                    <p style={p}>Contributing to open-source software and occasionally engaging in bug bounty hunting. Solving puzzles like <ExternalLink href="https://adventofcode.com/">Advent of Code</ExternalLink> in <b>Rust</b> was a blast, especially playing with the power of functional chains.</p>
                    <motion.div animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", top: "1.8rem", right: "1rem", fontSize: "1.5rem", opacity: 0.3 }}>🦀</motion.div>
                </div>

                <div className="h-96 md:h-0 md:min-h-full" style={{ position: "relative" }}>
                    <div className="cyber-card" style={{ height: "100%", display: "flex", flexDirection: "column", padding: "0", overflow: "hidden", background: "#0d1117", border: "1px solid var(--cyber-border)", boxShadow: "none" }}>
                        <div style={{ background: "#161b22", padding: "0.75rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--cyber-border)" }}>
                            <div style={{ display: "flex", gap: "6px" }}>
                                {["#ff5f56", "#ffbd2e", "#27c93f"].map((c, i) => <div key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />)}
                            </div>
                            <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>AdventOfCode2022/src/day05/main.rs</div>
                        </div>
                        <div style={{ padding: "1.5rem", flex: 1, minHeight: 0, overflowY: "auto", fontFamily: "var(--font-mono), monospace", fontSize: "0.85rem", lineHeight: "1.5", color: "#e6edf3" }}>
                            <pre style={{ margin: 0 }}>
                                {S("#79c0ff", "use")} std::collections::{"{"}BTreeMap, VecDeque{"}"};{"\n"}
                                {S("#79c0ff", "use")} std::fs::read_to_string;{"\n\n"}
                                {S("#ff7b72", "fn")} {S("#d2a8ff", "main")}() {"{"}{"\n"}
                                {"    "}{S("#ff7b72", "let mut")} crates = BTreeMap::{S("#d2a8ff", "new")}();{"\n"}
                                {"    "}read_to_string({S("#a5d6ff", '"./data.txt"')}){"\n"}
                                {"        "}.{S("#d2a8ff", "expect")}({S("#a5d6ff", '"File does not exist!"')}){"\n"}
                                {"        "}.{S("#d2a8ff", "lines")}(){"\n"}
                                {"        "}.{S("#d2a8ff", "for_each")}(|line| &lbrace;{"\n"}
                                {"            "}{S("#ff7b72", "if")} !line.{S("#d2a8ff", "trim")}().{S("#d2a8ff", "is_empty")}() {"{"}{"\n"}
                                {"                "}{S("#ff7b72", "match")} &line.{S("#d2a8ff", "trim")}()[{S("#a5d6ff", "0..1")}] {"{"}{"\n"}
                                {"                    "}{S("#a5d6ff", '"["')} =&gt; line{"\n"}
                                {"                        "}.{S("#d2a8ff", "chars")}(){"\n"}
                                {"                        "}.{S("#d2a8ff", "collect")}::&lt;Vec&lt;char&gt;&gt;(){"\n"}
                                {"                        "}.{S("#d2a8ff", "chunks")}({S("#79c0ff", "4")}){"\n"}
                                {"                        "}.{S("#d2a8ff", "map")}(|c| c.{S("#d2a8ff", "iter")}().{S("#d2a8ff", "collect")}::&lt;String&gt;()){"\n"}
                                {"                        "}.{S("#d2a8ff", "enumerate")}(){"\n"}
                                {"                        "}.{S("#d2a8ff", "filter_map")}(|(i, s)| {S("#ff7b72", "match")} s.{S("#d2a8ff", "chars")}().{S("#d2a8ff", "nth")}({S("#79c0ff", "1")}).{S("#d2a8ff", "unwrap")}() {"{"}{"\n"}
                                {"                            "}{S("#79c0ff", "' '")} =&gt; {S("#79c0ff", "None")},{"\n"}
                                {"                            "}_ =&gt; {S("#79c0ff", "Some")}(((i + {S("#79c0ff", "1")}).{S("#d2a8ff", "to_string")}(), s[{S("#a5d6ff", "1..2")}].{S("#d2a8ff", "to_owned")}())),{"\n"}
                                {"                        "}{"}"}){"\n"}
                                {"                        "}.{S("#d2a8ff", "for_each")}(|(i, s)| crates.{S("#d2a8ff", "entry")}(i).{S("#d2a8ff", "or_insert")}(VecDeque::{S("#d2a8ff", "new")}()).{S("#d2a8ff", "push_back")}(s)),{"\n"}
                                {"                    "}{S("#a5d6ff", '"m"')} =&gt; &lbrace;{"\n"}
                                {"                        "}{S("#ff7b72", "for")} i {S("#ff7b72", "in")} {S("#79c0ff", "0")}..line{"\n"}
                                {"                            "}.{S("#d2a8ff", "split")}({S("#a5d6ff", '" "')}){"\n"}
                                {"                            "}.{S("#d2a8ff", "map")}(|e| e.{S("#d2a8ff", "to_string")}()){"\n"}
                                {"                            "}.{S("#d2a8ff", "collect")}::&lt;Vec&lt;String&gt;&gt;()[{S("#79c0ff", "1")}]{"\n"}
                                {"                            "}.{S("#d2a8ff", "parse")}().{S("#d2a8ff", "unwrap")}(){"\n"}
                                {"                        "} {"{"}{"\n"}
                                {"                            "}{S("#ff7b72", "let")} val = crates{"\n"}
                                {"                                "}.{S("#d2a8ff", "get_mut")}(&line.{S("#d2a8ff", "split")}({S("#a5d6ff", '" "')}).{S("#d2a8ff", "map")}(|e| e.{S("#d2a8ff", "to_string")}()).<code style={{ color: "#d2a8ff" }}>collect</code>::&lt;Vec&lt;String&gt;&gt;()[{S("#79c0ff", "3")}]){"\n"}
                                {"                                "}.{S("#d2a8ff", "unwrap")}().{S("#d2a8ff", "pop_front")}().{S("#d2a8ff", "unwrap")}();{"\n"}
                                {"                            "}crates{"\n"}
                                {"                                "}.{S("#d2a8ff", "get_mut")}(&line.{S("#d2a8ff", "split")}({S("#a5d6ff", '" "')}).{S("#d2a8ff", "map")}(|e| e.{S("#d2a8ff", "to_string")}()).<code style={{ color: "#d2a8ff" }}>collect</code>::&lt;Vec&lt;String&gt;&gt;()[{S("#79c0ff", "5")}]){"\n"}
                                {"                                "}.{S("#d2a8ff", "unwrap")}().{S("#d2a8ff", "insert")}(i, val);{"\n"}
                                {"                        "}{"}"}{"\n"}
                                {"                    "}{"}"}{"\n"}
                                {"                    "}_ =&gt; (),{"\n"}
                                {"                "}{"}"}{"\n"}
                                {"            "}{"}"}{"\n"}
                                {"        "}{"}"});{"\n\n"}
                                {"    "}{S("#8b949e", "// Part 2")}{"\n"}
                                {"    "}{S("#8b949e", "// For Part 1, change Line 39 to push_front without the index i")}{"\n"}
                                {"    "}crates{"\n"}
                                {"        "}.{S("#d2a8ff", "iter_mut")}(){"\n"}
                                {"        "}.{S("#d2a8ff", "for_each")}(|(_, v)| {S("#d2a8ff", "print!")}({S("#a5d6ff", '"&#123;&#125;"')}, v.{S("#d2a8ff", "pop_front")}().{S("#d2a8ff", "unwrap")}()));{"\n"}
                                {"}"}
                            </pre>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
