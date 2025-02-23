/**
 * @copyright 2024 - All rights reserved Roberto Vicari
 * @license Apache-2.0 License
 */

/**
 * Node module 
 */
import { ReactLenis } from 'lenis/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import React, { useState, useEffect } from 'react';

/**
 * Initialize gsap and ScrollTrigger
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/Privacy_Policy";


const App = () => {
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

    const initializeAnimations = () => {
        const elements = gsap.utils.toArray('.reveal-up');
        elements.forEach((element) => {
            gsap.fromTo(element,
                { y: 100, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: element,
                        start: '-200 bottom',
                        end: 'bottom 80%',
                        scrub: true
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                }
            );
        });
    };

    useEffect(() => {
        if (!showPrivacyPolicy) {
            initializeAnimations();
        }
    }, [showPrivacyPolicy]);

    const handleShowPrivacyPolicy = () => {
        setShowPrivacyPolicy(true);
    };

    const handleShowPortfolio = () => {
        window.location.href('/');
        setShowPrivacyPolicy(false);
    };

    return (
        <ReactLenis root>
            <Header />
            <main>
                {showPrivacyPolicy ? (
                    <PrivacyPolicy onShowPortfolio={handleShowPortfolio} />
                ) : (
                    <>
                        <Hero />
                        <About />
                        <Skill />
                        <Work />
                        <Contact />
                    </>
                )}
            </main>
            <Footer onShowPrivacyPolicy={handleShowPrivacyPolicy} />
        </ReactLenis>
    );
}

export default App;