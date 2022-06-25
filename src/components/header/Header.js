import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Button } from "../";
import localData from "../../localData";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";

export default function Header({ title, children }) {
    const { photoshop, figma, sketch, xd } = localData.images;
    const { fade } = useGlobalContext().animations;
    return (
        <motion.header {...fade} className="hero" id="home" data-lazy-block="true">
            <Navbar />
            <div className="container">
                <div className="hero-center">
                    <div className="icons" data-lazy='fade-hide'>
                        <img src={photoshop} alt="photoshop" />
                        <img src={xd} alt="xd" />
                        <img src={figma} alt="figma" />
                        <img src={sketch} alt="sketch" />
                    </div>
                    <h1 className="hero-title"  data-lazy='fade-hide'>html conversion</h1>

                    <div>
                        <h3 className="hero-subtitle"  data-lazy='fade-hide'>fully responsive</h3>
                        <h3 className="hero-subtitle"  data-lazy='fade-hide'>seo friendly markup</h3>
                        <h3 className="hero-subtitle"  data-lazy='fade-hide'>friendly support and service</h3>
                    </div>
                    <h1 className="hero-title-secondary">
                        <span data-lazy='fade'>hi there!</span>
                        <span data-lazy='fade'>my name is Karen </span>
                        <span data-lazy='fade'>and this is my gig</span>
                        <span data-lazy='fade'>of html conversion</span>
                        <span data-lazy='fade' className="color-success">let's start</span>
                    </h1>
                </div>
            </div>
        </motion.header>
    );
}
