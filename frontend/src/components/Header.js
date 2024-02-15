import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import headerBg1 from '../images/headerbg.png';
import headerBg2 from '../images/headerbg2.png';
import { motion } from "framer-motion";

function Header() {
    return (
        <motion.header className="bg-cover bg-center h-screen"  
            initial={{
                backgroundImage: `url(${headerBg1})`
            }}

            animate={{
                backgroundImage: `url(${headerBg2})`
            }}
            transition={{
                // repeat: Infinity,
                delay: 2,
                duration: 2,
                type: "tween"
            }}
        >
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
        </motion.header>
    );
}

export default Header;
