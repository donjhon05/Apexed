"use client"
import Image from "next/image"

export default function GlowEffects() {
    return (
        <>
        <div className="absolute top-0 z-0">
            <Image src="/assets/glow-reverse.webp" alt="glow-effect" width={1920} height={1080} />
        </div>
        <div className="absolute top-0 left-[50vw] z-0 opacity-25">
            <Image src="/assets/graph.webp" alt="graph" width={1920} height={1080} />
        </div>
        <div className="absolute top-0 left-0 z-0">
            <Image src="/assets/glow.webp" alt="glow-effect" width={1920} height={1080} />
        </div>
        </>
    )
}