import React, { useState, useEffect } from "react";

export default function Neomorphic({ name, image, index, extendItems, swiper,isItemsExtended }) {
    const slideTo = (index) => swiper.slideTo(index);

    return (
        <div
            className={`neomorphic-card card ${isItemsExtended ? 'hide': ''}`}
            onClick={(e) => {
                extendItems(e);
                slideTo(index);
            }}
        >
            <img src={image} name={name} />
        </div>
    );
}
