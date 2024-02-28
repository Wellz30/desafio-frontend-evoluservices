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
            <div className='picDiv'>
              <div className='picModal'>
                <img className='picModalDiv' src={props.image}></img>
              </div>
              <div className=''>
                {props.name || "Unknown"}
              </div>
            </div>
            <div className='infosModal'>
              <div className="infoDetails">
                Details:
              </div>
              <div className='infoData'>
                <div className='infoDataDiv'>
                  <p>Gender: {props.gender || "Unknown"}</p>
                  <p>Status: {props.status || "Unknown"}</p>
                  <p>Species: {props.species || "Unknown"}</p>
                </div>
                <div className='infoDataDiv'>
                  <p>Origin: {props.origin || "Unknown"}</p>
                  <p>Location: {props.location || "Unknown"}</p>
                  <p>Type: {props.type || "Unknown"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
