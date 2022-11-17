import React from "react";
import Card from "./Card";
import need from "../img/heatminiatura.png";
import learn from "../img/whyle.png";
import punk from "../img/frostpunminiatura.png";
import sunset from "../img/sunsetMiniatura.jpg";

function Review(){
    return (
        <div className="Videos">
            <Card imgUrl={need} title="Net for speed Heat" 
            paragraph="Un nuevo need for speed pero Esta a la altura de la edad de oro?"/>
            <Card imgUrl={learn} title="while true learn" 
            paragraph="Un juego unico en su clase y que ademas busca dar conocimiento a los usuarios"/>
            <Card imgUrl={punk} title="Frost 
            punk" paragraph="Un juego que propone un desafio helado para todos los que se atrevan a jugarlo"/>
            <Card imgUrl={sunset} title="Sunset Overdruve" 
            paragraph="Un juego que tal vez no fue tan valorado pero que tiene mucho para ofrecer si lo pruebas"/>
        </div>
    );
}

export default Review;