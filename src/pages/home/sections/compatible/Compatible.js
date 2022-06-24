import React,{useState} from 'react'
import localData from '../../../../localData';
import { BrowserCard } from '../../../../components';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

export default function Compatible() {

    const { angleLeft, angleRight } = localData.svgs;

    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    const {  uncompatible, compatible, funeral,preloader } = localData.images;
    const [browsers, setBrowsers] = useState([
        { name: "uncompatible", image: uncompatible , className: 'emoji emoji-bad'},
        { name: "compatible", image: compatible, className: 'emoji emoji-good' },
        { name: "funeral", image: funeral, className: 'emoji emoji-bad' },
    ]);
  return (
    <section className="compatible" id="compatible" data-lazy-block="true">
    <div className="container">
        <h2 className="compatible-title mb-4">
            <li style={{ overflow: "hidden" }}>
                <a data-lazy="fade-up">Cross Browser </a>
            </li>
        </h2>
        <div className="compatible-center">
      
              {!browsers || !Object.keys(browsers).length ? (
                <img src={preloader} width="300" />
            ) : (
                <div className="swiper-custom-wrapper">
                    <div className="swiper-custom-center">
                        <span className="swiper-custom-angle swiper-custom-angle-left" ref={navigationPrevRef}>
                            {angleLeft}
                        </span>
                        <span className="swiper-custom-angle swiper-custom-angle-right" ref={navigationNextRef}>
                            {angleRight}
                        </span>
                    </div>
                    <Swiper
                        touchStartPreventDefault={false}
                        // loop={true}
                        modules={[Navigation, Pagination]}
                        spaceBetween={ 30}
                        slidesPerView={1}
                        onSlideChange={(e) =>console.log('slide changed')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        speed={1000}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        breakpoints={  {
                                640: {
                                    slidesPerView: 1,
                                }, 
                            }
                        }
                    >
                        {browsers.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <BrowserCard {...item} index={index}/>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            )}
            <h2 className="compatible-title">
                <li style={{ overflow: "hidden", textAlign: "right" }}>
                    <a data-lazy="fade-up">Compatible</a>
                </li>
            </h2>
        </div>
    </div>
</section>
  )
}
