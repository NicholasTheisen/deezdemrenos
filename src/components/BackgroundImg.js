import "./BackgroundImg.css";
import React, { Component } from "react";

class BackgroundImg extends Component {
    render() {
    return <div className="about-img">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>;
    }
};

export default BackgroundImg;