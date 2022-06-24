import React,{useEffect} from "react";
import { Home, About, Error } from "./pages";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import FadeOnScreen from "./utils/fadeOnScreen.js";

export default function App() {
    const location = useLocation();

  

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </AnimatePresence>
    );
}
