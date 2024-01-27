import axios from "axios";
import React, { useEffect, useState } from "react";
import CardEpisode from "../../component/CardEpisode";

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
            <h1 className="tittle-app">Episodes page</h1>
            <div className="div-ricoso-page">
                {
                    episodios.map(episodio =>
                        <CardEpisode key={episodio.id} episode={episodio} />
                    )
                }
            </div>
        </>
    );
}

export default Episodes;