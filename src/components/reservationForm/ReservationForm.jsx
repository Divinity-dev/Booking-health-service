import React, { useState } from 'react';
import Modal from '../modal/Modal';
import './reservationForm.css';

const ReservationForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="nav">
          <div className="nav-icon">
            <i className="fas fa-bars" />
          </div>
          <div className="search-icon">
            <i className="fas fa-search" />
          </div>
        </div>
        <div className="title">
          <h4>BOOK A HEALTH SERVICE WITH HELLO-DOCTOR</h4>
          <hr className="divider" />
          <p style={{ color: '#fff' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, blanditiis. lorem10
          </p>
        </div>

      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="cls-m-btn" type="button" onClick={handleModalClose}>X</button>
            <br />
            <Modal setIsModalOpen={setIsModalOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;
