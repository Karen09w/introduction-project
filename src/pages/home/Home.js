import React, { useState, useEffect, useRef } from "react";
import { Header, Footer, Button } from "../../components";
import localData from "../../localData";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import pureAudioSrc from "../../assets/audio/pure.mp3";
import badAudioSrc from "../../assets/audio/bad.mp3";
import { Compatible, Animation, WhyMe, Branches, Completion } from "./sections";
import FadeOnScreen from "../../utils/fadeOnScreen";

export default function Home() {
    const { fade } = useGlobalContext().animations;
    const { isPurePlaying, isBadPlaying, setIsPurePlaying, setIsBadPlaying } = useGlobalContext();
    const { responsive } = localData.images;
    const { play, pause } = localData.svgs;

    // AUDIO
    const pureAudioRef = useRef();
    const badAudioRef = useRef();

    useEffect(() => {
        if (isPurePlaying) {
            pureAudioRef.current.play();
        } else {
            pureAudioRef.current.pause();
        }
    }, [isPurePlaying]);

    useEffect(() => {
        if (isBadPlaying) {
            badAudioRef.current.play();
        } else {
            badAudioRef.current.pause();
        }
    }, [isBadPlaying]);
    //

    useEffect(() => FadeOnScreen.createObserver(), []);

    return (
        <>
            <Header title="home" />
            <motion.main {...fade}>
                <section className="track" id="track" data-lazy-block="true">
                    <div className="container">
                        <h2 className="track-title">
                            <li style={{ overflow: "hidden" }}>
                                <a data-lazy="fade-up">but first,</a>
                            </li>
                            <li style={{ overflow: "hidden" }}>
                                <a data-lazy="fade-up">let the music play</a>
                            </li>
                         
                        </h2>
                    </div>
                    <div className="track-bottom">
                        <div className={`emoji emoji-bad ${isPurePlaying ? "show" : ""}`}>
                            <Button
                                className={`btn btn-warning audio audio-pure ${isPurePlaying ? "play" : ""}`}
                                onClick={() => {
                                    setIsPurePlaying(!isPurePlaying);
                                    setIsBadPlaying(false);
                                }}
                            >
                                <audio loop={true} autoPlay={true} ref={pureAudioRef} src={pureAudioSrc}></audio>

                                <div className="wrapper">
                                    <h5 className="audio-title">pure nature music</h5>
                                    <div className="btn audio-icon">{isPurePlaying ? pause : play}</div>
                                </div>
                            </Button>
                        </div>

                        <div className={`emoji emoji-good ${isBadPlaying ? "show" : ""}`}>
                            <Button
                                className={`btn btn-danger audio audio-bad ${isBadPlaying ? "play" : ""}`}
                                onClick={() => {
                                    setIsBadPlaying(!isBadPlaying);
                                    setIsPurePlaying(false);
                                }}
                            >
                                <audio loop={true} autoPlay={true} ref={badAudioRef} src={badAudioSrc}></audio>

                                <div className="wrapper">
                                    <h5 className="audio-title">bad taste</h5>
                                    <div className="btn audio-icon">{isBadPlaying ? pause : play}</div>
                                </div>
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="service" id="service" data-lazy-block="true">
                    <div className="container">
                        <h2 className="service-title">
                            <li style={{ overflow: "hidden" }}>
                                <a data-lazy="fade-up">here are the services</a>
                            </li>
                            <li style={{ overflow: "hidden" }}>
                                <a data-lazy="fade-up"> i am providing</a>
                            </li>
                            <li style={{ overflow: "hidden" }}>
                                <a data-lazy="fade-up"> in this gig</a>
                            </li>
                        </h2>
                        <div className="service-center">
                            <img src="./service.svg" alt="service" />
                        </div>
                    </div>
                </section>

                <section className="responsive" id="responsive" data-lazy-block="true">
                    <div className="container">
                        <h2 className="responsive-title">
                            <li style={{ overflow: "hidden" }}>
                                <a data-lazy="fade-up">responsive web design</a>
                            </li>
                        </h2>
                        <div className="responsive-center">
                            <img src={responsive} alt="responsive" />
                        </div>
                    </div>
                </section>

                <section className="pixel-perfect" id="pixel-perfect" data-lazy-block="true">
                    <div className="container">
                        <h2 className="pixel-perfect-title">
                            <li style={{ overflow: "hidden" }}>
                                <a data-lazy="fade-up">pixel perfect</a>
                            </li>
                            <li style={{ overflow: "hidden" }}>
                                <a data-lazy="fade-up">conversion</a>
                            </li>
                        </h2>
                        <div className="pixel-perfect-center">
                            <img src="./pixel-perfect.svg" alt="pixel perfect" />
                        </div>
                    </div>
                </section>

                <Compatible />

                <section className="seo" id="seo" data-lazy-block="true">
                    <div className="container">
                        <h2 className="seo-title">
                            <li style={{ overflow: "hidden" }}>
                                <a data-lazy="fade-up">SEO Friendly</a>
                            </li>
                            <li style={{ overflow: "hidden" }}>
                                <a data-lazy="fade-up">Semantic Markup</a>
                            </li>
                        </h2>
                        <div className="seo-center">
                            <img src="./seo.svg" alt="" />
                        </div>
                    </div>
                </section>

                <section className="wrong-section" id="wrong-section" data-lazy-block="true">
                    <div className="container">
                        <h2 className="wrong-section-title">
                            <li style={{ overflow: "hidden" }}>
                                <a data-lazy="fade-up">oops...</a>
                            </li>
                            <li style={{ overflow: "hidden" }}>
                                <a data-lazy="fade-up">wrong section</a>
                            </li>
                        </h2>
                    </div>
                </section>

                <Animation />
                <Branches />
            </motion.main>
        </>
    );
}

// save place

// trust me on this
// not the exit button

// thanks for the company

// so why me
// because i have experience
// trap
// video where jason attacks, and "you died"
