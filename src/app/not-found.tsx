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

      <Link href="/" className="cyber-btn cyber-btn-primary">
        <span>Back to Reality</span>
      </Link>
    </div>
  );
}
