import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";
import BackgroundImg from "../components/BackgroundImg.js";

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <BackgroundImg heading="Need a Quote? Get in Touch Today!" text="Have a project in mind? We are ready to provide you with a personaized quote. Simply fill out the form below or reach out directly, and we will get in contact as soon as possible."/>
            <Form />
            <Footer/>
        </div>
    );
    }

export default Contact;