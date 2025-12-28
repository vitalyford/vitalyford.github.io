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
        <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .078.53h-.005a3.334 3.334 0 0 0 .112.438c.244.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.35-.272.608-.494.765-.222.158-.535.236-.902.236-.39 0-.707-.104-.963-.314-.255-.21-.43-.51-.521-.904a4.69 4.69 0 0 1-.1-.738 10.4 10.4 0 0 1-.027-.762v-.586a9.3 9.3 0 0 1 .028-.762 4.7 4.7 0 0 1 .1-.738c.09-.393.265-.694.52-.903.256-.21.574-.315.963-.315.375 0 .685.077.93.23.245.154.426.384.544.692.054.14.126.21.215.21h1.27c.095 0 .142-.047.142-.14 0-.267-.125-.553-.33-.852a2.67 2.67 0 0 0-.76-.682 3.603 3.603 0 0 0-1.033-.434 4.769 4.769 0 0 0-1.178-.154c-.818 0-1.507.19-2.073.565-.565.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.438 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.014.621-.014 1.017 0 .396.003.735.014 1.016a9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .078.53h-.005c.026.155.063.294.112.437.244.744.65 1.304 1.214 1.68.565.377 1.255.565 2.073.565.818 0 1.508-.188 2.073-.565.564-.376.97-.936 1.213-1.68a3.19 3.19 0 0 0 .112-.437h.004a7.946 7.946 0 0 0 .079-.53 9 9 0 0 0 .05-.727c.01-.28.013-.62.013-1.016 0-.396-.003-.735-.013-1.017a9 9 0 0 0-.05-.727 8.365 8.365 0 0 0-.079-.53 3.334 3.334 0 0 0-.112-.437c-.243-.744-.649-1.303-1.213-1.68-.565-.376-1.255-.565-2.073-.565zM4.57 7.702c-.054 0-.08.027-.08.08v2.555c0 .108.027.162.08.162h1.586l.54 1.43h-2.05c-.108 0-.162.053-.162.16v2.07c0 .108.054.162.161.162h3.953c.054 0 .08-.027.08-.08v-2.638L7.152 7.78c-.027-.054-.067-.08-.12-.08H4.57z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-cyber">
      <div className="container-cyber">
        {/* Top Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand Section */}
          <div>
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

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: "var(--cyber-cyan)",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1rem",
              }}
            >
              Quick Links
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
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
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
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
