import axios from "axios";
import React, { useEffect, useState } from "react";

function Episodes() {

    const [episodios, setEpisodios] = useState([]);

    const listEpisodios = async () => {
        const response = await axios.get("https://rickandmortyapi.com/api/episode");
        setEpisodios(response.data.results);
        console.log(response.data.results);
    }

    useEffect(() => {
        listEpisodios();
    }, []);

    return (
        <>
            <h1 className="title1">Episodes page</h1>
            {
                episodios.map(episodio=>
                        <h1>{episodio.name}</h1>
                    )
            }
        </>
    );
}

export default Episodes;