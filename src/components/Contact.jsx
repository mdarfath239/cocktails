import { openingHours, socials } from '../constants/index.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: "power1.inOut"
        })

        timeline
            .from('#contact h2', {
                opacity: 0, y: 50, duration: 1
            })
            .from('.contact-section', {
                opacity: 0, y: 30, stagger: 0.2, duration: 0.8
            })
            .from('#f-right-leaf', {
                x: 50, opacity: 0, duration: 1
            }, "-=1")
            .from('#f-left-leaf', {
                x: -50, opacity: 0, duration: 1
            }, "<")

    })

    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
            <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

            <div className="content">
                <h2>Where to Find Us</h2>

                <div className="contact-grid">
                    <div className="contact-section">
                        <h3 className='text-3xl font-bold'>VISIT OUR BAR</h3>
                        <p className='text-xl font-bold'>45, Raq Blvd. #404, Bangalore, CA 90210</p>
                    </div>

                    <div className="contact-section">
                        <h3 className='text-3xl font-bold'>CONTACT US</h3>
                        <p className='text-xl font-bold'>(+91) 9999999999</p>
                        <p className='text-xl font-bold'>hello@jsmcocktail.com</p>
                    </div>

                    <div className="contact-section">
                        <h3 className='text-3xl font-bold'>OPEN EVERY DAY</h3>
                        {openingHours.map((time) => (
                            <p key={time.day} className='text-xl font-bold'>
                                {time.day} : {time.time}
                            </p>
                        ))}
                    </div>

                    <div className="contact-section">
                        <h3 className='text-3xl font-bold'>SOCIALS</h3>
                        <div className="flex-center gap-5">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                >
                                    <img src={social.icon} alt={social.name} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact
