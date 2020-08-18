import React, { useEffect, useState } from "react";
import OptionComponent from "../Options/OptionComponent";
import "./selection.css";
import { animated, useSpring } from "react-spring";
export default function ChapterSelection(props) {
    const flip = useSpring({
        transform: "rotateX(0)",
        from: { transform: "rotateX(90deg)" }
    });
    const options = [
        {
            thmb: "Play",
            title: "Start Chapter",
            message:
                "Begin your journey through the cold and harsh world of AOT and watch the story unfold through the eyes of our protagonist Eren Yeager",
            route: "shingeki-no-kyojin-chapter/1"
        },
        {
            thmb: "Chapters",
            title: "Browse Chapters",
            message: "Pick up where you left off. Browse through the chapters",
            route: "chapters"
        },
        {
            thmb: "About",
            title: "About the Author",
            message:
                "About the genius author Hajime Isayama(諫山 創). The creator of Attack on titan",
            route: "about"
        }
    ];

    const [chapSummary, setSummary] = useState("");

    useEffect(() => {
        console.log("fetch");
        fetch("http://localhost:5000/")
            .then(res => res.json())
            .then(({ summary }) => {
                console.log(summary);
                setSummary(summary);
            });
    }, []);

    return (
        <div className="sidePanel">
            <div className="info">
                <animated.h1 style={flip}>
                    Read The Attack On Titan Manga
                </animated.h1>
            </div>
            <div className="details">
                <p>{chapSummary ? chapSummary : "loading..."}</p>
            </div>
            <div className="options">
                <OptionComponent
                    options={options}
                    updateRoute={props.changeHistory}
                />
            </div>
        </div>
    );
}
