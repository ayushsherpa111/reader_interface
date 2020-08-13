import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";
// import range from "../../utils/range";
import { animated, useSpring } from "react-spring";

export default function TopBarComponent({ options, updateIndex }) {
    const animProps = useSpring({
        opacity: 1,
        transform: "translateX(0)",
        from: { opacity: 0, transform: "translateX(-90px)" }
    });

    // React.useEffect(() => {
    //     console.log("render");
    //     console.log(options);
    // }, [options]);

    return (
        <animated.div style={animProps} className="topBar">
            <Link to="/">
                <img src="assets/go-back.png" alt="" />
            </Link>
            {options.length > 0 ? (
                <div className="searchFor">
                    <div className="tag">Jump To</div>
                    <span className="custom-dropdown">
                        <select
                            onChange={e => {
                                updateIndex(+e.target.value);
                            }}
                        >
                            {options.map((e, i) => (
                                <option key={e.key} value={i}>
                                    {e.title + " " + e.m_no}
                                </option>
                            ))}
                        </select>
                    </span>
                </div>
            ) : null}
            <div className="chapterSelection">
                <h1>Chapter Select</h1>
            </div>
        </animated.div>
    );
}
