import React from "react";

function CardCharacter({character}){
    return(
        <>
            <div>
                <img src={character.image} />
                <h1>{character.name}</h1>
            </div>
        </>
    );
}

export default CardCharacter;