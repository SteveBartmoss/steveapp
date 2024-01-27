import React from "react";

function CardEpisode({episode}){
    return(
        <>
            <div className="div-character-card">
                <h1>{episode.name}</h1>
                <h1>{episode.air_date}</h1>
                <h1>{episode.episode}</h1>
            </div>
        </>
    );
}

export default CardEpisode;