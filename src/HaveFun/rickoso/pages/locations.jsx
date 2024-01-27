import axios from "axios";
import React, { useEffect, useState } from "react";
import CardLocation from "../../component/CardLocation";

function Locations() {

    const [locaciones, setLocaciones] = useState([]);

    const listLocaciones = async () => {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/location');
            setLocaciones(response.data.results);
            console.log(response.data.results);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        listLocaciones();
    }, []);

    return (
        <>
            <h1 className="tittle-app">Locations Page</h1>
            <div className="div-ricos-page">
                {
                    locaciones.map(locacion =>
                        <CardLocation key={locacion.id} location={locacion} />
                    )
                }
            </div>
        </>
    );
}

export default Locations;
