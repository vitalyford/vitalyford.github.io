import Image from "next/image";
import { ResearchArea } from "@/data/research";

export default function ResearchAreaCard({ area }: { area: ResearchArea }) {
    return (
        <div className="research-card">
            <div className="research-card-image" style={{ position: "relative", height: "140px" }}>
                <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 25vw"
                />
            </div>
            <div className="research-card-title">
                <h3 style={{ fontSize: "1rem", margin: 0, marginBottom: "0.25rem" }}>{area.title}</h3>
                {area.description && (
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>
                        {area.description}
                    </p>
                )}
            </div>
        </div>
    );
}
