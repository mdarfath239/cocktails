import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { featureLists, goodLists } from '../constants/index.js';
import './Art.css';

const Art = () => {
    useGSAP(() => {
        const isMobile = window.innerWidth < 768;
        const start = isMobile ? 'top 20%' : 'top top';

        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true
            }
        });

        maskTimeline
            .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut', })
            .to('.masked-img', {
                scale: 1.3,
                maskPosition: 'center',
                maskSize: '400%',
                webkitMaskPosition: 'center',
                webkitMaskSize: '400%',
                duration: 1,
                ease: 'power1.inOut'
            })
            .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut' });
    });

    return (
        <div id="art" className="art-section">
            <div className="container mx-auto h-full pt-20 relative">
                <h2 className="will-fade art-title">The ART</h2>

                <div className="content art-content-grid">
                    <ul className="space-y-4 will-fade list-left">
                        {goodLists.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 feature-item">
                                <img src="/images/check.png" alt="check" className="check-icon" />
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="cocktail-img-container">
                        <img
                            src="/images/under-img.jpg"
                            alt="cocktail"
                            className="abs-center masked-img size-full object-contain"
                        />
                    </div>

                    <ul className="space-y-4 will-fade list-right">
                        {featureLists.map((feature, index) => (
                            <li key={index} className="flex items-center justify-start gap-2 feature-item">
                                <img src="/images/check.png" alt="check" className="check-icon" />
                                <p className="md:w-fit w-60">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="masked-container">
                    <div id="masked-content">
                        <h3>Made with Craft  Poured with Passion</h3>
                        <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Art;
