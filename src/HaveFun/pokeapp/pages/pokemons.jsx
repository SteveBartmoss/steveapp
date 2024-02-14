import React, { useEffect, useState } from "react";
import { DivArticle, DivMosaico } from "../../../component/Contenedores/Cajas";
import axios from "axios";
import PokemonCard from "../../component/CardPokemon";

function Pokemons() {

    const [pokemons, setPokemons] = useState([]);
    const [next,setNext] = useState('');
    const [prev,setPrev] = useState('');

    const listPokemons = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
            setPokemons(response.data.results);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        listPokemons();
    }, []);

    return (
        <>
            <h1 className="tittle-app">Pokemones</h1>
            <DivArticle>
                <DivMosaico>
                    {
                        pokemons.map(pokemon =>
                            <PokemonCard key={pokemon.name} pokemon={pokemon} />
                        )
                    }
                </DivMosaico>

            </DivArticle>
        </>
    );
}

export default Pokemons;