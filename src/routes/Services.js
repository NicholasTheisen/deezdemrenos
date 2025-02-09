import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesContent from "../components/ServicesContent";
import BackgroundImg from "../components/BackgroundImg.js";

const Services = () => {
    return (
        <div>
            <Navbar/>
            <BackgroundImg heading="Your Dream is Our Reality" text="We provide a wide range of services to help you bring your vision to life."/>
            <ServicesContent />
            <Footer/>
        </div>
    );
}

export default Services;
