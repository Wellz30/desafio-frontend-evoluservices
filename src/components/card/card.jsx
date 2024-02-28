import React from "react";
import alive from "../../assets/icons/alive.svg"
import dead from "../../assets/icons/dead.svg"
import portal from "../../assets/images/portal.png"
import portalSound from "../../assets/sounds/portal.mp3"
import './Card.css'

const Card = (props) => {
    const playSound = () => {
        const audio = new Audio(portalSound);
        audio.play();
        props.openModal(props.objectCharacter);
    }
    return (
        <div className="card">
            <div className="pic">
                <img
                    src={props.pic}
                    className="img"
                >
                </img>
            </div>
            <div className="infoDiv">
                <div className="info">
                    <div className="name" onClick={() => {playSound()}}>
                        {props.name}
                    </div>
                    <div className="status">
                        {props.status === "Alive" ?
                            <>
                                <img className="statusImg" src={alive}></img>
                                {props.status}
                            </> :
                            <>
                                <img className="statusImg" src={dead}></img>
                                {props.status}
                            </>
                        }                     
                    </div>
                </div>
                <div className="info">
                    <div className="locationInfo">
                        <div>
                            Last know location:
                        </div>
                    </div>
                    <div className="location">
                        <div>
                            {props.location}
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="portalDiv">
                        <div>
                            <img className="portal" onClick={() => {playSound()}} src={portal}></img>
                        </div>
                        <div className="details">
                            More details...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;