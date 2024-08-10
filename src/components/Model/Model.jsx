import React, { useEffect } from 'react';
import './Model.css'; 
import { IoMdCheckboxOutline } from "react-icons/io";

const Model = ({ show, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = show ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto'; // Reset overflow when modal is unmounted
        };
    }, [show]);

    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-icon">
                        <span><IoMdCheckboxOutline/></span> {/* You can use a checkmark icon */}
                    </div>
                    <h2>Success</h2>
                    <p>Your message has been sent successfully!</p>
                    <button onClick={onClose} className="modal-button">OK</button>
                </div>
            </div>
        </div>
    );
};

export default Model;
