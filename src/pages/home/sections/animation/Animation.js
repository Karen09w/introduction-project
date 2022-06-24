import React, { useState, useEffect } from "react";
import {  Neomorphic } from "../../../../components";
import localData from "../../../../localData";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

export default function Animation() {
    const {
    
        milk,
        preloader,
        geans,
        flower,
        mountainTree,
        mist,
        mountains,
        mountain,
    } = localData.images;
    const { angleLeft, angleRight } = localData.svgs;

    const [items, setItems] = useState([
        { name: "mountains", image: mountains },
        { name: "milk", image: milk },
        { name: "geans", image: geans },
        { name: "flower", image: flower },
        { name: "mountain", image: mountain },
        { name: "mist", image: mist },
        { name: "mountainTree", image: mountainTree },
    ]);
    const [activeBackground, setActiveBackground] = useState(null);

    const [swiper, setSwiper] = useState(null);
    const [isItemsExtended, setIsItemsExtended] = useState(false);

    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    const resetItems = (e) => {
        if (isItemsExtended && e) e.stopPropagation();
        setIsItemsExtended(false);
        // setActiveBackground(null);
        const elements = document.querySelectorAll(".animation .swiper-slide");
        elements.forEach((element) => {
            element.classList.remove("before", "after");
        });
    };

    const extendItems = (e) => {
        const elements = document.querySelectorAll(".animation .swiper-slide");
        setIsItemsExtended(true);

        let isBefore = true;
        elements.forEach((element) => {
            if (element.classList.contains("swiper-slide-active")) {
                isBefore = false;
                setActiveBackground(element.querySelector("img").src);
            } else if (isBefore) {
                element.classList.add("before");
            } else {
                element.classList.add("after");
            }
        });
    };

    useEffect(() => {
        console.log(activeBackground);
    }, [activeBackground]);

    return (
        <section className="animation" id="animation" data-lazy-block="true">
            <div className="container">
                <h2 className="animation-title">
                    <li style={{ overflow: "hidden" }}>
                        <a data-lazy="fade-up">custom animations</a>
                    </li>
                </h2>

                {!items || !Object.keys(items).length ? (
                    <img src={preloader} width="300" />
                    ) : (
                        <div className={`swiper-custom-wrapper`}>
                        <div
                            className={`background ${isItemsExtended ? "show" : ""}`}
                            style={{ backgroundImage: `url('${activeBackground}')` }}
                        ></div>
                        <div className="swiper-custom-center">
                            <span
                                onClickCapture={resetItems}
                                className="swiper-custom-angle swiper-custom-angle-left"
                                ref={navigationPrevRef}
                            >
                                {angleLeft}
                            </span>
                            <span
                                onClickCapture={resetItems}
                                className="swiper-custom-angle swiper-custom-angle-right"
                                ref={navigationNextRef}
                            >
                                {angleRight}
                            </span>
                        </div>
                        <Swiper
                            onSwiper={setSwiper}
                            touchStartPreventDefault={false}
                            // loop={true}
                            modules={[Navigation, Pagination]}
                            spaceBetween={100}
                            initialSlide="1"
                            slidesPerView={1}
                            onSlideChange={(e) => {
                                resetItems();
                            }}
                            navigation={{
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                swiper.params.navigation.nextEl = navigationNextRef.current;
                            }}
                            pagination={{ clickable: true }}
                            centeredSlides={true}
                            // centeredSlidesBounds={true}
                            // scrollbar={{ draggable: true }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {items.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Neomorphic
                                            {...item}
                                            {...{ index, swiper, extendItems, resetItems, isItemsExtended }}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                )}
            </div>
        </section>
    );
}
