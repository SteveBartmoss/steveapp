import React from "react";
import Card from "./Card";
import py from "../img/pyton.jpg";
import hdd from "../img/hdd.jpg";
import placa from "../img/placa.jpg";
import gpu from "../img/gpu.jpg";
import Topic from "./Topics";

function Movies(){
    return(
        <div className="Videos">
            <Topic imgUrl={py} title="Trilogia del volver al futuro" 
            paragraph="Una de mis sagas favoritas y que recomiendo ver"/>
            <Topic imgUrl={hdd} title="Star wars Episodio 1 a 3" 
            paragraph="La trilogia de Anakyn que para mi es la mejor a pesar de que los puristas prefieren la saga de luke"/>
            <Topic imgUrl={placa} title="Drive " 
            paragraph="Un claro ejemplo de porque no debes simpearle a la que te gusta"/>
            <Topic imgUrl={gpu} title="La trilogia de iron man" 
            paragraph="La saga que siempre me motivo a seguir estudiando aun sabiendo que ese nivel de tecnologia no es posible"/>
        </div>
    );
}

export default Movies;