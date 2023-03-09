import React from "react";
import "../App.css";

function Actividad ({juego,trabajo,estudio,review}){
    return(
        <div className="div-actividad">
            <center>
                <h1 className="title1">Actividad reciente</h1>
            </center>
            <div className="text-actividad">
                <h2>Jugando: {juego}</h2>
                <h2>Trabajando en: {trabajo}</h2>
                <h2>Estudiando: {estudio}</h2>
                <h2>Proxima review: {review}</h2>
            </div>
        </div>
    );
}

export default Actividad;