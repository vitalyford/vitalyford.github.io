'use client';

import Link from "next/link";
import GitHubActivityFun from "@/components/GitHubActivityFun";
import HexRoulette from "@/components/HexRoulette";
import AdventOfRustShowcase from "@/components/AdventOfRustShowcase";
import QuotesStream from "@/components/QuotesStream";
import { getPublicationStats } from "@/utils/academicUtils";

export const dynamic = 'force-dynamic';

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
    title: "Netflow",
    description: "Interactive network flow visualization for mastering DNS, web communication, and cybersecurity concepts",
    href: "https://netflow.vford.com/",
    badge: "Interactive",
  },
  {
    title: "CTF Unplugged",
    description: "An unplugged version of a Capture The Flag competition for high schools",
    href: "/ctf-unplugged/CTF_Unplugged_May_2019.docx",
    badge: "Education",
  },
  {
    title: "Pragmatic Cyber Academy",
    description: "Quick knowledge modules and quizzes, designed to get folks interested in cybersecurity (part of NSF grant)",
    href: "https://cysia.vford.com/",
    badge: "Education",
  },
  {
    title: "Engineering Pathways",
    description: "A comprehensive navigator for Arcadia University dual-degree engineering programs with the University of Pittsburgh, Drexel University, Washington University in St. Louis, and others",
    href: "https://areng.vford.com",
    badge: "Academic",
  },
  {
    title: "TeachCyber",
    description: "A library of resources to teach and learn cybersecurity",
    href: "https://teachcyber.vford.com",
    badge: "Education",
  },
  {
    title: "GenCyberCoin",
    description: "Gamified web platform teaching blockchain, digital currency, and cybersecurity principles (part of NSA/NSF grant)",
    href: "https://gencybercoin.vford.com",
    badge: "Open Source",
  },
  {
    title: "Zero-trust Infrastructure",
    description: "Zero-trust network with 30+ applications across 10 servers secured via Cloudflare Access and with its own Wazuh XDR to monitor and respond to security events",
    href: "https://vford.cloudflareaccess.com",
    badge: "Security",
  },
];

const achievements: Achievement[] = [
  {
    title: "CCSC-Eastern Co-Chair",
    description: "Conference Chair for the 41st Annual Eastern Regional Conference",
    href: "https://ccsc-eastern.org",
    year: "2025",
  },
  {
    title: "Ally Award",
    description: "Women in Cybersecurity (WiCyS) Ally Award Winner",
    year: "2024",
  },
  {
    title: "NSF SaTC: EDU Grant Co-PI",
    description: "Cybersecurity Faculty Development for High School Teachers",
    href: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2225470",
    year: "2023-2026",
  },
  {
    title: "WiCyS Global Chapter Coordinator",
    description: "Leading and coordinating Women in Cybersecurity student chapters globally",
    href: "https://www.wicys.org/initiatives/student-chapters/",
    year: "2018-Present",
  },
  {
    title: "Professor of the Year",
    description: "The purpose of the award is to recognize people who, through their outstanding teaching skills, affect the lives and careers of students and contribute to the overall welfare of our society.",
    href: "https://www.arcadia.edu/about-arcadia/leadership/office-provost/faculty-awards/",
    year: "2022",
  },
  {
    title: "NSF Cyberinfrastructure Grant Co-PI",
    description: "NSF CC* Cyberinfrastructure Grant to Advance Arcadia's Research Network, Innovation, and Collaboration",
    href: "https://www.arcadia.edu/academics/college-arts-sciences/computer-science-mathematics/science-dmz/",
    year: "2018-2020",
  },
];

