import React from "react";
import "../App.css";

function Actividad ({juego,trabajo}){
    return(
        <div className="div-actividad">
            <center>
                <h1 className="title1">Actividad reciente</h1>
            </center>
            <h2>Jugando recientemente:{juego}</h2>
            <h2>Trabajando en: </h2>
            <h2>Estudiando: </h2>
            <h2>Proxima review: </h2>
        </div>
    );
}

export default Actividad;