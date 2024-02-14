import React, { useEffect, useState } from "react";
import { DivArticle } from "../../../component/Contenedores/Cajas";
import axios from "axios";

function Pokemons() {

    const [pokemons, setPokemons] = useState([]);

    const listPokemons = async () => {
        try{
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
            setPokemons(response.data.results);
        }
        catch (error){
            console.error(error);
        }
    }

    useEffect(()=>{
        listPokemons();
    },[]);

    return (
        <>
            <h1 className="tittle-app">Pokemones</h1>
            <DivArticle>

            </DivArticle>
        </>
    );
}

export default Pokemons;