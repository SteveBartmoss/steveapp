import React from "react";


function PokemonCard({pokemon}){
    return(
        <>
            <div className="div-character-card">
                <h1 className="content-card">{pokemon.name}</h1>
            </div>
        </>
    );
}

export default PokemonCard;