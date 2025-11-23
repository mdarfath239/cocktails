import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <div className="noise-overlay"></div>
            </div>

            {/* Leaves positioned relative to viewport */}
            <img src="/public/images/hero-left-leaf.png" alt="" className="leaf leaf-left" />
            <img src="/public/images/hero-right-leaf.png" alt="" className="leaf leaf-right" />

            <div className="hero-content">
                <div className="hero-main-text">
                    <h1 className="mojito-text">MOJITO</h1>
                </div>

                <div className="hero-visuals">

                    {/* Floating elements removed */}
                </div>

                <div className="hero-details">
                    <div className="details-left">
                        <span className="tagline-small">Cool. Crisp. Classic.</span>
                        <h2 className="tagline-main">Sip the Spirit<br />of Summer</h2>
                    </div>

                        <div className="scroll-indicator">
                            <img src="/public/images/arrow.png" alt="Scroll down" />
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
