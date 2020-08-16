import React, { useState } from "react";
import "./Main.css";
import { animated, useSpring } from "react-spring";
import ZoomComponent from "../Zoom/ZoomComponent";

export default function MainComponent({
    current,
    chapter,
    toggle,
    setToggle,
    len,
    setCurrent
}) {
    console.log(current);
    console.log(toggle);
    console.log(len);
    const [zoomed, setZoomed] = useState(false);
    const [style, set] = useSpring(() => ({
        transform: "translate(0,-100px)",
        opacity: 0
    }));

    React.useEffect(() => {
        set({ opacity: 1, transform: "translate(0,0)" });
    }, [set]);

    return (
        <div
            className="mainBody"
            onClick={() => {
                if (toggle) {
                    setToggle(false);
                }
            }}
        >
            <div
                className="btn"
                style={
                    current === 0
                        ? { color: "grey", filter: "invert(0.5)" }
                        : {}
                }
                onClick={() => {
                    console.log(current);
                    if (current > 0) {
                        setCurrent(current - 1);
                    } else {
                        console.log("already at first index");
                    }
                }}
            >
                <img src="/assets/arrowChange.png" className="prev" alt="" />
                prev
            </div>
            <animated.div style={style} className="mangaImage">
                {chapter}
            </animated.div>
            <div
                className="btn"
                style={
                    current === len - 1
                        ? { color: "grey", filter: "invert(0.5)" }
                        : {}
                }
                onClick={() => {
                    console.log(current);
                    console.log(len);
                    if (current !== len - 1) {
                        setCurrent(current + 1);
                    } else {
                        console.log("already at final index");
                    }
                }}
            >
                <img src="/assets/arrowChange.png" className="next" alt="" />
                next
            </div>
            <ZoomComponent zoomed={zoomed} setZoomed={setZoomed} />
        </div>
    );
}
