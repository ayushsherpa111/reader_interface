import React from "react";
import ChapterSelection from "../Selection/ChapterSelection";
import "./Home.css";

export function HomeComponent({ history, location, match }) {
    console.log("history", history);
    console.log("location", location);
    console.log("match", match);
    return (
        <div className="main">
            <div className="homeDiv">
                <div className="header">
                    <img src="./assets/title.png" alt="" />
                </div>
                <div className="cover">
                    <img src="./assets/Cover.png" alt="" />
                </div>
            </div>
            <div className="infos">
                <ChapterSelection changeHistory={path => history.push(path)} />
            </div>
        </div>
    );
}
