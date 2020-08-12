import React from "react";
import TopBarComponent from "../TopBar/TopBarComponent";
import "./Chapter.css";
import Carousel from "react-spring-3d-carousel";
import { animated, useSpring } from "react-spring";

export function ChapterComponent() {
    const [images, setImages] = React.useState([]);
    const [index, setIndex] = React.useState(0);
    const props = useSpring({
        opacity: 1,
        transform: "translate(0,0)",
        from: { opacity: 0, transform: "translate(0,-50px)" }
    });

    React.useEffect(() => {
        fetch("http://localhost:5000/chapters")
            .then(response => response.json())
            .then(images => {
                return images.result.map((image, i) => ({
                    key: image.chapter_title,
                    content: (
                        <div className="page">
                            <img
                                src={`http://localhost:8000/${image.chapter_title}/${image.chapter_cover}`}
                                alt={"Manga Cover Number" + image.chapter_id}
                            />
                            <div className="mangaTitle">
                                <p>
                                    {image.chapter_title.split("-").join(" ")}
                                </p>
                                <div className="read">
                                    <img alt="read" src="assets/openBook.png" />
                                </div>
                            </div>
                        </div>
                    ),
                    onClick: () => setIndex(i)
                }));
            })
            .then(setImages);
    }, []);

    return (
        <div className="chapters">
            <TopBarComponent options={images} updateIndex={setIndex} />
            <animated.div style={props} className="carousel">
                {images.length > 0 ? (
                    <Carousel
                        slides={images}
                        goToSlide={index}
                        offsetRadius={3}
                        showNavigation={false}
                        animationConfig={{
                            mass: 1,
                            tension: 30,
                            friction: 12
                            // clamp: true
                        }}
                    />
                ) : (
                    <h1>loading</h1>
                )}
            </animated.div>
        </div>
    );
}
