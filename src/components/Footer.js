import "./Footer.css";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import React from "react";  

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color: "#000", marginRight: "2rem" }} />
                        <div>
                            <p>Vancouver</p>
                            <p>British Columbia</p>                
                            <p>Canada</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color: "#000", marginRight: "2rem" }} />
                        +1-778-384-5183</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color: "#000", marginRight: "2rem" }} />
                        romar.renos@gmail.com </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>Dee'ZDem Renos</h4>
                    <p>At Dee'zDem Renos, we specialize in transforming homes with expert renovations tailored to your needs. From kitchen makeovers to full home remodels, our dedicated team ensures high-quality craftsmanship and attention to detail every step of the way. We bring your vision to life, creating spaces that are functional, beautiful, and built to last. </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;