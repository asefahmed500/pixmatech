"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const TestimonialSection = () => {
    return (
        <div className="mt-10 bg-gray-200 w-full py-10">
            <div className="mx-auto max-w-5xl px-4">
                <Swiper
                    spaceBetween={30} // Space between slides
                    centeredSlides={true} // Center the active slide
                    autoplay={{
                        delay: 2500, // Delay between slide transitions in milliseconds
                        disableOnInteraction: false, // Continue autoplay after user interaction
                    }}
                    pagination={{
                        clickable: true, // Enable clickable pagination dots
                    }}
                    navigation={true} // Add navigation arrows
                    modules={[Autoplay, Pagination, Navigation]} // Add required modules
                    className="mySwiper"
                >
                    {/* Testimonial Slide 1 */}
                    <SwiperSlide>
                        <div className="p-4">
                            <div className="text-center p-6 sm:p-10 border-white bg-blue-950 shadow-md rounded-lg">
                                <p className="text-sm sm:text-base text-white italic p-4 sm:p-7">
                                    "We needed everything from website design, content creation, and digital marketing for our business. We decided to go with Pixmatech because we realized how comprehensive their services are, along with a pool of professionals who excel in their areas. Once the Pixmatech team took over, I never had to worry about my 'startup' anymore, thanks to them."
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center mt-4">
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-lg text-white font-semibold mt-4">Imran Chowdhury</h3>
                                        <p className="text-sm text-white">Managing Director, Green Valley Foods</p>
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:ml-8">
                                        <img className="w-24 sm:w-36 p-4 sm:p-8" src="/design.png" alt="Design" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Testimonial Slide 2 */}
                    <SwiperSlide>
                        <div className="p-4">
                            <div className="text-center p-6 sm:p-10 border-white bg-blue-950 shadow-md rounded-lg">
                                <p className="text-sm sm:text-base text-white italic p-4 sm:p-7">
                                    "We needed everything from website design, content creation, and digital marketing for our business. We decided to go with Pixmatech because we realized how comprehensive their services are, along with a pool of professionals who excel in their areas. Once the Pixmatech team took over, I never had to worry about my 'startup' anymore, thanks to them."
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center mt-4">
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-lg text-white font-semibold mt-4">Imran Chowdhury</h3>
                                        <p className="text-sm text-white">Managing Director, Green Valley Foods</p>
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:ml-8">
                                        <img className="w-24 sm:w-36 p-4 sm:p-8" src="/design.png" alt="Design" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Testimonial Slide 3 */}
                    <SwiperSlide>
                        <div className="p-4">
                            <div className="text-center p-6 sm:p-10 border-white bg-blue-950 shadow-md rounded-lg">
                                <p className="text-sm sm:text-base text-white italic p-4 sm:p-7">
                                    "We needed everything from website design, content creation, and digital marketing for our business. We decided to go with Pixmatech because we realized how comprehensive their services are, along with a pool of professionals who excel in their areas. Once the Pixmatech team took over, I never had to worry about my 'startup' anymore, thanks to them."
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center mt-4">
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-lg text-white font-semibold mt-4">Imran Chowdhury</h3>
                                        <p className="text-sm text-white">Managing Director, Green Valley Foods</p>
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:ml-8">
                                        <img className="w-24 sm:w-36 p-4 sm:p-8" src="/design.png" alt="Design" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Add more slides as needed */}
                </Swiper>
            </div>
        </div>
    );
};

export default TestimonialSection;