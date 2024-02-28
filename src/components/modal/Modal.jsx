import React from 'react';
import './Modal.css'; // Importe seu arquivo CSS para estilização

function Modal(props) {

  return (
    <div>
      {props.isOpen && (
        <div className="modal-overlay">
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
