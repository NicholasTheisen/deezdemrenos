import { Link } from "react-router-dom";
import "./Navbar.css";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);


    return (
        <div className ={color ? "header header-bg" : "header"}>
            <Link to="/">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="burger" onClick={handleClick}>
                {click ? (<FaTimes size= {20} style={{color: "#000"}} />) : (<FaBars size= {20} style={{color: "#000"}} />)}
            </div>
        </div>
    );
}

export default Navbar;