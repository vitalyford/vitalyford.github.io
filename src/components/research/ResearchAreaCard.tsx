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
                <h3 style={{ margin: 0, marginBottom: "0.25rem" }} className="text-medium">{area.title}</h3>
                {area.description && (
                    <p style={{ color: "var(--text-secondary)", margin: 0 }} className="text-standard">
                        {area.description}
                    </p>
                )}
            </div>
        </div>
    );
}
