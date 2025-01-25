'use client';

import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    const navlinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/services', label: 'Services' },
        { href: '/casestudy', label: 'Case Study' },
        { href: '#contact-us', label: 'Contact Us', type: 'button', className: 'btn-outline -mt-1 bg-green-950 text-white' }, // Use anchor link
    ];

    const handleScroll = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = href.replace('#', '');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
            }
        }
    };

    return (
        <div className="bg-gray-200 fixed w-full z-10">
            <div className="navbar mx-auto max-w-5xl flex justify-between items-center p-4">
                {/* Logo */}
                <div className="navbar-start">
                    <div className="flex items-center">
                        <img src="/logo.png" alt="Pixmatech Logo" className="h-12 w-12 md:h-18 md:w-18" />
                        <div className="ml-2 flex flex-col mt-1">
                            <a className="text-lg md:text-xl font-bold text-gray-800">Pixmatech</a>
                            <h6 className="text-xs text-gray-600 whitespace-nowrap">INNOVATIVE DIGITAL SOLUTIONS</h6>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow text-black"
                        >
                            {navlinks.map((link, index) => (
                                <li key={index}>
                                    {link.type === 'button' ? (
                                        <button className={`btn ${link.className}`} onClick={(e) => handleScroll(e, link.href)}>
                                            {link.label}
                                        </button>
                                    ) : (
                                        <Link href={link.href}>{link.label}</Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex navbar-center">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        {navlinks.map((link, index) => (
                            <li key={index}>
                                {link.type === 'button' ? (
                                    <button className={`btn ${link.className}`} onClick={(e) => handleScroll(e, link.href)}>
                                        {link.label}
                                    </button>
                                ) : (
                                    <Link href={link.href}>{link.label}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sign Up Button */}
                <div className="hidden lg:block navbar-end">
                    {/* <Link href="/signup">
                        <Button className="ml-4">Sign Up</Button>
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default NavBar;