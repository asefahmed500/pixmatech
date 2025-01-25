import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-950 text-white py-12 mt-20">
            <div className="container mx-auto px-4">
                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Pixmatech</h2>
                        <p className="text-gray-400">
                            Pixmatech delivers exceptional digital solutions catering to unique business models, but it puts developers, says developers, digest and identify a creative solution. With client satisfaction at the forefront of our approach, we help builders-in with many creative processes that stands out and achieve lasting success.
                        </p>
                    </div>

                    {/* Contact Info Section */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                        <ul className="text-gray-400">
                            <li className="mb-2">32, Shenzhen Jiangxin</li>
                            <li className="mb-2">Sector: 21, LiDian, Dinhai</li>
                            <li className="mb-2">MBA, Bangladesh</li>
                            <li className="mb-2">info@pixmatech.com</li>
                            <li>+861 23 9788 4885</li>
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="text-gray-400">
                            <li className="mb-2">Select on Services</li>
                            <li className="mb-2">Case studies</li>
                            <li className="mb-2">Privacy policy</li>
                            <li>Terms & conditions</li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Company</h3>
                        <ul className="text-gray-400">
                            <li className="mb-2">Pixmatech Creative</li>
                            <li>Pixmatech Digital</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-800 pt-8 mt-8 text-center">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} Pixmatech. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;