import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import localData from "../../localData";
import { Button } from "../../components";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";

export default function Navbar() {
    const location = useLocation();

    const {branchesSwiper} = useGlobalContext()

    const { togglerIcon, telegram } = localData.svgs;

    // COLLAPSE
    let navbarCollapse = useRef();
    const [isCollapsing, setIsCollapsing] = useState(false);
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        if (!isCollapsing) return;
        setIsShown(!isShown);
    }, [isCollapsing]);

    const getHeight = () => {
        let computedHeight = null;
        [...navbarCollapse.current.children].forEach((each) => (computedHeight += getAbsoluteHeight(each)));
        return computedHeight + "px";
    };

    const getAbsoluteHeight = (el) => {
        el = typeof el === "string" ? document.querySelector(el) : el;

        let styles = window.getComputedStyle(el);
        let margin = parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);
        let border = parseFloat(styles["borderTop"]) + parseFloat(styles["borderBottom"]);

        return Math.ceil(el.offsetHeight + margin + border);
    };
    //

    // DROPDOWN
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleDropdown = (e) => {
        e.stopPropagation();
        let acitve = e.currentTarget.dataset.target;
        acitve = acitve == activeDropdown ? null : acitve;
        setActiveDropdown(acitve);
        window.addEventListener("click", () => setActiveDropdown(null), { once: true });
    };
    //

    return (
        <nav className="navbar">
            <Link className="navbar-brand" to="/">
                <img src="./favicon.png" alt="brand" />
            </Link>

            <ul className="navbar-nav">
                <a className="nav-item" href="#home">
                    <div className="nav-link">home</div>
                    <span className="dot"></span>
                </a>

                <a className="nav-item" href="#track" >
                    <div className="nav-link">track</div>
                    <span className="dot"></span>
                </a>

                <a className="nav-item" href="#service">
                    <div className="nav-link">service</div>
                    <span className="dot"></span>
                </a>

                <a className="nav-item" href="#responsive">
                    <div className="nav-link">responsive</div>
                    <span className="dot"></span>
                </a>
                <a className="nav-item" href="#pixel-perfect">
                    <div className="nav-link">pixel perfect</div>
                    <span className="dot"></span>
                </a>

                <a className="nav-item" href="#compatible">
                    <div className="nav-link">compatibility</div>
                    <span className="dot"></span>
                </a>

                <a className="nav-item" href="#seo">
                    <div className="nav-link">seo</div>
                    <span className="dot"></span>
                </a>

                <a className="nav-item" href="#wrong-section">
                    <div className="nav-link">wrong section</div>
                    <span className="dot"></span>
                </a>

                <a className="nav-item" href="#animation">
                    <div className="nav-link">animations</div>
                    <span className="dot"></span>
                </a>
                <a className="nav-item" href="#branches" onClick={()=>branchesSwiper.slideTo('1')}>
                    <div className="nav-link">why me</div>
                    <span className="dot"></span>
                </a>
                <a className="nav-item" href="#jason" onClick={()=>branchesSwiper.slideTo('0')}>
                    <div className="nav-link">jason</div>
                    <span className="dot"></span>
                </a>
                <a className="nav-item" href="#safe-place" onClick={()=>branchesSwiper.slideTo('0')}>
                    <div className="nav-link">safe place</div>
                    <span className="dot"></span>
                </a>
                <a className="nav-item" href="#communication"  onClick={()=>branchesSwiper.slideTo('3')}>
                    <div className="nav-link">communication</div>
                    <span className="dot"></span>
                </a>
                <a className="nav-item" href="#support"  onClick={()=>branchesSwiper.slideTo('3')}>
                    <div className="nav-link">support</div>
                    <span className="dot"></span>
                </a>
                <a className="nav-item" href="#completion"  onClick={()=>branchesSwiper.slideTo('3')}>
                    <div className="nav-link">completion</div>
                    <span className="dot"></span>
                </a>
            </ul>
        </nav>
    );
}
