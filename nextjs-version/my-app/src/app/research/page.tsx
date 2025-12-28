import Image from "next/image";
import PageHeader from "@/components/PageHeader";

interface ResearchArea {
  title: string;
  image: string;
  description?: string;
}

interface Project {
  title: string;
  description: string;
  href?: string;
  highlights?: string[];
}

const researchAreas: ResearchArea[] = [
  {
    title: "Cybersecurity",
    image: "/images/cybersecurity.jpg",
    description: "Network security, penetration testing, and secure systems design",
  },
  {
    title: "Machine Learning",
    image: "/images/machineLearning.jpg",
    description: "AI-powered security solutions and predictive analytics",
  },
  {
    title: "CS Education",
    image: "/images/education.jpg",
    description: "Innovative approaches to teaching computer science",
  },
  {
    title: "Smart Grid Security",
    image: "/images/smartGrid.jpg",
    description: "Privacy and security for advanced metering infrastructure",
  },
];

const interests = [
  "Smart Grid Security",
  "Data Privacy for Advanced Metering Infrastructure",
  "Energy Fraud Detection",
  "Machine Learning and Artificial Intelligence",
  "Cybersecurity Education",
];

const projects: Project[] = [
  {
    title: "Netflow",
    description: "Interactive network flow visualization for mastering DNS, web communication, and cybersecurity concepts.",
    href: "https://netflow.vford.com/",
    highlights: [
      "Interactive network visualization",
      "Real-time packet flow simulation",
      "Educational modules for DNS and Web traffic",
      "Multi-panel management for complex scenarios",
    ],
  },
  {
    title: "Pragmatic Cyber Academy",
    description: "Virtual labs and interactive modules designed to transform cybersecurity learning into practical career skills.",
    href: "https://cysia.vford.com/",
    highlights: [
      "Hands-on virtual labs",
      "Expert-led cybersecurity content",
      "Progress tracking and career readiness",
      "Comprehensive learning modules",
    ],
  },
  {
    title: "Engineering Pathways",
    description: "A comprehensive navigator for dual-degree engineering programs with top-tier institutions.",
    href: "https://areng.vford.com",
    highlights: [
      "Collaborations with Columbia, Drexel, and Dartmouth",
      "Interactive degree requirement tracking",
      "GPA and credit transfer guides",
      "Streamlined application processes for STEM students",
    ],
  },
  {
    title: "GenCyberCoin",
    description:
      "NSA/NSF GenCyber program sponsored platform to encourage student participation in camp activities.",
    href: "https://github.com/vitalyford/gencybercoin",
    highlights: [
      "Cryptocurrency concepts and digital currency trading markets",
      "Cybersecurity principles",
      "Bug bounty program and software bugs",
      "Password management",
      "Social and ethical norms and values",
      "Blockchain technology",
    ],
  },
  {
    title: "CTF Unplugged",
    description:
      "An offline cybersecurity competition for K-8 and K-12 schools, inspired by CS Unplugged.",
    href: "/ctf-unplugged/CTF_Unplugged_May_2019.docx",
    highlights: [
      "Introduces participants to cybersecurity competitions",
      "Shows different cybersecurity careers",
      "Engages in fun team-based competition",
      "No technical preparation needed",
    ],
  },
  {
    title: "GenCyber Camp Curriculum",
    description:
      "Developed cybersecurity modules and curriculum for Tennessee Tech's GenCyber Camp.",
    href: "https://www.tntech.edu/ceroc/outreach/gen-cyber.php",
    highlights: [
      "Month-long cybersecurity summer camp for K-12 students",
      "Week-long GenCyber camp programs",
      "Hands-on cybersecurity training",
    ],
  },
];

export default function Research() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Research Interests" subtitle="Exploring the intersection of security, AI, and education" />

      {/* Research Areas Grid */}
      <section style={{ padding: "2rem 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {researchAreas.map((area) => (
            <div key={area.title} className="research-card">
              <div className="research-card-image" style={{ position: "relative", height: "140px" }}>
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="research-card-title">
                <h3 style={{ fontSize: "1rem", margin: 0, marginBottom: "0.25rem" }}>{area.title}</h3>
                {area.description && (
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>
                    {area.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="cyber-divider" />

      {/* Research Interests */}
      <section style={{ padding: "2rem 0" }}>
        <h2 className="section-heading">Research Focus</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          {interests.map((interest) => (
            <span key={interest} className="cyber-badge" style={{ fontSize: "0.85rem", padding: "0.5rem 1rem" }}>
              {interest}
            </span>
          ))}
        </div>
      </section>

      <div className="cyber-divider" />

      {/* Projects */}
      <section style={{ padding: "2rem 0" }}>
        <h2 className="section-heading">Recent Projects</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {projects.map((project, index) => (
            <div key={project.title} className="cyber-card">
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
                  0{index + 1}
                </span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0, marginBottom: "0.5rem" }}>
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", margin: 0 }}>{project.description}</p>
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
          ))}
        </div>
      </section>

      <div className="cyber-divider" />

      {/* Collaboration */}
      <section style={{ padding: "2rem 0" }}>
        <h2 className="section-heading">Collaboration</h2>

        <div className="cyber-card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ margin: 0, color: "var(--text-secondary)", flex: 1, minWidth: "200px" }}>
            I am open for collaboration on various cybersecurity, machine learning, and education projects.
          </p>
          <a href="/contact" className="cyber-btn">
            <span>Get in Touch</span>
          </a>
        </div>
      </section>
    </div>
  );
}
