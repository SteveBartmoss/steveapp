import React from "react";
import Card from "./Card";
import need from "../img/heatminiatura.png";
import learn from "../img/whyle.png";
import punk from "../img/frostpunminiatura.png";
import sunset from "../img/sunsetMiniatura.jpg";
import Baner from "./Baner";

function Review(){
    return (
        <section className="back-review">
        <div className="grid-reviews">
            <section className="back-article">

            </section>
            <div className="Videos">
                <Card imgUrl={need} title="Net for speed Heat" 
                paragraph="Un nuevo need for speed pero Esta a la altura de la edad de oro?"
                urlVideo="https://www.youtube.com/watch?v=jmLM6DvAn84"/>

                <Card imgUrl={learn} title="while true learn" 
                paragraph="Un juego unico en su clase y que ademas busca dar conocimiento a los usuarios"
                urlVideo="https://www.youtube.com/watch?v=GVYxvpG3RkM"/>

                <Card imgUrl={punk} title="Frost punk" 
                paragraph="Un juego que propone un desafio helado para todos los que se atrevan a jugarlo"
                urlVideo="https://www.youtube.com/watch?v=vfIXW96xbZA"/>

                <Card imgUrl={sunset} title="Sunset Overdrive" 
                paragraph="Un juego que tal vez no fue tan valorado pero que tiene mucho para ofrecer si lo pruebas"
                urlVideo="https://www.youtube.com/watch?v=Ip7WDHnbB5s"/>

            </div>
        </div>
        </section>
    );
}

export default Review;