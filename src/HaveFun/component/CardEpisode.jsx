import React from "react";

function CardEpisode({episode}){
    return(
        <>
            <div className="div-character-card">
                <h1 className="content-card">{episode.name}</h1>
                <h1 className="content-card">{episode.air_date}</h1>
                <h1 className="content-card">{episode.episode}</h1>
            </div>
        </>
    );
}

export default CardEpisode;