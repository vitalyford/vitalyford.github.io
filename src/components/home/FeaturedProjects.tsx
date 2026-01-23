import React from 'react';
import { featuredProjects } from '@/data/projects';

const FeaturedProjects = () => {
    return (
        <section className="section">
            <h2 className="section-heading">Featured Projects</h2>

            <div className="featured-projects-grid">
                {featuredProjects.map((project) => (
                    <a
                        key={project.title}
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-card project-card-link"
                        style={{ display: "block", textDecoration: "none" }}
                    >
                        {project.badge && (
                            <span className="cyber-badge featured-project-badge">
                                {project.badge}
                            </span>
                        )}
                        <h3
                            className="project-card-title"
                            style={{
                                marginBottom: "0.5rem",
                                marginTop: project.badge ? "0.75rem" : 0,
                            }}
                        >
                            {project.title}
                        </h3>
                        <p className="featured-project-desc">
                            {project.description}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProjects;
