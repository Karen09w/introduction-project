import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Jason, WhyMe, SafePlace } from "..";
import localData from "../../../../localData";
import { Button } from "../../../../components";
import { useGlobalContext } from "../../../../context";
import {Completion} from '../'

export default function Branches() {
    const { communication, support } = localData.svgs;

    const { branchesSwiper, setBranchesSwiper } = useGlobalContext();

    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    return (
        <div className="branches" id="branches">
            <div className={`swiper-custom-wrapper`}>
                <Swiper
                    onSwiper={setBranchesSwiper}
                    touchStartPreventDefault={false}
                    // loop={true}
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    initialSlide="1"
                    slidesPerView={1}
                    onSlideChange={(e) => {}}
                    navigation={{
                        prevEl: [
                            document.getElementsByClassName("why-me-left-sign")[0],
                        ],
                        nextEl: [
                            document.getElementsByClassName("safe-place-right-sign")[0],
                            document.getElementsByClassName("why-me-right-sign")[0],
                        ],
                    }}
                    speed={1000}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                    // onTransitionEnd={() => {
                    //     document.querySelector(".branches .wrapper-scary").scrollTo(0, 0);
                    //     document.querySelector(".branches .wrapper-good").scrollTo(0, 0);
                    // }}
                    // pagination={{ clickable: true }}
                    centeredSlides={true}
                    // centeredSlidesBounds={true}
                    // scrollbar={{ draggable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="wrapper wrapper-scary">
                            <Jason />
                            <SafePlace />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <WhyMe />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="wrapper wrapper-good">
                            <section className="communication" id="communication" data-lazy-block="true">
                                <div className="container">
                                    <h2 className="communication-title">
                                        <li className="d-flex">
                                            <span
                                                data-lazy="fade-left"
                                                style={{ display: "inline-block", marginRight: "2rem" }}
                                            >
                                                Fast
                                            </span>
                                            <span data-lazy="fade-left">Communication</span>
                                        </li>
                                        <li className="d-flex">
                                            <span
                                                data-lazy="fade-left"
                                                style={{ display: "inline-block", marginRight: "2rem" }}
                                            >
                                                & Response
                                            </span>
                                            <span data-lazy="fade-left">Time</span>
                                        </li>
                                    </h2>
                                    <div className="communication-center">{communication}</div>
                                    {/* <Button className="communication-left-sign btn btn-primary">pref</Button> */}
                                </div>
                            </section>
                            <section className="support" id="support" data-lazy-block="true">
                                <div className="container">
                                    <h2 className="support-title">
                                        <li style={{ overflow: "hidden" }}>
                                            <a data-lazy="fade-up">Free 3 month Support </a>
                                        </li>
                                    </h2>
                                    <div className="support-center">{support}</div>
                                </div>
                            </section>
                            <Completion />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
