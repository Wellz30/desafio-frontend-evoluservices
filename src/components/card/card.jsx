import React from "react";
import alive from "../../assets/alive.svg"
import dead from "../../assets/dead.svg"
import './card.css'

const Card = (props) => {
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
                    <div className="name">
                        {props.name}
                    </div>
                    <div className="status">
                        {props.status === "Alive" ? 
                        <>
                            <img className="statusImg" src={alive}></img>
                            {props.status}
                        </> :
                        <img src={dead}></img>}                        
                    </div>
                </div>
                <div className="info"></div>
                <div className="info"></div>
            </div>
        </div>
    );
}

export default Card;