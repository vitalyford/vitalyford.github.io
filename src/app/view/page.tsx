"use client";

import { useSearchParams } from "next/navigation";
import PdfViewer from "@/components/PdfViewer";
import { Suspense } from "react";

function PdfViewContent() {
    const searchParams = useSearchParams();
    const url = searchParams.get("url");
    const title = searchParams.get("title") || "Document Viewer";

    if (!url) {
        return (
            <div className="error-container">
                <h1>ERROR_404: DOCUMENT_NOT_SPECIFIED</h1>
                <p>Please provide a valid document source stream.</p>
                <style jsx>{`
          .error-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 60vh;
            color: var(--cyber-cyan);
            font-family: var(--font-mono);
          }
        `}</style>
            </div>
        );
    }

    return <PdfViewer url={url} title={title} />;
}

export default function ViewPdfPage() {
    return (
        <div className="container-cyber mx-auto px-4 py-8">
            <Suspense fallback={<div className="text-cyber-cyan font-mono">INITIALIZING_SUBSYSTEMS...</div>}>
                <PdfViewContent />
            </Suspense>
        </div>
    );
}
