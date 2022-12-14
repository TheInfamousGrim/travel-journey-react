import React from "react";

// Assets
import mtFuji from '../assets/imgs/mt-fuji.jpg';

const Card = ({ title, location, googleMapsUrl, startDate, endDate, description, imageUrl }) => {
    return (
        <div className="travel-card">
            <img className="travel-card__img" src={imageUrl} alt="travel location" />
            <div className="travel-card__information">
                <div className="travel-card__location">
                    <i className="fa-solid fa-location-dot location-pin"></i>
                    <h4>{location}</h4>
                    <a href={googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="travel-card__destination">{title}</h1>
                <p className="travel-card__dates">{startDate} - {endDate}</p>
                <p className="travel-card__description">{description}</p>
            </div>
        </div>
    )
}

export default Card;