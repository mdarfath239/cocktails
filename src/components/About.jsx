import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

const About = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

    useGSAP(() => {
        const titleSplit = new SplitText('#about h2', {
            type: 'words'
        });

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center'
            }
        });

        scrollTimeline
            .from(titleSplit.words, {
                opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
            })
            .from('.top-grid div, .bottom-grid div', {
                opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
            }, '-=0.5');
    }, { scope: "#about" });

    return (
        <div id="about" className="about-section">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-header">
                        <p className="badge">Best Cocktails</p>
                        <h2 className="about-title">
                            Where every detail matters <span className="text-white">-</span>
                            from muddle to garnish
                        </h2>
                    </div>

                    <div className="about-sub-content">
                        <p className="about-text">
                            Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
                        </p>

                        <div className="about-stats">
                            <p className="stat-number">
                                <span>4.5</span>/5
                            </p>
                            <p className="stat-label">
                                More than +12000 customers
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-grid top-grid">
                <div className="grid-item span-3">
                    <div className="noisy" />
                    <img src="/public/images/abt1.png" alt="grid-img-1" />
                </div>

                <div className="grid-item span-6">
                    <div className="noisy" />
                    <img src="/public/images/abt2.png" alt="grid-img-2" />
                </div>

                <div className="grid-item span-3">
                    <div className="noisy" />
                    <img src="/public/images/abt5.png" alt="grid-img-5" />
                </div>
            </div>

            <div className="about-grid bottom-grid">
                <div className="grid-item span-8">
                    <div className="noisy" />
                    <img src="/public/images/abt3.png" alt="grid-img-3" />
                </div>

                <div className="grid-item span-4">
                    <div className="noisy" />
                    <img src="/public/images/abt4.png" alt="grid-img-4" />
                </div>
            </div>

        </div>
    );
}
export default About;
