
import React from "react";
import "./HeroImg.css";
import HomeBackgroundImg from "../assets/backgroundimg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
    return <div className="home">
        <div className="mask">
            <img className="homebackground-img" src={HomeBackgroundImg} alt="HomeBG" />
        </div>
        <div className="content">
            <p>We specialize in turning your ideas into reality.</p>
            <h1>Bring Your Vision To Life</h1>
            <Link to="/services" className="btn">Services</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
        </div>
    </div>;
};

export default HeroImg;