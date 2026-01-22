import PageHeader from "@/components/PageHeader";
import ExternalLink from "@/components/ExternalLink";
import { researchAreas, interests, projects } from "@/data/research";
import ResearchAreaCard from "@/components/research/ResearchAreaCard";
import ProjectCard from "@/components/research/ProjectCard";

export default function Research() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Research Interests" />

      {/* Research Areas Grid */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {researchAreas.map((area) => (
            <ResearchAreaCard key={area.title} area={area} />
          ))}
        </div>
      </section>

      <div className="cyber-divider" />

      {/* Research Interests */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.75rem",
          }}
        >
          {interests.map((interest) => (
            <span
              key={interest}
              className="cyber-badge"
              style={{ fontSize: "0.85rem", padding: "0.5rem 1rem" }}
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      <div className="cyber-divider" />

      {/* Projects */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <h2 className="section-heading">Recent Projects</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <div className="cyber-divider" />

      {/* CTF Unplugged */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <h2 className="section-heading">CTF Unplugged</h2>
        <div className="cyber-card">
          <p style={{ margin: 0, color: "var(--text-secondary)", lineHeight: "1.7" }}>
            Inspired by the Computer Science Unplugged project, a Capture the Flag (CTF) Unplugged
            was born as an offline cybersecurity competition for high schools.{" "}
            <ExternalLink href="/ctf-unplugged/CTF_Unplugged_May_2019.docx">
              CTF Unplugged
            </ExternalLink>{" "}
            introduces participants to cybersecurity competitions by engaging in a fun team-based
            competition without a need for technical preparation. If you are interested in the
            project or would like to receive the answers to the CTF Unplugged, please contact me.
          </p>
        </div>
      </section>

      <div className="cyber-divider" />

      {/* Collaboration */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <h2 className="section-heading">Collaboration</h2>

        <div
          className="cyber-card"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "var(--text-secondary)",
              flex: 1,
              minWidth: "200px",
            }}
          >
            I am open for collaboration on various cybersecurity, machine learning, and education
            projects.
          </p>
          <a href="/contact" className="cyber-btn">
            <span>Get in Touch</span>
          </a>
        </div>
      </section>
    </div>
  );
}
