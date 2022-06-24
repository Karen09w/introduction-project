import React, { useState, useEffect } from "react";
import localData from "../../../../localData";
import { Button } from "../../../../components";
import {useGlobalContext} from '../../../../context'

let timeout = null;

export default function WhyMe() {
    const { risk, flowers } = localData.images;

    const [isGood, setIsGood] = useState(false);
    const [isBad, setIsBad] = useState(false);

    const {setIsPurePlaying, setIsBadPlaying } = useGlobalContext();

    useEffect(() => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            setIsGood(false);
            setIsBad(false);
        }, 1000);
    }, [isGood, isBad]);

    return (
        <section className="why-me" id="why-me" data-lazy-block="true">
            <div className="container">
                <h2 className="why-me-title">
                    <li style={{ overflow: "hidden" }}>
                        <a data-lazy="fade-up">why me</a>
                    </li>
                </h2>
            </div>
            <div className={`wrapper `}>
                <Button className={`why-me-left-sign btn btn-text-light emoji emoji-bad ${isBad ? "show" : ""}`}>
                    <img
                        data-lazy="fade-right"
                        src={flowers}
                        alt=""
                        onClick={() => {
                            setIsGood(false);
                            setIsBad(true);
                            setIsBadPlaying(false)
                            setIsPurePlaying(true)
                        }}
                    />
                </Button>

                <Button className={`why-me-right-sign btn btn-text-light emoji emoji-good ${isGood ? "show" : ""}`}>
                    <img
                        data-lazy="fade-left"
                        src={risk}
                        alt=""
                        onClick={() => {
                            setIsGood(true);
                            setIsBad(false);
                        }}
                    />
                </Button>
            </div>
        </section>
    );
}
