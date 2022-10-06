import React from "react"

export default function Card(props){
    return (   
   
        <div className="card">
            <div className="left">
                <img src={`./images/${props.img}`} className="card--image"/>
            </div>

            <div className="right">
                <div className="info-header">
                    <div className="location">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>{props.title}</span>
                    </div>
                    <div className="google-map-button">
                        <a href={props.url} target="_blank" rel="noreferrer noopener">View on Google Maps</a>
                    </div>
                </div>
                <div className="card-title">
                        <h2 className="card-city">{props.location}</h2>
                        <p className="card-rating">{`Raiting: ${props.stat}`}</p>
                </div>
                <div className="card-desc">
                    <p className="card-text">{props.desc}</p>
                </div>
                   
            </div>
            <hr className="border"/> 
            
        </div>

       
    )
}