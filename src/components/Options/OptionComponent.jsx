import React from "react";
import { useInfo } from "../../hooks/useInfo";
import "./Options.css";

export default function OptionComponent(props) {
    const { title, message, updateMessage } = useInfo();
    const [route, setRoute] = React.useState("");
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
                        onMouseOver={() => {
                            setRoute(e.route);
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
                                console.log(route);
                                props.updateRoute(route);
                            }}
                        />
                    </div>
                ) : null}
            </div>
        </>
    );
}
