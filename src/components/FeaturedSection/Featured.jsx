import React from 'react';
import { Github, Twitter, Facebook, Instagram, Linkedin, Youtube, Slack, Figma } from 'lucide-react';

const Featured = () => {
    return (
        <div className='mt-15 bg-blue-950 py-4 overflow-hidden'>
            <div 
                className="whitespace-nowrap text-white"
                style={{
                    animation: 'marquee 20s linear infinite',
                }}
            >
                <Github className='inline-block mx-8 w-10 h-10' />
                <Twitter className='inline-block mx-8 w-10 h-10' />
                <Facebook className='inline-block mx-8 w-10 h-10' />
                <Instagram className='inline-block mx-8 w-10 h-10' />
                <Linkedin className='inline-block mx-8 w-10 h-10' />
                <Youtube className='inline-block mx-8 w-10 h-10' />
                <Slack className='inline-block mx-8 w-10 h-10' />
                <Figma className='inline-block mx-8 w-10 h-10' />
            </div>

            {/* Inline CSS for the animation */}
            <style>
                {`
                    @keyframes marquee {
                        0% { transform: translateX(100%); } /* Start from the right */
                        100% { transform: translateX(-100%); } /* Move to the left */
                    }
                `}
            </style>
        </div>
    );
};

export default Featured;