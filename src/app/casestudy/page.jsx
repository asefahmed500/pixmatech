import Footer from '@/components/Footer/Footer';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/ui/NavBar/NavBar';
import React from 'react';

const Page = () => {
    const restaurants = [
        { name: "Restaurant Landing Page", role: "Discover how we crafted this project." },
        { name: "Restaurant Landing Page", role: "Discover how we crafted this project." },
        { name: "Restaurant Landing Page", role: "Discover how we crafted this project." },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-grow">
                {/* Hero Section */}
                <div
                    className="hero min-h-[50vh]"
                    style={{ backgroundImage: "url(/bgimage.jpg)" }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl md:text-5xl font-bold">Case Study</h1>
                            <p className="mb-5 text-lg md:text-xl">Explore How We’ve Transformed Brands</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12 mt-10 md:mt-20">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Section Title and Buttons */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-4 md:mb-0">
                            Case Study
                        </h1>
                        <div className="flex flex-wrap gap-2 md:gap-4">
                            {["Designer", "Developer", "QA Engineer", "DevOps"].map((role) => (
                                <button
                                    key={role}
                                    className="btn rounded-full px-4 md:px-6 py-2 bg-gray-200 hover:bg-gray-300 transition duration-300 text-sm md:text-base"
                                >
                                    {role}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Restaurants Grid */}
                    <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {restaurants.map((restaurant, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundImage: "url(/res.jpg)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                                className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                <h2 className="text-lg md:text-xl bg-white rounded-sm text-black font-bold mb-2">{restaurant.name}</h2>
                                <p className="text-sm md:text-base text-black bg-white rounded-sm">{restaurant.role}</p>
                                <Button className="mt-3 md:mt-4">Explore More</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Page;