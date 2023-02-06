import React from "react";
import Card from "./Card";
import sys32 from "../img/system32.jpg";
import pac from "../img/pacman.jpg";
import cpu from "../img/cpu.jpg";
import lib from "../img/librerias.jpg";

import '../App.css';

function Videos(){
    return(
        
        <div className="Videos">
            <Card imgUrl={sys32} title="Borrar Sytem32" 
            paragraph="La popular broma de borrar System32 para que tu pc sea mas rapida puede generar mas problemas de lo que crees"
            urlVideo="https://www.youtube.com/watch?v=QsPAVmQFnUQ"/>

            <Card imgUrl={pac} title="Los fantasmas de pacman"
            paragraph="El popular juego guarda algunos secretos sobre el comportamiento de sus enemigos, una forma de programacion interesante"
            urlVideo="https://www.youtube.com/watch?v=XLCuuMvgbec"/>

            <Card imgUrl={cpu} title="Procesador multi nucleo"  
            paragraph="Los procesadores tienen diferentes propiedades y una de ellas es el numero de nucleos que pose, aprende mas en el video"
            urlVideo="https://www.youtube.com/watch?v=AuPJ8kL-iLs"/>

            <Card imgUrl={lib} title="Librerias de programacion" 
            paragraph="Las librerias de programacion son un tema recurrente dentro de la programacion, visita el video para saber mas sobre ellas"
            urlVideo="https://www.youtube.com/watch?v=V4ZxnSYly-Y"/>

        </div>
    );
}

export default Videos;
