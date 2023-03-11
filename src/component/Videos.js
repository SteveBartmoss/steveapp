import React from "react";
import Card from "./Card";
import sys32 from "../img/system32.jpg";
import pac from "../img/pacman.jpg";
import cpu from "../img/cpu.jpg";
import lib from "../img/librerias.jpg";

import '../App.css';
import Baner from "./Baner";

function Videos(){
    return(
        
        <section className="back-videos">
        <div className="grid-videos">
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
            <section className="columna">
                <div className="div-columna">
                    <h1 className="title1">Los graficos acabaran con los juegos</h1>
                    <p className="biblio">Actualmente los graficos de un juego son un aspecto tan significativo que se puede pensar que no es
                        no es posible que un juego actual tenga graficos menores que sus competidores despues de todo mientras
                        mejores sean los graficos el juego se disfruta ma cierto ? Bueno esto no siempre es asi ya que actualmente tenemos titulos
                        que visualmente resultan muy llamativos ya que los graficos son bastante detallados y en algunos casos tratan de ser realistas
                        pero las mecanicas estan pesimas o nos encontramos con un mundo extremadamente realista pero que no tiene nada intereseante 
                        para hacer lo cual en la mayoria de casos resulta molesto ya que visualmente el titulo es llamativo pero una vez que se prueba
                        uno se da cuenta de que realmente esl juego se trata de un cascaron vacio
                    </p>
                    <center>
                        <a className="linkVideo">Seguir leyendo</a>
                    </center>
                </div>
            </section>
        </div>
        </section>
    );
}

export default Videos;
