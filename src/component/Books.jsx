import React from "react";
import Topic from "./Topics";
import Card from "./Card";
import py from "../img/pyton.jpg";
import hdd from "../img/hdd.jpg";
import placa from "../img/placa.jpg";
import gpu from "../img/gpu.jpg";

function Books(){
    return (
        <div className="Videos">
            <Topic imgUrl={py} title="Harry Potter" 
            paragraph="Despues de todo este tiempo... Siempre"/>
            <Topic imgUrl={hdd} title="Yo robot" 
            paragraph="Una agradable recopilacion de historias sobre los robots, lo recomiendo aunque no se relaciona con la pelicula"/>
            <Topic imgUrl={placa} title="El neuromante " 
            paragraph="Uno de los pilares del cyberpunk que recomiendo leer si eres fan de este genero"/>
            <Topic imgUrl={gpu} title="Altered carbon" 
            paragraph="Un detective en una ciudad del futuro en la que la inmortalidad existe, que puede salir mal"/>
        </div>
    );
}

export default Books;