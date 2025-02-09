import React from "react";
import Navbar from "../components/Navbar";
import PhotoGrid from "../components/PhotoGrid";
import Footer from "../components/Footer";
import BackgroundImg from "../components/BackgroundImg";

const Gallery = () => {
    return (
        <div>
            <Navbar/>
            <BackgroundImg heading="Gallery" text="Check out some of our recent projects below."/>
            <PhotoGrid />
            <Footer/>
        </div>
    );
};

export default Gallery;