"use client"
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
    const words = [
        "Digital Marketing",
        "Web Development and Branding",
        "App Development",
        "SEO and Paid Advertisement",
        "Brand Development",
        "Social Media Marketing",
        "Email & SMS Marketing",
        "Search Engine Marketing",
            
    ];

    const [currentWord, setCurrentWord] = useState(words[0]);
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true); // Controls fade animation

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fade out
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % words.length);
                setFade(true); // Start fade in
            }, 500); // Wait for fade out to complete before changing word
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(interval);
    }, [words.length]);

    useEffect(() => {
        setCurrentWord(words[index]);
    }, [index, words]);

    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(/bgimage.jpg)",
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md mt-10 ml-[-200px]">
                        <h1 className="mb-5 text-5xl font-bold text-left">
                            Rethink Your Brands’ Approach to{" "}
                            <span
                                className={`transition-opacity font-bold text-green-700 text-5xl duration-500 ${
                                    fade ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                {currentWord}
                            </span>
                        </h1>
                        <button className="btn btn-outline bg-white text-black mt-4 ml-[-300px]">
                            Lets Work Together
                        </button>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default HeroSection;