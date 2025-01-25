import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/ui/NavBar/NavBar';
import React from 'react';

const page = () => {
    const teamMembers = [

        { name: "John Doe", role: "Software Engineer" },
        { name: "Web Developer", role: "Designer" },
        { name: "Project Manager", role: "QA Engineer" },
        { name: "DevOps", role: "DevOps Engineer" },
    ];
    return (
        <div>
            <NavBar />
            <div>

                <div
                    className="hero min-h-[50vh]"
                    style={{
                        backgroundImage: "url(/bgimage.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                            <p className="mb-5">
                                At Pixmatech, we bridge creativity, innovation, and strategy to craft solutions that redefine what’s possible for a business.
                            </p>

                        </div>
                    </div>
                </div>
                {/* Our Mission */}
                <div className="mx-auto max-w-5xl px-4 mt-20">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-10">
                        {/* Image Section */}
                        <div className="w-full md:w-1/2">
                            <img
                                className="w-full h-auto rounded-lg shadow-lg"
                                src="/ab1.jpg"
                                alt="About Us"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-1/2">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Pixmatech constructed a digital advertising platform for Prumote, from its development phase to production. Invite a partner to work with you in Slack, and they’ll get 3 months of a premium plan for free. An imagined mental image of something: We lack a vision of what love really is. A vision can also be something seen in a dream or as a result of a religious experience.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Our Vision */}
                <div className="mx-auto max-w-5xl px-4 mt-20">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-10">
                        {/* Text Section */}
                        <div className="w-full md:w-1/2 order-2 md:order-1">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Pixmatech constructed a digital advertising platform for Prumote, from its development phase to production. Invite a partner to work with you in Slack, and they’ll get 3 months of a premium plan for free. An imagined mental image of something: We lack a vision of what love really is. A vision can also be something seen in a dream or as a result of a religious experience.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 order-1 md:order-2">
                            <img
                                className="w-full h-auto rounded-lg shadow-lg"
                                src="/ab1.jpg"
                                alt="About Us"
                            />
                        </div>
                    </div>
                </div>


                <div className="py-12 mt-20">
                    <div className="max-w-6xl mx-auto px-4">
                        {/* Section Title and Buttons */}
                        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                            <h1 className="text-4xl font-bold text-center md:text-left mb-4 md:mb-0">Our Teams</h1>
                            <div className="flex flex-wrap gap-4">
                                <button className="btn rounded-full px-6 py-2 bg-gray-200 hover:bg-gray-300 transition duration-300">
                                    Designer
                                </button>
                                <button className="btn rounded-full px-6 py-2 bg-gray-200 hover:bg-gray-300 transition duration-300">
                                    Developer
                                </button>
                                <button className="btn rounded-full px-6 py-2 bg-gray-200 hover:bg-gray-300 transition duration-300">
                                    QA Engineer
                                </button>
                                <button className="btn rounded-full px-6 py-2 bg-gray-200 hover:bg-gray-300 transition duration-300">
                                    DevOps
                                </button>
                            </div>
                        </div>

                        {/* Team Members Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                                    <p className="text-gray-600">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default page;