import React from "react";

function RandChar({character}){
    return(
        <>
            <div className="rand-card">
                <img src={character.image} />
                <h1>{character.name}</h1>
                <h1>{character.status}</h1>
                <h1>{character.species}</h1>
                <h1>{character.gender}</h1>
            </div>
        </>
    );
}

export default RandChar;