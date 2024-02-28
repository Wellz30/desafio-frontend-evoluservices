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
              <div className='nameModal'>
                {props.name || "Unknown"}
              </div>
            </div>
            <div className='infosModal'>
              <div className="infoDetails">
                Details:
              </div>
              <div className='infoData'>
                <div className='infoDataDiv'>
                  <p>Gender: <b>{props.gender || "Unknown"}</b></p>
                  <p>Status: <b>{props.status || "Unknown"}</b></p>
                  <p>Species: <b>{props.species || "Unknown"}</b></p>
                </div>
                <div className='infoDataDiv'>
                  <p>Origin: <b>{props.origin || "Unknown"}</b></p>
                  <p>Location: <b>{props.location || "Unknown"}</b></p>
                  <p>Type: <b>{props.type || "Unknown"}</b></p>
                </div>
              </div>
            </div>
            <div className='closeButtonDiv'>
                <div className='closeButton' onClick={props.closeModal}>Close</div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
