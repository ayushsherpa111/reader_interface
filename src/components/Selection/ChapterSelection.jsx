import React, { useEffect, useState } from "react";
import OptionComponent from "../Options/OptionComponent";
import "./selection.css";

export default function ChapterSelection(props) {
    const options = [
        {
            thmb: "Play",
            title: "Start Chapter",
            message:
                "Begin your journey through the cold and harsh world of AOT and watch the story unfold through the eyes of our protagonist Eren Yeager"
        },
        {
            thmb: "Chapters",
            title: "Browse Chapters",
            message: "Pick up where you left off. Browse through the chapters"
        },
        {
            thmb: "About",
            title: "About the Author",
            message:
                "About the genius author Hajime Isayama(諫山 創). The creator of Attack on titan"
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
                <h1>Read The Attack On Titan Manga</h1>
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
