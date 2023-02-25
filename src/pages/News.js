import React from "react";
import "../App.css";
import Stiker from "../component/Stiker";
import need from "../img/heatminiatura.png";

function News(){
    return(
        <div className="Contenedor">
            <h1 className="title1">Seccion mas reciente</h1>
            <Stiker imge={need} title="Opinion sobre videojuegos"
                paragrap="Seccion del canal en el que se comparte la opinion de steve sobre los juegos, opinando sobre
                los graficos, la banda sonora, las mecanicas, la historia y otros aspectos para que la gente vea un punto 
                de vista sobre el juego y decida si le interesa el juego o mejor pasa de el"
            />
            <h1 className="title1">Proximanente</h1>
        </div>
    );
}

export default News;