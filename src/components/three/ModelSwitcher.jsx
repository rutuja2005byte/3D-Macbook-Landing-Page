import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import MacBookModel16 from "../models/Macbook-16";
import MacbookModel14 from "../models/Macbook-14";

const ModelSwitcher = ({ scale, isMobile }) => {
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLargeMacbook = scale == 0.08 || scale == 0.05;

    return (
        <>
        <PresentationControls>
            <group ref={largeMacbookRef}>
                <MacBookModel16 scale={isMobile ? 0.05 : 0.08} />
            </group>
        </PresentationControls>
        
        <PresentationControls>
            <group ref={smallMacbookRef}>
                <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
            </group>
        </PresentationControls>
        </>
        
    )
}

export default ModelSwitcher;