import axios from "axios";
import React, { useEffect, useState } from "react";


function PokemonCard({pokemon}){

    const [id,setId] = useState(0);
    const [sprites,setSprites]=useState({});

    const getInfo=async()=>{
        const response = await axios.get(pokemon.url);
        setId(response.data.id);
        setSprites(response.data.sprites);
    }

    useEffect(()=>{
        getInfo();
    },[])

    return(
        <>
            <div className="div-character-card">
                <h1 className="content-card">{pokemon.name}</h1>
            </div>
        </>
    );
}

export default PokemonCard;