import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import headerBg1 from '../images/headerbg.png';
import headerBg2 from '../images/headerbg2.png';

function Header() {
    const [currentBg, setCurrentBg] = useState(headerBg1);

    useEffect(() => {
        // Function to switch between background images
        const switchBackground = () => {
            setCurrentBg((prevBg) => (prevBg === headerBg1 ? headerBg2 : headerBg1));
        };

        // Set interval to switch background images every 5 seconds
        const intervalId = setInterval(switchBackground, 5000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <header className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${currentBg})` }}>
            <section className="flex mx-10 pt-8 justify-between">
                <img src={logo} className="h-14" alt="logo" />
                <nav className="flex items-center">
                    <ul className="flex text-xs space-x-7 font-medium">
                        <li><Link to={'#'}>ABOUT US & EVENTS</Link></li>
                        <li><Link to={'#'}>ANNUAL PAGENT & VESAK FESTIVAL</Link></li>
                        <li><Link to={'#'}>COMMUNITY SERVICES</Link></li>
                        <li><Link to={'#'}>ART GALLERY</Link></li>
                        <li><Link to={'#'}>ON GOING PROJECTS</Link></li>
                        <li><Link to={'#'}>DONATIONS</Link></li>
                        <li><Link to={'#'}>CONTACT US</Link></li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}

export default Header;
