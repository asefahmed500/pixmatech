'use client';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const CaseStudySection = () => {
    return (
        <div className='mt-10 bg-gray-100 w-full h-full py-10'>
            <div className='mx-auto max-w-5xl px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <img className='w-30 h-35 md:w-40 bg-transparent' src="/csstudy.png" alt="Case Study" />
                    <p className='mt-20 md:mt-0 text-lg md:text-xl text-gray-700 max-w-2xl'>
                        Every campaign needs its own approach. Explore our work to see the tangible results of our innovative strategies and methodical execution.
                    </p>
                </div>
            </div>

            <div>
                <Swiper
                    className='mt-20 mx-auto max-w-5xl'
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img src="/image1.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/image2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/image3.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/image4.jpg" alt="" /></SwiperSlide>

                  
                </Swiper>
            </div>
            <div className="flex justify-end mt-6 mx-auto max-w-5xl">
                <button className="px-6 py-2 bg-white-600 text-black text-sm font-medium rounded hover:bg-blue-700">See All →</button>
            </div>
        </div>
    );
};

export default CaseStudySection;