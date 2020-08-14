import React from "react";
import "./Main.css";
import { animated, useSpring } from "react-spring";

export default function MainComponent({ current, chapter }) {
    console.log(current);
    const [style, set] = useSpring(() => ({
        transform: "translate(0,-100px)",
        opacity: 0
    }));

    React.useEffect(() => {
        set({ opacity: 1, transform: "translate(0,0)" });
    }, [set]);

    return (
        <div className="mainBody">
            <animated.div style={style} className="mangaImage">
                {chapter}
            </animated.div>
        </div>
    );
}
