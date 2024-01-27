import React from "react";

function CardLocation({location}){
    return(
        <div className="div-character-card">
            <h1>{location.name}</h1>
            <h1>{location.dimension}</h1>
            <h1>{location.type}</h1>
        </div>
    );
}

export default CardLocation;