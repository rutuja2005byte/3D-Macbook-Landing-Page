import { useRef } from "react";

const ModelSwitcher = ({ scale, isMobile }) => {
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLargeMacbook = scale == 0.08 || scale == 0.05;

    return (
        <div>ModelSwitcher</div>
    )
}

export default ModelSwitcher;