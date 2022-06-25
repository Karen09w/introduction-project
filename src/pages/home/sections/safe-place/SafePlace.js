import React, { useState, useEffect } from "react";
import { Button } from "../../../../components";
import localData from "../../../../localData";
import {useGlobalContext} from '../../../../context'

let safePlaceTimeout = null;
export default function SafePlace() {
    const { club, icecream, rainbow, elmStreet } = localData.images;
    const {setIsPurePlaying, setIsBadPlaying } = useGlobalContext();

    const [isBad, setIsBad] = useState(false);
    const [isBad2, setIsBad2] = useState(false);
    const [isBad3, setIsBad3] = useState(false);
    const [isGood, setIsGood] = useState(false);

    useEffect(() => {
        clearTimeout(safePlaceTimeout);
        safePlaceTimeout = setTimeout(() => {
            setIsGood(false);
            setIsBad(false);
            setIsBad2(false);
            setIsBad3(false);
        }, 1000);
    }, [isGood, isBad]);

    return (
        <section className="safe-place" id="safe-place" data-lazy-block="true">
            <div className={`wrapper `}>
                <div className="wrapper">
                <Button className={`btn btn-text-light emoji emoji-bad ${isBad3 ? "show" : ""}`}>
                            <img
                                data-lazy="fade-right"
                                src={club}
                                alt=""
                                onClick={() => {
                                    setIsGood(false);
                                    setIsBad3(true);
                                }}
                            />
                    </Button>
                    <Button className={`btn btn-text-light emoji emoji-bad ${isBad ? "show" : ""}`}>
                        <img
                            data-lazy="fade-right"
                            src={icecream}
                            alt=""
                            onClick={() => {
                                setIsGood(false);
                                setIsBad(true);
                            }}
                        />
                    </Button>
                  
                    <Button className={`btn btn-text-light emoji emoji-bad ${isBad2 ? "show" : ""}`}>
                        <img
                            data-lazy="fade-right"
                            src={rainbow}
                            alt=""
                            onClick={() => {
                                setIsGood(false);
                                setIsBad2(true);
                            }}
                        />
                    </Button>
                   
                </div>

                <Button className={`safe-place-right-sign btn btn-text-light emoji emoji-good ${isGood ? "show" : ""}`}>
                    <img
                        data-lazy="fade-left"
                        src={elmStreet}
                        alt=""
                        onClick={() => {
                            setIsGood(true);
                            setIsBad(false);
                            setIsBadPlaying(true)
                            setIsPurePlaying(false)
                            document.querySelector('.branches .swiper-custom-angle-right').click()
                        }}
                    />
                </Button>
            </div>
        </section>
    );
}
