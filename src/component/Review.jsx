import React from "react";
import Card from "./Card";

function Review(){
    return (
        <section>
        <div className="grid-reviews">
            <section className="back-article">
                <div className="div-columna">
                    <h1 className="title1">Los graficos acabaran con los juegos</h1>
                    <p className="content-columna">Actualmente los graficos de un juego son un aspecto tan significativo que se puede pensar que no es
                        no es posible que un juego actual tenga graficos menores que sus competidores despues de todo mientras
                        mejores sean los graficos el juego se disfruta ma cierto ? Bueno esto no siempre es asi ya que actualmente tenemos titulos
                        que visualmente resultan muy llamativos ya que los graficos son bastante detallados y en algunos casos tratan de ser realistas
                        pero las mecanicas estan pesimas o nos encontramos con un mundo extremadamente realista pero que no tiene nada intereseante 
                        para hacer lo cual en la mayoria de casos resulta molesto ya que visualmente el titulo es llamativo pero una vez que se prueba
                        uno se da cuenta de que realmente esl juego se trata de un cascaron vacio
                    </p>
                    <center>
                        <a className="linkVideo" href="article">Seguir leyendo</a>
                    </center>
                </div>
            </section>
            <div className="Videos">
                <Card imgUrl={"/Assets/heatminiatura.png"} title="Net for speed Heat" 
                paragraph="Un nuevo need for speed pero Esta a la altura de la edad de oro?"
                urlVideo="https://www.youtube.com/watch?v=jmLM6DvAn84"/>

                <Card imgUrl={"/Assets/whyle.png"} title="while true learn" 
                paragraph="Un juego unico en su clase y que ademas busca dar conocimiento a los usuarios"
                urlVideo="https://www.youtube.com/watch?v=GVYxvpG3RkM"/>

                <Card imgUrl={"/Assets/frostpunminiatura.png"} title="Frost punk" 
                paragraph="Un juego que propone un desafio helado para todos los que se atrevan a jugarlo"
                urlVideo="https://www.youtube.com/watch?v=vfIXW96xbZA"/>

                <Card imgUrl={"/Assets/sunsetMiniatura.jpg"} title="Sunset Overdrive" 
                paragraph="Un juego que tal vez no fue tan valorado pero que tiene mucho para ofrecer si lo pruebas"
                urlVideo="https://www.youtube.com/watch?v=Ip7WDHnbB5s"/>

            </div>
        </div>
        </section>
    );
}

export default Review;