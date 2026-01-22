import React from 'react';
import { achievements } from '@/data/achievements';

const AchievementsSection = () => {
    return (
        <section className="section">
            <h2 className="section-heading">Featured Achievements &amp; Grants</h2>

            <div className="achievements-stack">
                {achievements.map((item) => {
                    const content = (
                        <>
                            <div className="achievement-content">
                                <h3 className="project-card-title achievement-title">
                                    {item.title}
                                </h3>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", margin: 0 }}>
                                    {item.description}
                                </p>
                            </div>
                            {item.year && (
                                <span className="achievement-year">
                                    {item.year}
                                </span>
                            )}
                        </>
                    );

                    return item.href ? (
                        <a
                            key={item.title}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cyber-card project-card-link achievement-card"
                            style={{ textDecoration: "none" }}
                        >
                            {content}
                        </a>
                    ) : (
                        <div
                            key={item.title}
                            className="cyber-card achievement-card"
                        >
                            {content}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default AchievementsSection;
