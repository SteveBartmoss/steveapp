import React from "react";

function CardCharacter({character}){
    return(
        <>
            <div className="div-character-card">
                <img className="img-character" src={character.image} />
                <h1 className="content-card">{character.name}</h1>
                <h1 className="content-card">{character.status}</h1>
                <h1 className="content-card">{character.species}</h1>
            </div>
        </>
    );
}

export default CardCharacter;