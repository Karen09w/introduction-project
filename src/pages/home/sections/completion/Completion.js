import React, { useState, useEffect } from "react";
import localData from "../../../../localData";
import { Button } from "../../../../components";
import FadeOnScreen from "../../../../utils/fadeOnScreen";

let completionTimeout = null;
export default function Completion() {
    const { photoshop, figma, sketch, xd, safe, danger } = localData.images;

    const [isSectionDisplayed, setIsSectionDisplayed] = useState(false);

    const [isGood, setIsGood] = useState(false);
    const [isBad, setIsBad] = useState(false);

    useEffect(() => {
        clearTimeout(completionTimeout);
        completionTimeout = setTimeout(() => {
            setIsGood(false);
            setIsBad(false);
        }, 1000);
    }, [isGood, isBad]);
    return (
        <section className="completion" id="completion" data-lazy-block="true">
            <div className="container">
                <div className="completion-center">
                    <div className={`icons ${isSectionDisplayed ? "" : "hide"}`} data-lazy="fade">
                        <img src={photoshop} alt="photoshop" />
                        <img src={xd} alt="xd" />
                        <img src={figma} alt="figma" />
                        <img src={sketch} alt="sketch" />
                    </div>
                    <h1 className={`completion-title ${isSectionDisplayed ? "" : "hide"}`} data-lazy="fade">
                        html conversion
                    </h1>

                    <div>
                        <h3 className={`completion-subtitle ${isSectionDisplayed ? "" : "hide"}`} data-lazy="fade">
                            fully responsive
                        </h3>
                        <h3 className={`completion-subtitle ${isSectionDisplayed ? "" : "hide"}`} data-lazy="fade">
                            seo friendly markup
                        </h3>
                        <h3 className={`completion-subtitle ${isSectionDisplayed ? "" : "hide"}`} data-lazy="fade">
                            friendly support and service
                        </h3>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <h2 className="completion-title-secondary">
                    <li className={`d-flex ${!isSectionDisplayed ? "" : "hide"}`} data-lazy="fade">
                            so why choose me?
                    </li>
                </h2>

                <div className={`wrapper `}>
                    <Button
                        className={`why-me-left-sign btn btn-text-light emoji emoji-bad ${
                            !isSectionDisplayed ? "" : "hide"
                        } ${isBad ? "show" : ""}`}
                        data-lazy="fade"
                    >
                        <img
                            data-lazy="fade-right"
                            src={safe}
                            alt=""
                            onClick={() => {
                                setIsGood(false);
                                setIsBad(true);
                            }}
                        />
                    </Button>

                    <Button
                        className={`why-me-right-sign btn btn-text-light emoji emoji-good ${
                            !isSectionDisplayed ? "" : "hide"
                        } ${isGood ? "show" : ""}`}
                        data-lazy="fade"
                    >
                        <img
                            data-lazy="fade-left"
                            src={danger}
                            alt=""
                            onClick={() => {
                                setIsSectionDisplayed(true);
                                setIsGood(true);
                                setIsBad(false);
                                setTimeout(() => {
                                    FadeOnScreen.createObserver();
                                }, 1500);
                            }}
                        />
                    </Button>
                </div>
            </div>
        </section>
    );
}
