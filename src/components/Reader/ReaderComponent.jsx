import React from "react";
import "./Reader.css";
import SideBarComponent from "../SideBar/SideBarComponent";
import MainComponent from "../Main/MainComponent";
import ZoomComponent from "../Zoom/ZoomComponent";
import FitComponent from "../Fit/FitComponent";
import { animated, useSpring } from "react-spring";

export default function ReaderComponent({ history, match }) {
    const [pages, setPages] = React.useState([]);
    const [zoomed, setZoomed] = React.useState(false);
    const [current, setCurrent] = React.useState(0);
    const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });
    const [toggle, setToggle] = React.useState(() => false);
    const [toggleMainWidth, setToggleMainWidth] = React.useState(false);
    React.useEffect(() => {
        console.log("Readding");
        fetch(`http://localhost:5000/chapters/${match.params.chapter}`)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(
                ({ result }) => {
                    return result.map((e, i) => (
                        <img
                            key={e}
                            src={`http://localhost:8000//${match.params.manga +
                                "-" +
                                match.params.chapter}/${e}`}
                            className={i === current ? "curr" : ""}
                            alt="thumbs"
                            onClick={() => {
                                setCurrent(i);
                            }}
                        />
                    ));
                },
                () => console.log("err")
            )
            .then(setPages);
    }, [match.params.chapter, match.params.manga, current]);

    return (
        <div className="readerBody">
            <SideBarComponent
                pages={pages}
                history={history}
                current={current}
                setCurrent={setCurrent}
                toggle={toggle}
                setToggle={setToggle}
            />
            <MainComponent
                current={current}
                toggle={toggle}
                toggleMainWidth={toggleMainWidth}
                setToggle={setToggle}
                chapter={pages[current]}
                setCurrent={setCurrent}
                len={pages.length}
            />
            <animated.div className="floatingOptions" style={fadeIn}>
                <ZoomComponent zoomed={zoomed} setZoomed={setZoomed} />
                <FitComponent
                    toggleMainWidth={toggleMainWidth}
                    setToggleMainWidth={setToggleMainWidth}
                />
            </animated.div>
        </div>
    );
}
