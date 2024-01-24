import axios from "axios";
import React, { useEffect } from "react";

function Characters(){

    const listCharacters = async () => {
        try{
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            console.log(response.data.results);
        }
        catch (error){
            console.error(error);
        }
    }

    useEffect(()=>{
        listCharacters();
    },[]);

    return(
        <h1 className="title1">Characters Page</h1>
    );
}

export default Characters;