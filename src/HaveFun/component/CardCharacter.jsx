import React from "react";
import { DivCenter } from "../../component/Contenedores/Cajas";

function CardCharacter({ character }) {
    return (
        <>
            <div className="div-character-card">
                <DivCenter>
                    <img alt={character.name} className="img-character" src={character.image} />
                </DivCenter>
                <h1 className="content-card">{character.name}</h1>
                <h1 className="content-card">{character.status}</h1>
                <h1 className="content-card">{character.species}</h1>
            </div>
        </>
    );
}

export default CardCharacter;