import ReactGlobe from "react-globe.gl";
import { useEffect, useRef } from "react";

export default function Globe() {
    const globeEl = useRef<typeof ReactGlobe>(null);
    useEffect(() => {
        const globe = globeEl.current;

        // Auto-rotate
        if (globe) {
            globe.controls().autoRotate = true;
            globe.controls().autoRotateSpeed = 1.5;
        }
    });

    return (
        <div className="">
            <ReactGlobe
                ref={globeEl}
                client:only="react"
                width={400}
                height={400}
                enablePointerInteraction={false}
                showAtmosphere={false}
                globeImageUrl="https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-day.jpg"
                backgroundColor="hsla(0deg, 0%, 0%, 0.0)"
            />
        </div>
    );
}
