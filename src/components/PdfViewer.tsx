"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface PdfViewerProps {
  url: string;
  title: string;
}

export default function PdfViewer({ url, title }: PdfViewerProps) {
  const [loading, setLoading] = useState(true);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            setLoading(false);
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    <div className="pdf-viewer-container">
      <div className="pdf-header">

        <div className="pdf-title-container">
          <h1 className="pdf-title">{title}</h1>
          <div className="pdf-meta">
            <span className="pdf-meta-label">STATUS:</span>
            <span className="pdf-meta-value">{loading ? "DECRYPTING..." : "VERIFIED"}</span>
            <span className="pdf-meta-sep">|</span>
            <span className="pdf-meta-label">TYPE:</span>
            <span className="pdf-meta-value">PDF</span>
          </div>
        </div>
        <div className="pdf-actions">
          <a href={url} download className="pdf-action-btn download">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4a2 2 0 0 1 2 2h14a2 2 0 0 0 2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            DOWNLOAD
          </a>
          <Link href="/" className="pdf-close-btn" aria-label="Exit Viewer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </Link>
        </div>
      </div>

      <div className="pdf-main-area">
        {loading && (
          <div className="pdf-loading-overlay">
            <div className="scan-line" />
            <div className="loading-content">
              <div className="loading-text">SCANNING DATA STREAM... {Math.round(scanProgress)}%</div>
              <div className="loading-bar-container">
                <div className="loading-bar" style={{ width: `${scanProgress}%` }} />
              </div>
              <div className="loading-subtext">INTEGRITY CHECK IN PROGRESS</div>
            </div>
          </div>
        )}

        <iframe
          src={`${url}#toolbar=0&navpanes=0&scrollbar=0`}
          className={`pdf-iframe ${loading ? "hidden" : "visible"}`}
          title={title}
          onLoad={() => {
            // Give a little extra time for the animation to feel real
            setTimeout(() => setLoading(false), 500);
          }}
        />
      </div>

      <style jsx>{`
        .pdf-viewer-container {
          display: flex;
          flex-direction: column;
          height: calc(100vh - 80px); /* Adjust for navbar */
          background: rgba(10, 10, 15, 0.8);
          border: 1px solid var(--cyber-cyan-30);
          margin-top: 1rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(0, 243, 255, 0.05);
        }

        .pdf-header {
          padding: 1rem 1.5rem;
          background: rgba(20, 20, 30, 0.9);
          border-bottom: 1px solid var(--cyber-cyan-30);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }



        .pdf-title-container {
          flex: 1;
        }

        .pdf-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .pdf-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.25rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
        }

        .pdf-meta-label {
          color: var(--text-secondary);
          opacity: 0.6;
        }

        .pdf-meta-value {
          color: var(--cyber-cyan);
        }

        .pdf-meta-sep {
          color: var(--text-secondary);
          opacity: 0.3;
        }

        .pdf-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .pdf-action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 4px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .pdf-action-btn.download {
          background: var(--cyber-cyan-10);
          color: var(--cyber-cyan);
          border: 1px solid var(--cyber-cyan-30);
        }

        .pdf-action-btn.download:hover {
          background: var(--cyber-cyan);
          color: #000;
        }

        .pdf-close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(255, 68, 68, 0.1);
          color: rgba(255, 68, 68, 0.7);
          border: 1px solid rgba(255, 68, 68, 0.2);
          border-radius: 50%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .pdf-close-btn:hover {
          background: rgba(255, 68, 68, 0.9);
          color: #fff;
          border-color: #ff4444;
          box-shadow: 0 0 15px rgba(255, 68, 68, 0.4);
          transform: rotate(90deg);
        }

        .pdf-main-area {
          flex: 1;
          position: relative;
          background: #000;
        }

        .pdf-iframe {
          width: 100%;
          height: 100%;
          border: none;
          transition: opacity 0.5s ease;
        }

        .pdf-iframe.hidden {
          opacity: 0;
        }

        .pdf-iframe.visible {
          opacity: 1;
        }

        .pdf-loading-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(10, 10, 15, 0.95);
          z-index: 10;
        }

        .scan-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--cyber-cyan);
          box-shadow: 0 0 10px var(--cyber-cyan);
          opacity: 0.5;
          animation: scan 2s linear infinite;
        }

        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }

        .loading-content {
          width: 300px;
          text-align: center;
        }

        .loading-text {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--cyber-cyan);
          margin-bottom: 1rem;
          letter-spacing: 1px;
        }

        .loading-bar-container {
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .loading-bar {
          height: 100%;
          background: var(--cyber-cyan);
          box-shadow: 0 0 10px var(--cyber-cyan-40);
          transition: width 0.1s linear;
        }

        .loading-subtext {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-secondary);
          opacity: 0.5;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .pdf-header {
            padding: 0.75rem 1rem;
          }
          .pdf-actions {
            width: 100%;
            justify-content: flex-start;
          }
          .pdf-viewer-container {
            height: calc(100vh - 60px);
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
}
