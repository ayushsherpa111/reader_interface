import React from "react";
import "./Zoom.css";

export default function ZoomComponent({ zoomed, setZoomed }) {
    return (
        <div className="zoom" onClick={() => setZoomed(!zoomed)}>
            <img
                src={"/assets/" + (zoomed ? "zoom-out.png" : "zoom-in.png")}
                alt=""
            />
        </div>
    );
}
