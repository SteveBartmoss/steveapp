import React from "react";

function CardLocation({location}){
    return(
        <div className="div-character-card">
            <h1 className="content-card">{location.name}</h1>
            <h1 className="content-card">{location.dimension}</h1>
            <h1 className="content-card">{location.type}</h1>
        </div>
    );
}

export default CardLocation;