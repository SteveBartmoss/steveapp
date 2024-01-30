import axios from "axios";
import React, { useEffect, useState } from "react";
import CardCharacter from "../../component/CardCharacter";
import { DivArticle, DivMosaico } from "../../../component/Contenedores/Cajas";

function Characters() {

    const [personajes, setPersonajes] = useState([]);
    const [next, setNext] = useState("");
    const [prev, setPrev] = useState("");

    const listCharacters = async () => {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            //console.log(response.data.info.next);
            setPersonajes(response.data.results);
            setNext(response.data.info.next);
            setPrev(response.data.info.prev);
        }
        catch (error) {
            console.error(error);
        }
    }

    const nextList = async (url) =>{
        try{
            const response = await axios.get(url);
            console.log(response.data);
            setPersonajes(response.data.results);
            setNext(response.data.info.next);
            setPrev(response.data.info.prev);
            //console.log(url);
            //console.log(next);
        }
        catch (error){
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
                <div>
                    <button onClick={()=>nextList(next)}>
                        Siguiente
                    </button>
                    <button onClick={()=>nextList(prev)}>
                        Anterior
                    </button>
                </div>
            </DivArticle>
        </>
    );
}

export default Characters;