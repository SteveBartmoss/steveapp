import axios from "axios";
import React, { useEffect, useState } from "react";
import CardCharacter from "../../component/CardCharacter";
import { DivArticle, DivMosaico } from "../../../component/Contenedores/Cajas";

function Characters() {

    const [personajes, setPersonajes] = useState([]);

    const listCharacters = async () => {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            console.log(response.data.results);
            setPersonajes(response.data.results);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        listCharacters();
    }, []);

    return (
        <>
            <h1 className="tittle-app">Characters Page</h1>
            <DivArticle>
                <DivMosaico>
                    {
                        personajes.map(perso =>
                            <CardCharacter key={perso.id} character={perso} />
                        )
                    }
                </DivMosaico>
            </DivArticle>
        </>
    );
}

export default Characters;