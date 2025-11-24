import React from 'react';
import './Price.css';

const Price = () => {
    return (
        <section className="price-section" id="price">
            <div className="price-content">
                {/* Left Column: Cocktails */}
                <div className="menu-column left-column">
                    <h3 className="menu-heading">Most popular cocktails:</h3>
                    <ul className="menu-list">
                        <li className="menu-item">
                            <div className="item-header">
                                <span className="item-name">Chapel Hill Shiraz</span>
                                <span className="item-price">– $10</span>
                            </div>
                            <span className="item-detail">AU | Bottle</span>
                        </li>
                        <li className="menu-item">
                            <div className="item-header">
                                <span className="item-name">Caten Malbee</span>
                                <span className="item-price">– $49</span>
                            </div>
                            <span className="item-detail">AU | Bottle</span>
                        </li>
                        <li className="menu-item">
                            <div className="item-header">
                                <span className="item-name">Rhino Pale Ale</span>
                                <span className="item-price">– $20</span>
                            </div>
                            <span className="item-detail">CA | 750 ml</span>
                        </li>
                        <li className="menu-item">
                            <div className="item-header">
                                <span className="item-name">Irish Guinness</span>
                                <span className="item-price">– $29</span>
                            </div>
                            <span className="item-detail">IE | 600 ml</span>
                        </li>
                    </ul>
                </div>

                {/* Center Column: Video Placeholder */}
                <div className="center-column">
                    {/* The video from Hero section will visually land here */}
                </div>

                {/* Right Column: Mocktails */}
                <div className="menu-column right-column">
                    <h3 className="menu-heading">Most loved mocktails:</h3>
                    <ul className="menu-list">
                        <li className="menu-item">
                            <div className="item-header">
                                <span className="item-name">Tropical Bloom</span>
                                <span className="item-price">– $10</span>
                            </div>
                            <span className="item-detail">US | Bottle</span>
                        </li>
                        <li className="menu-item">
                            <div className="item-header">
                                <span className="item-name">Passionfruit Mint</span>
                                <span className="item-price">– $49</span>
                            </div>
                            <span className="item-detail">US | Bottle</span>
                        </li>
                        <li className="menu-item">
                            <div className="item-header">
                                <span className="item-name">Citrus Glow</span>
                                <span className="item-price">– $20</span>
                            </div>
                            <span className="item-detail">CA | 750 ml</span>
                        </li>
                        <li className="menu-item">
                            <div className="item-header">
                                <span className="item-name">Lavender Fizz</span>
                                <span className="item-price">– $29</span>
                            </div>
                            <span className="item-detail">IE | 600 ml</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Decorative Leaves */}
            <img src="/public/images/hero-left-leaf.png" alt="" className="price-leaf leaf-bottom-left" />
            <img src="/public/images/hero-right-leaf.png" alt="" className="price-leaf leaf-bottom-right" />
        </section>
    );
};

export default Price;
