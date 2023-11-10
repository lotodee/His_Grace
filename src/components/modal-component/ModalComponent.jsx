import React from 'react';
import { Link } from 'react-router-dom';
import "./ModalComponent.scss";

const ModalComponent = ({handleClose}) => {
  
  

 
  return (
    <div className="modalContainer">
      <div className="modalContent">
        <div className="modalHeader">
          <h2>Success!</h2>
        </div>
        <div className="modalBody">
          <p>Your form has been submitted successfully.</p>
        </div>
        <div className="modalFooter">
          <Link to="/">
          <button className="closeButton" onClick={handleClose}>Go back to homepage</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
