import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HexRoulette from '@/components/HexRoulette';
import { securityRecs } from '@/data/siteConfig';

const HeroSection = () => {
    return (
        <section className="section cyber-hero-section">
            <div className="cyber-hero-grid">
                {/* Left Column: Content */}
                <div className="animate-slide-up">
                    <h2 className="cyber-hero-subtitle" style={{ marginBottom: "1.5rem" }}>
                        &gt;&gt; Discover Innovation → Deliver Success
                    </h2>



                    <h1 className="hero-title" style={{ marginBottom: "2rem" }}>
                        <span style={{ color: "var(--cyber-green)", opacity: 0.8 }}>$ </span>
                        whoami
                        <span className="terminal-cursor" />
                    </h1>

                    <div className="roulette-container">
                        <HexRoulette showFact={true} displayMode="inline" />
                    </div>

                    <p className="cyber-bio-text">
                        Associate Professor and Program Director at{" "}
                        <a href="https://www.arcadia.edu/profile/vitaly-ford" target="_blank" rel="noopener noreferrer">
                            Arcadia University
                        </a>, <a href="https://wicys.org" target="_blank" rel="noopener noreferrer">WiCyS</a> Global Chapter Coordinator, and Co-Founder/CTO at <a href="https://citodex.com" target="_blank" rel="noopener noreferrer">Citodex Technology Ltd.</a>
                        <br />
                        <span className="cyber-bio-note">
                            Specializing in Cybersecurity/CS Research and Education, Machine Learning, and Infrastructure.
                        </span>
                    </p>

                    <div className="cyber-btn-group">
                        <Link href="/research" className="cyber-btn cyber-btn-primary cyber-btn-lg">
                            <span>View Research</span>
                        </Link>
                        <Link href="/contact" className="cyber-btn cyber-btn-lg">
                            <span>Get in Touch</span>
                        </Link>
                    </div>
                </div>

                {/* Right Column: Profile Image */}
                <div className="animate-fade-in" style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
                    <div className="security-badge-container" style={{ marginBottom: "2rem" }}>
                        <div className="security-badge-inner">
                            <div className="security-badge-content">
                                <span className="security-badge-text">
                                    Security: Zero Trust, Zero Hype
                                </span>
                                <span className="security-badge-icon" style={{ marginLeft: "0.5rem" }}>ⓘ</span>
                            </div>
                        </div>
                        <div className="security-tooltip">
                            <strong className="security-tooltip-header">
                                Free security tools I recommend:
                            </strong>
                            {securityRecs.map(rec => (
                                <div key={rec.label} className="security-tooltip-row">
                                    <span className="security-tooltip-label">{rec.label}:</span>
                                    <a href={rec.url} target="_blank" rel="noopener noreferrer" className="security-tooltip-link">{rec.name}</a>
                                </div>
                            ))}
                            <em className="security-tooltip-note">
                                Not sponsored, not affiliated with. Personal preferences only.
                            </em>
                        </div>
                    </div>
                    <div style={{ position: "relative" }}>
                        <div
                            style={{
                                padding: "6px",
                                background: "var(--cyber-surface)",
                                borderRadius: "16px",
                            }}
                        >
                            <Image
                                src="/images/profile.jpg"
                                alt="Profile"
                                width={320}
                                height={320}
                                style={{
                                    objectFit: "cover",
                                    width: "320px",
                                    height: "320px",
                                    borderRadius: "12px",
                                }}
                            />
                        </div>

                        {/* Decorative Tech Overlay Tags */}
                        <div className="profile-overlay-card">
                            <span className="profile-current-focus-label">Current Focus</span>
                            <span className="profile-current-focus-value">Security, AI, and Uncomfortable Edge Cases</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
