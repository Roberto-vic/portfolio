/**
 * @copyright 2024 - All rights reserved Roberto Vicari
 * @license Apache-2.0 License
 */

/**
 * Components
 */
import ReviewCard from "./ReviewCard";


/**
 * Node module 
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Initialize gsap and ScrollTrigger
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


const reviews = [
    {
        content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
        name: 'Sophia Ramirez',
        imgSrc: './images/people-1.jpg',
        company: 'PixelForge'
    },
    {
        content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
        name: 'Ethan Caldwell',
        imgSrc: './images/people-2.jpg',
        company: 'NexaWave'
    },
    {
        content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
        name: 'Liam Bennett',
        imgSrc: './images/people-3.jpg',
        company: 'CodeCraft'
    },
    {
        content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
        name: 'Noah Williams',
        imgSrc: './images/people-4.jpg',
        company: 'BrightWeb'
    },
    {
        content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
        name: 'Ava Thompson',
        imgSrc: './images/people-5.jpg',
        company: 'TechMosaic'
    },
    {
        content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
        name: 'Jonathan',
        imgSrc: './images/people-6.jpg',
        company: 'Skyline Digital'
    }
];

const Review = () => {

    useGSAP(() => {
        gsap.to('.scrub-slide', {
            scrollTrigger: {
                trigger: '.scrub-slide',
                start: '-200% 80%',
                end:'400% 80%',
                scrub: true
            },
            x: '-1000'
        })
    });

    return (
        <section
            id="reviews"
            className="section overflow-hidden "
        >
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up ">
                    What people say
                </h2>

                <div className="flex items-stretch gap-4 scrub-slide ">
                    {reviews.map(({ content, name, imgSrc, company }, key) => (
                        <ReviewCard
                            key={key}
                            name={name}
                            imgSrc={imgSrc}
                            company={company}
                            content={content}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Review