import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { cocktails } from '../constants/index.js';
import './Cocktails.css';

const Cocktails = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % cocktails.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + cocktails.length) % cocktails.length);
    };

    const handleSelect = (index) => {
        setActiveIndex(index);
    };

    useGSAP(() => {
        // Animate image and text when activeIndex changes
        gsap.fromTo(imageRef.current,
            { opacity: 0, y: 20, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" }
        );
        gsap.fromTo(textRef.current,
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.5, delay: 0.1, ease: "power2.out" }
        );
    }, [activeIndex]);

    const activeCocktail = cocktails[activeIndex];

    return (
        <section id="cocktails" className="cocktails-section">
            <div className="cocktails-nav">
                {cocktails.map((cocktail, index) => (
                    <button
                        key={cocktail.id}
                        className={`nav-item ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => handleSelect(index)}
                    >
                        {cocktail.name}
                    </button>
                ))}
            </div>

            <div className="cocktails-content">
                <div className="nav-arrow left" onClick={handlePrev}>
                    <img src="/public/images/left-arrow.png" alt="Previous" />
                    <span>{cocktails[(activeIndex - 1 + cocktails.length) % cocktails.length].name.split(' ').map((word, i) => <span key={i} className="block">{word}</span>)}</span>
                </div>

                <div className="cocktail-display">
                    <img
                        ref={imageRef}
                        src={activeCocktail.image}
                        alt={activeCocktail.name}
                        className="cocktail-image"
                    />
                </div>

                <div className="nav-arrow right" onClick={handleNext}>
                    <span>{cocktails[(activeIndex + 1) % cocktails.length].name.split(' ').map((word, i) => <span key={i} className="block">{word}</span>)}</span>
                    <img src="/public/images/right-arrow.png" alt="Next" />
                </div>

                <div className="cocktail-info" ref={textRef}>
                    <h2 className="highlight-text">{activeCocktail.highlight}</h2>
                    <p className="description-text">{activeCocktail.description}</p>
                </div>

                <div className="recipe-label">
                    <p>Recipe for:</p>
                    <h3 className="recipe-name">{activeCocktail.name}</h3>
                </div>
            </div>
        </section>
    );
};

export default Cocktails;
