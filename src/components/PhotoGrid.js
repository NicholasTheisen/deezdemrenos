import React, { useState } from "react";
import "./PhotoGrid.css";
import photo1 from "../assets/photo1.jpeg"; // Replace with your actual image paths
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";
import photo5 from "../assets/photo5.jpeg";
import photo6 from "../assets/photo6.jpeg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

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