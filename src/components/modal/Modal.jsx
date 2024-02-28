import React from 'react';
import './Modal.css'; // Importe seu arquivo CSS para estilização

function Modal(props) {

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      props.closeModal();
    }
  };

  return (
    <div>
      {props.isOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <span className="close-button">X</span>
            <h2>Modal Title</h2>
            <p>Modal Content Goes Here</p>
            <button onClick={props.closeModal}>Close modal</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
