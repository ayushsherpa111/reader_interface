import React from "react";
import "./SideBar.css";
import { animated, useSpring } from "react-spring";

export default function SideBarComponent({
    history,
    pages,
    current,
    setCurrent
}) {
    console.log(history);
    const [toggle, setToggle] = React.useState(true);
    const [fade, setFade] = useSpring(() => ({
        opacity: 1,
        transform: "rotateZ(-90deg)",
        from: { opacity: 0 }
    }));

    const [extend, setExtend] = useSpring(() => ({
        width: "0%",
        opacity: 0
    }));

    return (
        <div className="side">
            <animated.div style={extend} className="sideBar">
                <div className="selection">
                    <h1>Thumbnails</h1>
                </div>
                {pages.length > 0 ? (
                    <div className="thumbs">{pages}</div>
                ) : null}
            </animated.div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "35%"
                }}
            >
                <animated.div
                    style={fade}
                    className="toggleBtn"
                    onClick={() => {
                        setExtend({
                            width: toggle ? "65%" : "0%",
                            opacity: toggle ? 1 : 0
                        });
                        setFade({
                            transform: toggle
                                ? "rotateZ(-270deg)"
                                : "rotateZ(-90deg)"
                        });
                        setToggle(!toggle);
                    }}
                >
                    <img src="/assets/expand.png" alt="" />
                </animated.div>
                <div
                    className="toggleBtn"
                    onClick={() => {
                        history.push("/");
                    }}
                >
                    <img src="/assets/home.png" alt="" />
                </div>
                <div
                    className="toggleBtn"
                    onClick={() => {
                        history.push("/chapters");
                    }}
                >
                    <img src="/assets/index.png" alt="" />
                </div>
            </div>
        </div>
    );
}
