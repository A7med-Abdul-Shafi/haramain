import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links } from './data';
import "./Navbar2.css";
import logo from './images/logo.png';
import logo2030 from '../imgs/logo-2030.png'

const Navbar2 = () => {

    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className='logo' alt='logo'/>
                    <button className='nav-toggle' onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                <div className="logo2">
                    <img src={logo2030} className='logo2' alt='logo' />
                </div>
            </div>
            <div className='links-container' ref={linksContainerRef}>
                <ul className='links' ref={linksRef}>
                    {links.map((link) => {
                        const { id, url, text } = link;
                        return (
                            <li key={id}>
                                <a href={url}>{text}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar2;
