import React from 'react';
import { getSiteStats } from '@/data/siteConfig';

interface StatsSectionProps {
    totalPapers: number;
    citationCount: string;
    yearsActive: number;
}

const StatsSection: React.FC<StatsSectionProps> = ({ totalPapers, citationCount, yearsActive }) => {
    const stats = getSiteStats(totalPapers, citationCount, yearsActive);

    return (
        <section className="section">
            <div className="cyber-stats-grid">
                {stats.map((stat) => {
                    const StatContent = (
                        <>
                            <div className="cyber-stat-value">
                                {stat.value}
                            </div>
                            <div className="cyber-stat-label">{stat.label}</div>
                        </>
                    );

                    return stat.href ? (
                        <a
                            key={stat.label}
                            href={stat.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cyber-card"
                            style={{ textAlign: "center", padding: "1.5rem 1rem", display: "block", textDecoration: "none" }}
                        >
                            {StatContent}
                        </a>
                    ) : (
                        <div
                            key={stat.label}
                            className="cyber-card"
                            style={{ textAlign: "center", padding: "1.5rem 1rem" }}
                        >
                            {StatContent}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default StatsSection;
