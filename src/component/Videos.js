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
            paragraph="La popular broma de borrar System32 para que tu pc sea mas rapida puede generar mas problemas de lo que crees"/>

            <Card imgUrl={pac} title="Los fantasmas de pacman"
            paragraph=""/>

            <Card imgUrl={cpu} title="Procesador multi nucleo"  
            paragraph=""/>

            <Card imgUrl={lib} title="Librerias de programacion" 
            paragraph=""/>

        </div>
    );
}

export default Videos;
