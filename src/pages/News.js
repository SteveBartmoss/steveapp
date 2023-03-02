import React from "react";
import "../App.css";
import Stiker from "../component/Stiker";
import need from "../img/heatminiatura.png";
import real from "../img/realmanMin.jpg";
import labs from "../img/labsMin.png";


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

            <Stiker imge={real} title="The real man dont click"
            paragrap="El camino para ser un linuxero no es facil pero es el camino que hay qye seguir
            lograre convertirme en un linuxero completo y fracasare en mi mision y volvere al lado 
            oscuro de windows" />

            <Stiker imge={labs} title="Stevelabs"
            paragrap="Tutoriales de un chico que no es precisamente un hacker/desarrollador Senior o simplemente
            un verdadero erudito de la programacion pero comparte lo que sabe y que quisa pueda servirte" />

        </div>
    );
}

export default News;