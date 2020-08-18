import React from "react";
import "./Fit.css";

export default function FitComponent({ toggleMainWidth, setToggleMainWidth }) {
    return (
        <div
            className="fit"
            onClick={() => setToggleMainWidth(!toggleMainWidth)}
        >
            <img src="/assets/fit-width.png" alt="" />
        </div>
    );
}
