"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

interface DropdownItem {
  href: string;
  label: string;
  external?: boolean;
}

interface NavDropdown {
  label: string;
  items: DropdownItem[];
}

const mainLinks: NavLink[] = [
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Pubs" },
  { href: "/view?url=/docs/VitalyFordResume.pdf&title=CV", label: "CV" },
  { href: "/schedule", label: "Schedule" },
];

const talksDropdown: NavDropdown = {
  label: "Talks",
  items: [
    { href: "/view?url=/docs/obscurity-in-cybersecurity.pdf&title=Obscurity in Cybersecurity", label: "Obscurity in Cybersecurity" },
    { href: "/view?url=/docs/VitalyFord-ML-and-AI.pdf&title=ML & AI", label: "ML & AI" },
    { href: "/view?url=/docs/aws.pdf&title=Cloud (AWS) Workshop", label: "Cloud (AWS) Workshop" },
    { href: "/view?url=/docs/VitalyFord-AMI-PrivacyDataMining.pdf&title=AMI Privacy Data Mining", label: "AMI Privacy Data Mining" },
    { href: "/view?url=/docs/VitalyFord-Energy-Fraud-Detection.pdf&title=Energy Fraud Detection", label: "Energy Fraud Detection" },
    { href: "/view?url=/docs/VitalyFord-GenCyberCoin-and-Cybersecurity-Principles.pdf&title=GenCyberCoin", label: "GenCyberCoin" },
    { href: "/view?url=/docs/VitalyFord-NSF-CC-Arcadia-Case-Study.pdf&title=NSF CC* Case Study", label: "NSF CC* Case Study" },
  ],
};

const pentestDropdown: NavDropdown = {
  label: "Pentest",
  items: [
    { href: "/pentest/00-Background", label: "00 Background" },
    { href: "/pentest/01-Social-Engineering", label: "01 Social Engineering" },
    { href: "/pentest/02-Assessment-Planning", label: "02 Assessment Planning" },
    { href: "/pentest/03-Passive-Intelligence-Gathering", label: "03 Passive Intel" },
    { href: "/pentest/04-Active-Intelligence-Gathering", label: "04 Active Intel" },
    { href: "/pentest/05-Exploitation", label: "05 Exploitation" },
    { href: "/pentest/06-Post-Exploitation", label: "06 Post-Exploitation" },
    { href: "/pentest/07-Useful-Resources", label: "07 Resources" },
  ],
};

const endLinks: NavLink[] = [
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);
  const [leftHanded, setLeftHanded] = useState(false);

  // Load hand preference from localStorage
  useEffect(() => {
    const savedPreference = localStorage.getItem('handPreference');
    if (savedPreference === 'left') {
      setLeftHanded(true);
    }
  }, []);

  // Save hand preference to localStorage
  const toggleHandPreference = () => {
    const newPreference = !leftHanded;
    setLeftHanded(newPreference);
    localStorage.setItem('handPreference', newPreference ? 'left' : 'right');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu and dropdowns when navigating
    return () => {
      setMobileMenuOpen(false);
      setExpandedDropdown(null);
    };
  }, [pathname]);

  // Swipe gesture support for mobile menu
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX = e.touches[0].clientX;
      touchEndY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      const deltaX = touchEndX - touchStartX;
      const deltaY = Math.abs(touchEndY - touchStartY);
      
      // Swipe from right edge to open menu
      if (!mobileMenuOpen && touchStartX > window.innerWidth - 50 && deltaX < -50 && deltaY < 100) {
        setMobileMenuOpen(true);
        // Haptic feedback simulation
        if (navigator.vibrate) {
          navigator.vibrate(10);
        }
      }
      
      // Swipe right to close menu
      if (mobileMenuOpen && deltaX > 50 && deltaY < 100) {
        setMobileMenuOpen(false);
        if (navigator.vibrate) {
          navigator.vibrate(10);
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => pathname === path;
  const isPentestActive = () => pathname.startsWith("/pentest");

  const toggleMobileDropdown = (label: string) => {
    setExpandedDropdown(expandedDropdown === label ? null : label);
  };

  return (
    <nav className={`nav-cyber ${scrolled ? "scrolled" : ""}`}>
      <div className="container-cyber">
        <div className="nav-inner">
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "1.125rem",
              fontWeight: 700,
              color: isActive("/") ? "var(--cyber-cyan)" : "var(--text-primary)",
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            <span style={{ color: "var(--cyber-cyan)" }}>&lt;</span>
            Vitaly Ford
            <span style={{ color: "var(--cyber-cyan)" }}>/&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {mainLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive(link.href) ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Talks Dropdown */}
            <div className="dropdown-cyber">
              <button
                className="nav-link"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                {talksDropdown.label}
                <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </button>
              <div className="dropdown-menu-cyber">
                {talksDropdown.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="dropdown-item"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Pentest Dropdown */}
            <div className="dropdown-cyber">
              <button
                className={`nav-link ${isPentestActive() ? "active" : ""}`}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                {pentestDropdown.label}
                <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </button>
              <div className="dropdown-menu-cyber">
                {pentestDropdown.items.map((item) => (
                  <Link key={item.href} href={item.href} className="dropdown-item">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {endLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive(link.href) ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`nav-mobile ${mobileMenuOpen ? "open" : ""}`}>
        {mainLinks.map((link) =>
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? "active" : ""}`}
            >
              {link.label}
            </Link>
          )
        )}

        {/* Mobile Talks Accordion */}
        <div className="mobile-dropdown">
          <button
            className={`mobile-dropdown-toggle ${expandedDropdown === "talks" ? "expanded" : ""}`}
            onClick={() => toggleMobileDropdown("talks")}
          >
            {talksDropdown.label}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </button>
          <div className={`mobile-dropdown-content ${expandedDropdown === "talks" ? "expanded" : ""}`}>
            {talksDropdown.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Pentest Accordion */}
        <div className="mobile-dropdown">
          <button
            className={`mobile-dropdown-toggle ${isPentestActive() ? "active" : ""} ${expandedDropdown === "pentest" ? "expanded" : ""}`}
            onClick={() => toggleMobileDropdown("pentest")}
          >
            {pentestDropdown.label}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </button>
          <div className={`mobile-dropdown-content ${expandedDropdown === "pentest" ? "expanded" : ""}`}>
            {pentestDropdown.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {endLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${isActive(link.href) ? "active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Floating Mobile Menu Buttons - both left and right handed options */}
      <button
        className={leftHanded ? "mobile-menu-floating-btn-left" : "mobile-menu-floating-btn"}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
        onDoubleClick={toggleHandPreference}
        title="Double-tap to switch hand preference"
      >
        <span style={{ transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
        <span style={{ opacity: mobileMenuOpen ? 0 : 1 }} />
        <span style={{ transform: mobileMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
      </button>
    </nav>
  );
}
