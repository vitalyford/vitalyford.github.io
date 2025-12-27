import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="animate-fade-in" style={{ textAlign: "center", padding: "4rem 0" }}>
      <div
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "6rem",
          fontWeight: 700,
          color: "var(--cyber-cyan)",
          lineHeight: 1,
          marginBottom: "1rem",
          textShadow: "0 0 30px var(--cyber-cyan-glow)",
        }}
      >
        404
      </div>
      <h1
        style={{
          fontSize: "1.5rem",
          color: "var(--text-primary)",
          marginBottom: "2rem",
        }}
      >
        <span style={{ color: "var(--cyber-green)" }}>$</span> Error: Page not found
      </h1>

      <div style={{ maxWidth: "400px", margin: "0 auto 2rem" }}>
        <Image
          src="/images/404meme.jpg"
          alt="Bugs Bunny saying: it ain't gonna hack itself, doc"
          width={400}
          height={320}
          className="cyber-image"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link href="/" className="cyber-btn cyber-btn-primary">
        <span>Return Home</span>
      </Link>
    </div>
  );
}
