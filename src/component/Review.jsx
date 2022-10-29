import React from "react";
import Card from "./Card";
import py from "../img/pyton.jpg";
import hdd from "../img/hdd.jpg";
import placa from "../img/placa.jpg";
import gpu from "../img/gpu.jpg";

function Review(){
    return (
        <div className="Videos">
            <Card imgUrl={py} title="Net for speed Heat" 
            paragraph="Un nuevo need for speed pero Esta a la altura de la edad de oro?"/>
            <Card imgUrl={hdd} title="while true learn" 
            paragraph="Un juego unico en su clase y que ademas busca dar conocimiento a los usuarios"/>
            <Card imgUrl={placa} title="Frost 
            punk" paragraph="Un juego que propone un desafio helado para todos los que se atrevan a jugarlo"/>
            <Card imgUrl={gpu} title="Sunset Overdruve" 
            paragraph="Un juego que tal vez no fue tan valorado pero que tiene mucho para ofrecer si lo pruebas"/>
        </div>
    );
}

export default Review;