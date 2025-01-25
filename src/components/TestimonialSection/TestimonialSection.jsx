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
                    className=""
                >
                    {/* Testimonial Slide 1 */}
                    <SwiperSlide className="">
                        <div className="p-4 m-4">
                            <div className="text-center p-10 border-white bg-blue-950 shadow-md rounded-lg">
                                <p className="text-sm text-white italic p-7">
                                    "We needed everything from website design, content creation, and digital marketing for our business. We decided to go with Pixmatech because we realized how comprehensive their services are, along with a pool of professionals who excel in their areas. Once the Pixmatech team took over, I never had to worry about my 'startup' anymore, thanks to them."
                                </p>
                                <div className="flex items-center justify-center mt-4">
                                    <div>
                                        <h3 className="text-lg text-white font-semibold mt-4">Imran Chowdhury</h3>
                                        <p className="text-sm text-white">Managing Director, Green Valley Foods</p>
                                    </div>
                                    <div>
                                        <img className=" w-36 p-8 ml-96" src="/design.png" alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="p-4 m-4">
                            <div className="text-center p-10 border-white bg-blue-950 shadow-md rounded-lg">
                                <p className="text-sm text-white italic p-7">
                                    "We needed everything from website design, content creation, and digital marketing for our business. We decided to go with Pixmatech because we realized how comprehensive their services are, along with a pool of professionals who excel in their areas. Once the Pixmatech team took over, I never had to worry about my 'startup' anymore, thanks to them."
                                </p>
                                <div className="flex items-center justify-center mt-4">
                                    <div>
                                        <h3 className="text-lg text-white font-semibold mt-4">Imran Chowdhury</h3>
                                        <p className="text-sm text-white">Managing Director, Green Valley Foods</p>
                                    </div>
                                    <div>
                                        <img className=" w-36 p-8 ml-96" src="/design.png" alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="p-4 m-4">
                            <div className="text-center p-10 border-white bg-blue-950 shadow-md rounded-lg">
                                <p className="text-sm text-white italic p-7">
                                    "We needed everything from website design, content creation, and digital marketing for our business. We decided to go with Pixmatech because we realized how comprehensive their services are, along with a pool of professionals who excel in their areas. Once the Pixmatech team took over, I never had to worry about my 'startup' anymore, thanks to them."
                                </p>
                                <div className="flex items-center justify-center mt-4">
                                    <div>
                                        <h3 className="text-lg text-white font-semibold mt-4">Imran Chowdhury</h3>
                                        <p className="text-sm text-white">Managing Director, Green Valley Foods</p>
                                    </div>
                                    <div>
                                        <img className=" w-36 p-8 ml-96" src="/design.png" alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="p-4 m-4">
                            <div className="text-center p-10 border-white bg-blue-950 shadow-md rounded-lg">
                                <p className="text-sm text-white italic p-7">
                                    "We needed everything from website design, content creation, and digital marketing for our business. We decided to go with Pixmatech because we realized how comprehensive their services are, along with a pool of professionals who excel in their areas. Once the Pixmatech team took over, I never had to worry about my 'startup' anymore, thanks to them."
                                </p>
                                <div className="flex items-center justify-center mt-4">
                                    <div>
                                        <h3 className="text-lg text-white font-semibold mt-4">Imran Chowdhury</h3>
                                        <p className="text-sm text-white">Managing Director, Green Valley Foods</p>
                                    </div>
                                    <div>
                                        <img className=" w-36 p-8 ml-96" src="/design.png" alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className="p-4 m-4">
                            <div className="text-center p-10 border-white bg-blue-950 shadow-md rounded-lg">
                                <p className="text-sm text-white italic p-7">
                                    "We needed everything from website design, content creation, and digital marketing for our business. We decided to go with Pixmatech because we realized how comprehensive their services are, along with a pool of professionals who excel in their areas. Once the Pixmatech team took over, I never had to worry about my 'startup' anymore, thanks to them."
                                </p>
                                <div className="flex items-center justify-center mt-4">
                                    <div>
                                        <h3 className="text-lg text-white font-semibold mt-4">Imran Chowdhury</h3>
                                        <p className="text-sm text-white">Managing Director, Green Valley Foods</p>
                                    </div>
                                    <div>
                                        <img className=" w-36 p-8 ml-96" src="/design.png" alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    );
};

export default TestimonialSection;