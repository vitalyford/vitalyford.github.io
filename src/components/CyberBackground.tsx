"use client";

export default function CyberBackground() {
  return (
    <>
      {/* Cyber Grid */}
      <div className="cyber-grid" aria-hidden="true" />
      
      {/* Gradient Orbs - Subtle ambient lighting */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(0, 245, 255, 0.08) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(153, 69, 255, 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
    </>
  );
}
