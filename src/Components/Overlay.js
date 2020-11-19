import React, { useEffect } from "react";

const Overlay = () => {
    useEffect(() => {
        document.getElementById("overlay").style.display = "block";
    }, [])

    const off = () => {
        document.getElementById("overlay").style.display = "none";
    }
    return (
        <div id="overlay" onClick={off}>
            <div id="overlay-text">You can perform only 15 searches in 1 minute.<br/>
                The timer will start with your 1st search
            </div>
        </div>
    )
}

export default Overlay;