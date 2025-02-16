import React, { useState } from "react";
import "./PhotoGrid.css";
import photo1 from "../assets/photo1.jpeg"; 
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";
import photo5 from "../assets/photo5.jpeg";
import photo6 from "../assets/photo6.jpeg";
import photo7 from "../assets/photo7.jpeg";
import photo8 from "../assets/photo8.jpeg";
import photo9 from "../assets/photo9.jpeg";
import photo10 from "../assets/photo10.jpeg";
import photo11 from "../assets/photo11.jpeg";
import photo12 from "../assets/photo12.JPG";
import photo13 from "../assets/photo13.jpeg";
import photo14 from "../assets/photo14.jpeg";
import photo15 from "../assets/photo15.jpeg";
import photo16 from "../assets/photo16.jpeg";
import photo17 from "../assets/photo17.jpeg";
import photo18 from "../assets/photo18.jpeg";
import photo19 from "../assets/photo19.jpeg";
import photo20 from "../assets/photo20.JPG";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20];

const PhotoGrid = () => {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className="photo-grid">
            {photos.map((photo, index) => (
                <div key={index} className="photo-item" onClick={() => openModal(photo)}>
                    <img src={photo} alt={`Photo ${index + 1}`} />
                </div>
            ))}

            {modalImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={modalImage} alt="Enlarged view" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhotoGrid;