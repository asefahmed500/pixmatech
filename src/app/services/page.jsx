import Footer from '@/components/Footer/Footer';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/ui/NavBar/NavBar';
import React from 'react';

const Page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-grow">
                {/* Hero Section */}
                <div
                    className="hero min-h-[50vh]"
                    style={{
                        backgroundImage: "url(/bgimage.jpg)",
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Our Services</h1>
                            <p className="mb-5">
                                Designed for Your Unique Business Challenges
                            </p>
                        </div>
                    </div>
                </div>

                {/* What We Do Section */}
                <div className="mx-auto max-w-5xl px-4 py-20">
                    <div className="text-center space-y-3">
                        <h1 className="text-5xl font-bold text-blue-950">What We Do</h1>
                        <p className="text-lg">
                            From crafting stunning websites to appearing user-friendly in front of the right audience, we offer customizable creative and digital marketing services tailored just for you.
                        </p>
                    </div>
                </div>

                {/* Digital Marketing Section */}
                <div className="bg-gray-200 py-20 ">
                    <div className="mx-auto max-w-5xl px-4 ml-[800px]">
                        <div className="text-center space-y-3 ">
                            <h1 className="text-4xl text-blue-950 font-bold">Digital Marketing</h1>
                            <div className="flex justify-center gap-10 mt-10">
                                <ul className="space-y-2">
                                    <li>Lead Generation</li>
                                    <li>Email Marketing</li>
                                    <li>SMS Marketing</li>
                                    <li>Search Engine Marketing</li>
                                </ul>
                                <ul className="space-y-2">
                                    <li>Social Media Marketing</li>
                                    <li>Content Marketing</li>
                                    <li>SEO Optimization</li>
                                    <li>PPC Advertising</li>
                                </ul>
                            </div>
                            <Button className="mt-10 bg-blue-950 text-white hover:bg-blue-900">
                                Explore More
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Creative & Development Section */}
                <div className="py-20">
                    <div className="mx-auto max-w-5xl px-4 mr-[800px]">
                        <div className="text-center space-y-3">
                            <h1 className="text-4xl text-blue-950 font-bold">Creative & Development</h1>
                            <ul className="mt-10 space-y-2 ">
                                <li>Web Design & Development</li>
                                <li>Mobile App Development</li>
                                <li>Branding & Identity</li>
                                <li>UI/UX Design</li>
                            </ul>
                            <Button className="mt-10 bg-blue-950 text-white hover:bg-blue-900">
                                Explore More
                            </Button>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-gray-100 py-20">
                    <div className="mx-auto max-w-5xl px-4">
                        <div className="space-y-4">
                            <h1 className="text-4xl text-blue-950 font-bold text-center mb-10">Frequently Asked Questions</h1>
                            <div className="collapse collapse-arrow bg-white">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    How can I determine which service is right for my business?
                                </div>
                                <div className="collapse-content">
                                    <p>Our team of experts will provide free consultation to understand your business goals and recommend the best possible solutions and services to achieve success.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-white">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    Can I customize the services to suit my specific needs?
                                </div>
                                <div className="collapse-content">
                                    <p>Absolutely, you can. We offer fully customizable creative and digital marketing services to make sure they align perfectly with your business objectives.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-white">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    What is the typical timeline for completing a project?
                                </div>
                                <div className="collapse-content">
                                    <p>Timelines vary based on the type of project, its objectives, and complexity. However, we provide estimated schedules upfront and always ensure timely delivery.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-white">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    Do you offer service packages, or is pricing based on individual needs?
                                </div>
                                <div className="collapse-content">
                                    <p>We offer both service packages and flexible pricing options to meet every client’s unique needs. This means you pay for the service you receive.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-white">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    Will I have access to support after the project is completed?
                                </div>
                                <div className="collapse-content">
                                    <p>Yes. Depending on the service type, project duration, and agreement, we provide continuous support even after a project is completed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Page;