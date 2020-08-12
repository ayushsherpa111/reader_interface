import React from "react";
import { useInfo } from "../../hooks/useInfo";
import "./Options.css";

export default function OptionComponent(props) {
    const { title, message, updateMessage } = useInfo();
    return (
        <>
            <div style={{ marginRight: "8px" }}>
                {props.options.map(e => (
                    <div
                        className="ico"
                        key={e.thmb}
                        onMouseEnter={() => {
                            updateMessage(() => ({
                                title: e.title,
                                message: e.message
                            }));
                        }}
                    >
                        <div className="imageIco">
                            <img src={`assets/${e.thmb}.png`} alt="" />
                        </div>
                        <p className="title">{e.thmb}</p>
                    </div>
                ))}
            </div>
            <div className="hovInfo">
                <h1 className="optTitle">{title}</h1>
                <hr />
                <p>{message}</p>
                {title !== "Start Reading" ? (
                    <div className="go">
                        <img
                            src="assets/arrow.png"
                            alt=""
                            onClick={() => {
                                props.updateRoute("/chapters");
                            }}
                        />
                    </div>
                ) : null}
            </div>
        </>
    );
}
