"use-client";

import React from 'react';

const ServicesSection = () => {
    return (
        <div className='mt-10 w-full h-full py-10'>
            <div className='mx-auto max-w-5xl px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div>
                        <img className='w-30 h-35 md:w-40 bg-transparent' src="/services.png" alt="Case Study" />
                        <h1 className='text-2xl font-bold mb-2 ml-5'>Services</h1>
                    </div>
                    <p className='md:mt-0 text-sm md:text-xl text-gray-700 max-w-2xl mt-8'>
                        From web development to digital marketing, we specialize in every aspect of building and elevating your business’s online presence.
                    </p>
                </div>
            </div>

            <div className='mx-auto max-w-5xl px-4'>
                <div className='mt-5'>
                    <section className='space-y-6'>
                        {/* Section 1 */}
                        <div className='flex flex-col md:flex-row justify-between gap-6'>
                            {/* Card 1 */}
                            <div className='flex justify-between items-center border-2 p-6 rounded-lg w-full md:w-1/3 bg-gray-200'>
                                <h1 className='text-lg font-semibold'>Web Development</h1>
                                <img className='w-10 h-10' src="/webdev.jpg" alt="Web Development" />
                            </div>

                            {/* Nested Cards */}
                            <div className='flex flex-col gap-6 w-full md:w-1/3'>
                                <div className='flex justify-between items-center border-2 p-6 rounded-lg bg-gray-200'>
                                    <h1 className='text-lg font-semibold'>Paid Advertisement</h1>
                                    <img className='w-10 h-10' src="/paid adv.png" alt="Paid Advertisement" />
                                </div>
                                <div className='flex justify-between items-center border-2 p-6 rounded-lg bg-gray-200'>
                                    <h1 className='text-lg font-semibold'>Brand Development</h1>
                                    <img className='w-10 h-10' src="/brand dev.png" alt="Brand Development" />
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className='flex justify-between items-center border-2 p-6 rounded-lg w-full md:w-1/3 bg-gray-200'>
                                <h1 className='text-lg font-semibold'>Digital Marketing</h1>
                                <img className='w-10 h-10' src="/digital mart.png" alt="Digital Marketing" />
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className='flex flex-col md:flex-row justify-between gap-6'>
                            {/* Card 1 */}
                            <div className='flex justify-between items-center border-2 p-6 rounded-lg w-full md:w-1/3 bg-gray-200'>
                                <h1 className='text-lg font-semibold'>App Development</h1>
                                <img className='w-10 h-10' src="/app dev.png" alt="App Development" />
                            </div>

                            {/* Nested Cards */}
                            <div className='flex flex-col gap-6 w-full md:w-1/3'>
                                <div className='flex justify-between items-center border-2 p-6 rounded-lg bg-gray-200'>
                                    <h1 className='text-lg font-semibold'>Search Engine Optimization</h1>
                                    <img className='w-10 h-10' src="/seo opt.png" alt="Search Engine Optimization" />
                                </div>
                                <div className='flex justify-between items-center border-2 p-6 rounded-lg bg-gray-200'>
                                    <h1 className='text-lg font-semibold'>Social Media Marketing</h1>
                                    <img className='w-10 h-10' src="/smm mart.png" alt="Social Media Marketing" />
                                </div>
                            </div>

                            {/* Nested Cards */}
                            <div className='flex flex-col gap-6 w-full md:w-1/3'>
                                <div className='flex justify-between items-center border-2 p-6 rounded-lg bg-gray-200'>
                                    <h1 className='text-lg font-semibold'>Email & SMS Marketing</h1>
                                    <img className='w-10 h-15' src="/es mart.png" alt="Search Engine Marketing" />
                                </div>
                                <div className='flex justify-between items-center border-2 p-6 rounded-lg bg-gray-200'>
                                    <h1 className='text-lg font-semibold'>Search Engine Marketing</h1>
                                    <img className='w-10 h-10' src="/seo mart.png" alt="Content Marketing" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;