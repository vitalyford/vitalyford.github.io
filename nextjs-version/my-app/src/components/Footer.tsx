import Link from "next/link";

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://linkedin.com/in/vitalyford",
    label: "LinkedIn",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/vitalyford",
    label: "GitHub",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    href: "https://www.arcadia.edu/profile/vitaly-ford",
    label: "University",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
      </svg>
    ),
  },
  {
    href: "https://scholar.google.com/citations?user=49RgkBcAAAAJ&hl=en",
    label: "Google Scholar",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
      </svg>
    ),
  },
  {
    href: "https://www.researchgate.net/profile/Vitaly_Ford",
    label: "ResearchGate",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.53 0c-1.488 0-2.705 1.103-2.705 2.457 0 1.354 1.217 2.457 2.705 2.457s2.705-1.103 2.705-2.457c0-1.354-1.217-2.457-2.705-2.457zm-10.825 4.805c-1.488 0-2.705 1.103-2.705 2.457s1.217 2.457 2.705 2.457h2.705v4.914c0 1.354 1.217 2.457 2.705 2.457h2.705v-2.457h-2.705c-.149 0-.271-.11-.271-.246V9.719h2.976V7.262H5.41V4.805H2.705z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-cyber">
      <div className="container-cyber">
        {/* Top Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand Section */}
          <div style={{ flex: 1, minWidth: "280px" }}>
            <div
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "1.25rem",
                fontWeight: 700,
                marginBottom: "1rem",
                color: "var(--text-primary)",
              }}
            >
              <span style={{ color: "var(--cyber-cyan)" }}>&lt;</span>
              Vitaly Ford
              <span style={{ color: "var(--cyber-cyan)" }}>/&gt;</span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
              Associate Professor, WiCyS Global Chapter Coordinator, and CTO
              <br />
              Cybersecurity Researcher & Educator
            </p>
          </div>

          {/* Connect */}
          <div style={{ textAlign: "right" }}>
            <h4
              style={{
                color: "var(--cyber-cyan)",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1rem",
              }}
            >
              Connect
            </h4>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="cyber-divider" />

        {/* Bottom Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: 0 }}>
            © {currentYear} Vitaly Ford. Licensed under GNU GPL v3.0
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.75rem",
              margin: 0,
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            <span style={{ color: "var(--cyber-green)" }}>$</span> echo &quot;Securing the future through education&quot;
          </p>
        </div>
      </div>
    </footer>
  );
}
