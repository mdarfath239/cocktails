import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Hero.css';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const videoRef = useRef(null);
    const isMobile = window.innerWidth < 768;

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 0.5 });

        // Animate MOJITO text (Word effect - sliding up)
        tl.from(".mojito-text", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out"
        });

        // Animate Details Right (Line effect - staggering children)
        tl.from(".details-right > *", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=1.0"); // Overlap with title animation

        // Optional: Animate Details Left for balance
        tl.from(".details-left > *", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        }, "<");

        // Video Scrubbing Animation
        const startValue = isMobile ? "top 50%" : "center 60%";

        let videoTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-video",
                start: startValue,
                endTrigger: "#price",
                end: "bottom bottom",
                scrub: true,
                pin: true,
            },
        });

        if (videoRef.current) {
            videoRef.current.onloadedmetadata = () => {
                videoTl.to(videoRef.current, {
                    currentTime: videoRef.current.duration,
                });
            };
        }
    }, { scope: ".hero" });

    return (
        <section className="hero" id="hero">
            <div className="hero-background">
                <div className="noise-overlay"></div>
            </div>

            {/* Leaves positioned relative to viewport */}
            <img src="/public/images/hero-left-leaf.png" alt="" className="leaf leaf-left" />
            <img src="/public/images/hero-right-leaf.png" alt="" className="leaf leaf-right" />

            <div className="hero-content">
                <div className="hero-main-text">
                    <h1 className="mojito-text">
                        MOJITO
                    </h1>
                </div>

                <div className="hero-visuals">
                    <video
                        ref={videoRef}
                        src="/public/videos/output.mp4"
                        muted
                        playsInline
                        className="hero-video"
                    />
                </div>

                <div className="hero-details">
                    <div className="scroll-indicator">
                        <a href="#price">
                            <img src="/public/images/arrow.png" alt="Scroll down" />
                        </a>
                    </div>
                    <div className="details-left">
                        <span className="tagline-small">Cool. Crisp. Classic.</span>
                        <h2 className="tagline-main">Sip the Spirit<br />of Summer</h2>
                    </div>

                    <div className="details-right">
                        <p className="description">
                            Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.
                        </p>
                        <a href="#cocktails" className="view-cocktails">View cocktails</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
