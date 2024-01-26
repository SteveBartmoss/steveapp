import axios from "axios";
import React, { useEffect, useState } from "react";

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
            <h1 className="title1">Locations Page</h1>
            {
                locaciones.map(locacion=>
                    <h1>{locacion.name}</h1>
                )
            }
        </>
    );
}

export default Locations;
