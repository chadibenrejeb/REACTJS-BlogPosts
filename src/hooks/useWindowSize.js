import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        handleResize();

        window.addEventListener("resize", handleResize); // ki zedna hedhi walet mech ken fel load time tssir el resize 

        return () => window.removeEventListener("resize", handleResize);
        
    }, []);

    return windowSize;
}

export default useWindowSize;
