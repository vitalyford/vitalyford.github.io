import ExternalLink from "@/components/ExternalLink";
import { Project } from "@/data/research";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <div className="cyber-card">
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                <span
                    style={{
                        fontFamily: "var(--font-mono), monospace",
                        color: "var(--cyber-cyan)",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        lineHeight: 1,
                    }}
                >
                    {index < 9 ? `0${index + 1}` : index + 1}
                </span>
                <div style={{ flex: 1 }}>
                    <h3 style={{ margin: 0, marginBottom: "0.5rem" }}>
                        {project.href ? (
                            <ExternalLink href={project.href}>{project.title}</ExternalLink>
                        ) : (
                            project.title
                        )}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", margin: 0 }}>{project.description}</p>
                    {project.presenters && (
                        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.5rem" }}>
                            <strong>Students:</strong> {project.presenters}
                        </p>
                    )}
                </div>
            </div>

            {project.highlights && (
                <ul
                    style={{
                        marginLeft: "2.5rem",
                        marginBottom: 0,
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "0.25rem 1rem",
                    }}
                >
                    {project.highlights.map((highlight) => (
                        <li key={highlight} style={{ fontSize: "0.9rem" }}>
                            {highlight}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