export default function Home() {
  const { totalPapers, yearsActive } = getPublicationStats();
  const citationCount = process.env.NEXT_PUBLIC_SCHOLAR_CITATIONS || "721";

  const stats = [
    { label: "Publications", value: totalPapers.toString() },
    { label: "Citations", value: citationCount, href: "https://scholar.google.com/citations?user=49RgkBcAAAAJ&hl=en" },
    { label: "Years in Education and Tech", value: `${yearsActive}` },
    { label: "NSF, NSA, and Internal Funding Awards", value: "9" },
    { label: "Teams Coached", value: "50+" },
  ];

  const securityRecs = [
    { label: "VPN", name: "ProtonVPN", url: "https://protonvpn.com/" },
    { label: "Antivirus", name: "BitDefender", url: "https://www.bitdefender.com/en-us/consumer/free-antivirus" },
    { label: "Zero-trust", name: "Cloudflare Access", url: "https://www.cloudflare.com/zero-trust/products/access/" },
    { label: "DNS", name: "NextDNS", url: "https://nextdns.io/" },
    { label: "Passwords", name: "Bitwarden", url: "https://bitwarden.com/" },
    { label: "PwnCheck", name: "Have I Been Pwned", url: "https://haveibeenpwned.com/" },
    { label: "Browser", name: "Brave Browser", url: "https://brave.com/" },
    { label: "Privacy", name: "Operation Privacy", url: "https://www.operationprivacy.com/" },
    { label: "XDR", name: "Wazuh", url: "https://wazuh.com/" },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{ padding: "0 0 6rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Left Column: Content */}
          <div className="animate-slide-up">
            <div
              className="security-badge-wrapper"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.4rem 0.8rem",
                background: "rgba(0, 245, 255, 0.05)",
                border: "1px solid var(--cyber-cyan-glow)",
                borderRadius: "50px",
                marginBottom: "1.5rem",
                position: "relative",
                cursor: "help",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--cyber-green)",
                  boxShadow: "0 0 10px var(--cyber-green)",
                }}
              />
              <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono), monospace", color: "var(--cyber-cyan)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Security: Zero Trust, Zero Hype
              </span>
              <span style={{ fontSize: "1rem", color: "var(--cyber-cyan)", opacity: 0.7 }}>ⓘ</span>
              <div className="security-tooltip">
                <strong style={{ fontSize: "0.8rem", color: "var(--cyber-cyan)", display: "block", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid var(--cyber-border)" }}>
                  Free security tools I recommend:
                </strong>
                {securityRecs.map(rec => (
                  <div key={rec.label} style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.7rem", minWidth: "70px" }}>{rec.label}:</span>
                    <a href={rec.url} target="_blank" rel="noopener noreferrer" className="security-tooltip-link">{rec.name}</a>
                  </div>
                ))}
                <em style={{ fontSize: "0.65rem", color: "var(--text-muted)", display: "block", marginTop: "0.75rem", paddingTop: "0.5rem", borderTop: "1px solid var(--cyber-border)" }}>
                  Not sponsored, not affiliated with. Personal preferences only.
                </em>
              </div>
            </div>

            <h1
              className="hero-title"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.25rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              <span style={{ color: "var(--cyber-green)", opacity: 0.8 }}>$ </span>
              whoami
              <span className="terminal-cursor" />
            </h1>

            <h2
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                color: "var(--cyber-cyan)",
                marginBottom: "2rem",
                fontWeight: 500,
                width: "fit-content",
              }}
            >
              &gt;&gt; Discover Innovation → Deliver Success
            </h2>

            <div
              style={{
                marginBottom: "2rem",
                paddingLeft: "1rem",
                borderLeft: "2px solid var(--cyber-cyan-dim)",
                display: "flex",
                alignItems: "center",
                minHeight: "40px"
              }}
            >
              <HexRoulette showFact={true} displayMode="inline" />
            </div>

            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: "600px",
                marginBottom: "2.5rem",
              }}
            >
              Associate Professor and Program Director at{" "}
              <a href="https://www.arcadia.edu/profile/vitaly-ford" target="_blank" rel="noopener noreferrer">
                Arcadia University
              </a>, <a href="https://wicys.org" target="_blank" rel="noopener noreferrer">WiCyS</a> Global Chapter Coordinator, and Co-Founder/CTO at <a href="https://citodex.com" target="_blank" rel="noopener noreferrer">Citodex Technology Ltd.</a>
              <br />
              <span style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginTop: "1rem", display: "block" }}>
                Specializing in Cybersecurity/CS Research and Education, Machine Learning, and Infrastructure.
              </span>
            </p>

            <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
              <Link href="/research" className="cyber-btn cyber-btn-primary" style={{ padding: "0.875rem 2rem" }}>
                <span>View Research</span>
              </Link>
              <Link href="/contact" className="cyber-btn" style={{ padding: "0.875rem 2rem" }}>
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="animate-fade-in" style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  padding: "6px",
                  background: "var(--cyber-surface)",
                  borderRadius: "16px",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
                }}
              >
                <img
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
                <span style={{ fontSize: "0.6rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Current Focus</span>
                <span style={{ fontSize: "0.85rem", color: "var(--cyber-cyan)", fontWeight: 600 }}>Security, AI, and Uncomfortable Edge Cases</span>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Stats Section */}
      < section style={{ padding: "2rem 0" }
      }>
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
      </section >

      <div className="cyber-divider" />

      {/* GitHub Activity */}
      <section style={{ padding: "2rem 0" }}>
        <h2 className="section-heading">GitHub Activity</h2>
        <div className="cyber-card" style={{ padding: "1.5rem", overflow: "hidden" }}>
          <GitHubActivityFun username="vitalyford" />
        </div>
      </section>

      <div className="cyber-divider" />

      {/* Advent of Rust Showcase */}
      <AdventOfRustShowcase />

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
              className="cyber-card project-card-link"
              style={{ display: "block", textDecoration: "none" }}
            >
              {project.badge && (
                <span className="cyber-badge" style={{ marginBottom: "1rem" }}>
                  {project.badge}
                </span>
              )}
              <h3
                className="project-card-title"
                style={{
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
        <h2 className="section-heading">Featured Achievements &amp; Grants</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {achievements.map((item) => {
            const content = (
              <>
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <h3 className="project-card-title" style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>
                    {item.title}
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
              </>
            );

            return item.href ? (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-card project-card-link"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "1rem",
                  flexWrap: "wrap",
                  textDecoration: "none",
                }}
              >
                {content}
              </a>
            ) : (
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
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <div className="cyber-divider" />

      {/* Personal */}
      <section style={{ padding: "2rem 0" }}>
        <h2 className="section-heading">Beyond the Code</h2>

        <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
          When not playing with my kids or hanging out with my wife and friends, I enjoy playing table tennis, chess, and travel.
        </p>
      </section>

      <div className="cyber-divider" />

      <QuotesStream />
    </div >
  );
}
