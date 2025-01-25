import React from 'react';

const ContactUs = () => {
    return (
        <div id="contact-us" className=" mx-auto max-w-5xl flex flex-row items-center mt-14">
            {/* Contact Form Section */}
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
                <p className="text-gray-600 mb-8">Our friendly team would love to hear from you!</p>

                {/* Form */}
                <form>
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="first-name">
                                First Name *
                            </label>
                            <input
                                type="text"
                                id="first-name"
                                placeholder="First Name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="last-name">
                                Last Name *
                            </label>
                            <input
                                type="text"
                                id="last-name"
                                placeholder="Last Name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2" htmlFor="email">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Your Email..."
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Services Checkboxes */}
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Services *</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                {[
                                    "Lead Generation",
                                    "Content Marketing",
                                    "Email Marketing",
                                    "Social Media Marketing",
                                    "SMS Marketing",
                                ].map((service, index) => (
                                    <div key={index} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`service-${index}`}
                                            className="mr-2"
                                        />
                                        <label htmlFor={`service-${index}`} className="text-gray-700">
                                            {service}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-2">
                                {[
                                    "Paid Advertisement",
                                    "Search Engine Marketing",
                                    "Search Engine Optimization",
                                    "Web Development",
                                    "Mobile App Development",
                                    "UI/UX Design",
                                    "Landing Page Design",
                                    "E-commerce Platform Development",
                                ].map((service, index) => (
                                    <div key={index} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`service-${index + 5}`} // Adjust index to avoid duplicate IDs
                                            className="mr-2"
                                        />
                                        <label htmlFor={`service-${index + 5}`} className="text-gray-700">
                                            {service}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Project Description */}
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2" htmlFor="project">
                            Tell us about your project
                        </label>
                        <textarea
                            id="project"
                            placeholder="Describe your project..."
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-950 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Google Maps Section */}
            <div className="mt-12 max-w-4xl mx-auto ">

                <div className="rounded-lg overflow-hidden shadow-lg h-96">
                    <iframe
                    className='w-full h-full'
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.862646916832!2d90.3882773154312!3d23.75072208458922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a6c5d6b9%3A0x6b8c3b3b3b3b3b3b!2sTindokan%20Bikrampur%20Bhuiyan%20Medical%20College%20and%20Hospital!5e0!3m2!1sen!2sbd!4v1631012345678!5m2!1sen!2sbd"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;