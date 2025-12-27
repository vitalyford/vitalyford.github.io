"use client";

import Image from "next/image";
import Link from "next/link";
import { GitHubCalendar } from "react-github-calendar";

interface Project {
  title: string;
  description: string;
  href: string;
  badge?: string;
}

interface Achievement {
  title: string;
  description: string;
  href?: string;
  year?: string;
}

const featuredProjects: Project[] = [
  {
    title: "TeachCyber",
    description: "A library of resources to teach and learn cybersecurity",
    href: "https://teachcyber.vford.com",
    badge: "Education",
  },
  {
    title: "GenCyberCoin",
    description: "Gamified web platform teaching blockchain, digital currency, and cybersecurity principles",
    href: "https://github.com/vitalyford/gencybercoin",
    badge: "Open Source",
  },
  {
    title: "CTF Unplugged",
    description: "An unplugged version of a Capture The Flag competition for K-12",
    href: "/ctf-unplugged/CTF_Unplugged_May_2019.docx",
    badge: "K-12",
  },
];

const achievements: Achievement[] = [
  {
    title: "NSF SaTC: EDU Grant Co-PI",
    description: "Cybersecurity Faculty Development for High School Teachers",
    href: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2225470&HistoricalAwards=false",
    year: "2023-2026",
  },
  {
    title: "NSF Cyberinfrastructure Grant Co-PI",
    description: "New Campus Science & Education Network at Arcadia",
    href: "https://www.arcadia.edu/news/2018/09/margolis-dr-ford-awarded-nsf-grant-new-campus-science-education-network-0",
    year: "2018-2020",
  },
  {
    title: "GenCyberCoin Subawards PI",
    description: "Multiple years of NSA/NSF GenCyber program sponsorship",
    year: "2018-2020",
  },
  {
    title: "First CS Ph.D. in Cybersecurity",
    description: "Tennessee Tech's first computer science Ph.D. graduate in cybersecurity",
    href: "https://www.tntech.edu/news/releases/tennessee-tech%E2%80%99s-impact-on-cybersecurity-continues-to-expand-with-first-ph.d.-graduate",
  },
];

const stats = [
  { label: "Publications", value: "20+" },
  { label: "Citations", value: "718", href: "https://scholar.google.com/citations?user=49RgkBcAAAAJ&hl=en" },
  { label: "Years Teaching", value: "10+" },
  { label: "NSF Grants", value: "3" },
  { label: "CTF Teams Coached", value: "50+" },
];

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{ padding: "2rem 0 4rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Hero Content */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              <div className="profile-image-wrapper">
                <Image
                  src="/images/profile.jpg"
                  alt="Vitaly Ford"
                  width={160}
                  height={160}
                  className="profile-image"
                  style={{ objectFit: "cover", width: "160px", height: "160px" }}
                  priority
                />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    color: "var(--cyber-green)",
                    fontSize: "0.9rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  $ whoami
                </p>
                <h1
                  className="hero-title"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    marginBottom: "0",
                  }}
                >
                  <span className="text-gradient">Vitaly Ford</span>
                </h1>
              </div>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                color: "var(--cyber-cyan)",
                marginBottom: "1.5rem",
                fontWeight: 500,
              }}
            >
              &gt;&gt; Discover Innovation → Deliver Success
              <span className="terminal-cursor" />
            </h2>

            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                maxWidth: "700px",
                marginBottom: "1.5rem",
              }}
            >
              Associate Professor at{" "}
              <a href="https://www.arcadia.edu/profile/vitaly-ford" target="_blank" rel="noopener noreferrer">
                Arcadia University
              </a>
              , specializing in <strong style={{ color: "var(--text-primary)" }}>Smart Grid Security</strong>,{" "}
              <strong style={{ color: "var(--text-primary)" }}>Machine Learning</strong>, and{" "}
              <strong style={{ color: "var(--text-primary)" }}>Cybersecurity Education</strong>.
            </p>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Director of Cybersecurity R&D at the{" "}
              <a href="https://cyberstudents.org/" target="_blank" rel="noopener noreferrer">
                National Cybersecurity Student Association
              </a>{" "}
              and Global Student Chapter Coordinator for{" "}
              <a href="https://www.wicys.org/" target="_blank" rel="noopener noreferrer">
                Women in Cybersecurity
              </a>
              .
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/research" className="cyber-btn cyber-btn-primary">
                <span>View Research</span>
              </Link>
              <Link href="/contact" className="cyber-btn">
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: "2rem 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1rem",
          }}
        >
          {stats.map((stat) => {
            const StatContent = (
              <>
                <div
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "var(--cyber-cyan)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{stat.label}</div>
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

      <div className="cyber-divider" />

      {/* GitHub Activity */}
      <section style={{ padding: "2rem 0" }}>
        <h2 className="section-heading">GitHub Activity</h2>
        <div className="cyber-card" style={{ padding: "1.5rem", overflow: "hidden" }}>
          <GitHubCalendar
            username="vitalyford"
            colorScheme="dark"
            fontSize={12}
            blockSize={12}
            blockMargin={4}
            theme={{
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#00f5ff"],
            }}
          />
        </div>
      </section>

      <div className="cyber-divider" />

      {/* Featured Projects */}
      <section style={{ padding: "2rem 0" }}>
        <h2 className="section-heading">Featured Projects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {featuredProjects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card"
              style={{ display: "block", textDecoration: "none" }}
            >
              {project.badge && (
                <span className="cyber-badge" style={{ marginBottom: "1rem" }}>
                  {project.badge}
                </span>
              )}
              <h3
                style={{
                  color: "var(--text-primary)",
                  fontSize: "1.1rem",
                  marginBottom: "0.5rem",
                  marginTop: project.badge ? "0.75rem" : 0,
                }}
              >
                {project.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", margin: 0 }}>
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <div className="cyber-divider" />

      {/* Achievements */}
      <section style={{ padding: "2rem 0" }}>
        <h2 className="section-heading">Achievements &amp; Grants</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {achievements.map((item) => (
            <div
              key={item.title}
              className="cyber-card"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1, minWidth: "200px" }}>
                <h3 style={{ color: "var(--text-primary)", fontSize: "1rem", marginBottom: "0.25rem" }}>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", margin: 0 }}>
                  {item.description}
                </p>
              </div>
              {item.year && (
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.year}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="cyber-divider" />

      {/* Personal */}
      <section style={{ padding: "2rem 0" }}>
        <h2 className="section-heading">Beyond the Code</h2>

        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
          In my spare time, I enjoy playing table tennis and chess as well as participating in{" "}
          <strong style={{ color: "var(--text-primary)" }}>Capture the Flag competitions</strong> and
          coaching student cybersecurity and programming teams.
        </p>
      </section>

      <div className="cyber-divider" />

      {/* Quotes */}
      <section style={{ padding: "2rem 0" }}>
        <div style={{ display: "grid", gap: "1.5rem" }}>
          <blockquote>
            <p style={{ fontSize: "1.1rem", margin: 0, marginBottom: "0.75rem" }}>
              &ldquo;Teach me and I will forget. Show me and I may remember. Involve me and I&apos;ll understand.&rdquo;
            </p>
            <cite>— Xun Kuang</cite>
          </blockquote>

          <blockquote>
            <p style={{ fontSize: "1.1rem", margin: 0, marginBottom: "0.75rem" }}>
              &ldquo;Reach for the stars, and you won&apos;t even notice when you pass the sky.&rdquo;
            </p>
            <cite>— Vitaly Ford</cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
