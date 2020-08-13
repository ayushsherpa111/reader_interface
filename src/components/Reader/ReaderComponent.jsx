import React from "react";
import "./Reader.css";
import SideBarComponent from "../SideBar/SideBarComponent";
import MainComponent from "../Main/MainComponent";

export default function ReaderComponent({ match }) {
    console.log(match);
    const [pages, setPages] = React.useState([]);
    const [current, setCurrent] = React.useState(0);

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
                        <li key={e}>
                            <img
                                src={`http://localhost:8000//${match.params
                                    .manga +
                                    "-" +
                                    match.params.chapter}/${e}`}
                                className={i === current ? "curr" : ""}
                                alt="thumbs"
                            />
                        </li>
                    ));
                },
                () => console.log("err")
            )
            .then(setPages);
    }, [match.params.chapter, match.params.manga]);

    return (
        <div className="readerBody">
            <SideBarComponent
                pages={pages}
                current={current}
                setCurrent={setCurrent}
            />
            <MainComponent current={current} />
        </div>
    );
}
