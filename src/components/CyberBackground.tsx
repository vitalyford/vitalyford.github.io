"use client";

export default function CyberBackground() {
  return (
    <>
      {/* Cyber Grid */}
      <div className="cyber-grid" aria-hidden="true" />

      {/* Gradient Orbs - Subtle ambient lighting */}
      {/* Gradient Orbs - Sharper ambient lighting */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          bottom: "-20%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(176, 38, 255, 0.08) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 0%, rgba(5, 5, 8, 0.8) 100%)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
    </>
  );
}
