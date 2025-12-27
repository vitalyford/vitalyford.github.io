import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  altText?: string;
}

export default function PageHeader({ title, subtitle, imageSrc, altText }: PageHeaderProps) {
  return (
    <header className="page-header animate-fade-in" style={{ marginBottom: "2rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {imageSrc && (
          <div className="profile-image-wrapper">
            <Image
              src={imageSrc}
              alt={altText || ""}
              width={180}
              height={180}
              className="profile-image"
              style={{
                objectFit: "cover",
                width: "180px",
                height: "180px",
              }}
              priority
            />
          </div>
        )}
        <div style={{ flex: 1, minWidth: "250px" }}>
          <h1
            className="page-header-title"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              color: "var(--cyber-cyan)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: subtitle ? "0.75rem" : "0",
            }}
          >
            {title}
            <span className="terminal-cursor" />
          </h1>
          {subtitle && (
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                margin: 0,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
