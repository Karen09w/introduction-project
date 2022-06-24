import React, { useState,useEffect } from "react";
import { Button } from "../../../../components";
import localData from "../../../../localData";

let jasonTimeout = null
export default function Jason() {
    const [isBad, setIsBad] = useState(false);

    const { safePlace} = localData.images;

    useEffect(() => {
        clearTimeout(jasonTimeout);
        jasonTimeout = setTimeout(() => {
            setIsBad(false);
        }, 1000);
    }, [ isBad]);

    return (
        <section className="jason" id="jason" data-lazy-block="true">
            <Button className={`btn btn-text-light emoji emoji-bad ${isBad ? "show" : ""}`}>
                <a href="#safe-place">
                    <img data-lazy="fade-up" src={safePlace} alt="" onClick={() => setIsBad(true)} />
                </a>
            </Button>
        </section>
    );
}
