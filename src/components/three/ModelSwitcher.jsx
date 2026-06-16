import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import MacBookModel16 from "../models/Macbook-16";
import MacbookModel14 from "../models/Macbook-14";

const SLIDE_DISTANCE = 6;
const SLIDE_DURATION = 0.8;

const ModelSwitcher = ({ scale, isMobile }) => {
    const SCALE_LARGE_DESKTOP = 0.08;
    const SCALE_LARGE_MOBILE = 0.05;
    const groupRef = useRef();
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();
    const previousModelRef = useRef(null);

    const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;
    const smallModelScale = isMobile ? 0.03 : 0.06;
    const largeModelScale = isMobile ? SCALE_LARGE_MOBILE : SCALE_LARGE_DESKTOP;

    useEffect(() => {
        const smallGroup = smallMacbookRef.current;
        const largeGroup = largeMacbookRef.current;
        if (!smallGroup || !largeGroup) return;

        const nextModel = showLargeMacbook ? "large" : "small";
        const previousModel = previousModelRef.current;

        if (!previousModel) {
            smallGroup.position.x = showLargeMacbook ? -SLIDE_DISTANCE : 0;
            largeGroup.position.x = showLargeMacbook ? 0 : SLIDE_DISTANCE;
            smallGroup.visible = !showLargeMacbook;
            largeGroup.visible = showLargeMacbook;
            previousModelRef.current = nextModel;
            return;
        }

        if (previousModel === nextModel) return;

        const incomingGroup = showLargeMacbook ? largeGroup : smallGroup;
        const outgoingGroup = showLargeMacbook ? smallGroup : largeGroup;
        const direction = showLargeMacbook ? 1 : -1;

        gsap.killTweensOf([incomingGroup.position, outgoingGroup.position]);

        incomingGroup.visible = true;
        outgoingGroup.visible = true;
        incomingGroup.position.x = SLIDE_DISTANCE * direction;

        gsap.to(outgoingGroup.position, {
            x: -SLIDE_DISTANCE * direction,
            duration: SLIDE_DURATION,
            ease: "power3.inOut",
            onComplete: () => {
                outgoingGroup.visible = false;
            },
        });

        gsap.to(incomingGroup.position, {
            x: 0,
            duration: SLIDE_DURATION,
            ease: "power3.inOut",
        });

        previousModelRef.current = nextModel;
    }, [showLargeMacbook]);

    useFrame((state) => {
        if (!groupRef.current) return;

        const targetY = state.pointer.x * 0.35;
        const targetX = -state.pointer.y * 0.18;

        groupRef.current.rotation.y = THREE.MathUtils.lerp(
            groupRef.current.rotation.y,
            targetY,
            0.08
        );
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x,
            targetX,
            0.08
        );
    });

    return (
        <group ref={groupRef}>
            <group ref={smallMacbookRef}>
                <MacbookModel14 scale={smallModelScale} />
            </group>
            <group ref={largeMacbookRef}>
                <MacBookModel16 scale={largeModelScale} />
            </group>
        </group>
    )
}

export default ModelSwitcher;