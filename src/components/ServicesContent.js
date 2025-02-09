import "./ServicesContent.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import bathroomImage from "../assets/bathroom.jpeg"; // Replace with your actual image path
import kitchenImage from "../assets/kitchen.jpeg"; // Replace with your actual image path
import tileImage from "../assets/tile.jpeg"; // Replace with your actual image path
import flooringImage from "../assets/flooring.jpeg"; // Replace with your actual image path

const ServicesContent = () => {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className="services">
            <div className="service-content">
                <h1>Our Services</h1>
                <p>From full kitchen and bathroom renovations, to hardwood flooring and tile work throughout the house, we can accomodate to all of your needs. </p>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
            <div className="service-blocks">
                <div className="service-block" onClick={() => openModal(bathroomImage)}>
                    <h2>Bathroom Renovations</h2>
                    <img src={bathroomImage} alt="Bathroom Renovations" />
                    <p>Transform your bathroom into a luxurious and functional space.</p>
                </div>
                <div className="service-block" onClick={() => openModal(kitchenImage)}>
                    <h2>Kitchen Renovations</h2>
                    <img src={kitchenImage} alt="Kitchen Renovations" />
                    <p>Upgrade your kitchen with modern designs and high-quality materials.</p>
                </div>
                <div className="service-block" onClick={() => openModal(tileImage)}>
                    <h2>Tile Installation</h2>
                    <img src={tileImage} alt="Tile Installation" />
                    <p>Professional tile installation for floors, walls, and backsplashes.</p>
                </div>
                <div className="service-block" onClick={() => openModal(flooringImage)}>
                    <h2>Flooring</h2>
                    <img src={flooringImage} alt="Flooring" />
                    <p>High-quality flooring solutions for every room in your home.</p>
                </div>
            </div>

            {modalImage && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={modalImage} alt="Full view" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ServicesContent;