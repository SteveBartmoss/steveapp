import React from "react";

function RandChar({character}){
    return(
        <>
            <div className="rand-card">
                <img src={character.image} />
                <p className="content-rand">Nombre: {character.name}</p>
                <p className="content-rand">Estatus: {character.status} </p>
                <p className="content-rand">Especie: {character.species}</p>
                <p className="content-rand">Genero: {character.gender}</p>
            </div>
        </>
    );
}

export default RandChar;