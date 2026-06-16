import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { performanceImages, performanceImgPositions } from "../constants/index.js";
import {useMediaQuery} from "react-responsive";

const Performance = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const sectionRef = useRef(null);

    

    return (
        <section id="performance" ref={sectionRef}>
            <h2>Next-level graphics performance. Game on.</h2>

             <div className="wrapper">
                {performanceImages.map((item, index) => (
                    <img
                        key={index}
                        src={item.src}
                        className={item.id}
                        alt={item.alt || `Performance Image #${index + 1}`}
                    />
                ))}
             </div>

            <div className="content">
                <p>
                    Run graphics-intensive workflows with a responsiveness that keeps up
                    with your imagination. The M4 family of chips features a GPU with a
                    second-generation hardware-accelerated ray tracing engine that renders
                    images faster, so{" "}
                    <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{" "}
                    And Dynamic Caching optimizes fast on-chip memory to dramatically
                    increase average GPU utilization — driving a huge performance boost
                    for the most demanding pro apps and games.
                </p>
            </div>
        </section>
    )
}
export default Performance