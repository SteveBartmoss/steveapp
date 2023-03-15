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

            <Stiker imge={need} title="The real man dont click"
                paragrap="El camino para convertirse en un usuario de linux completo no es facil pero es el camino que hay
                que seguir, explorar algo diferente es una buen forma de obtener conocimiento y quiza obtener un nuevo gusto 
                esta es la historia de las cosas que tuve que aprender y de los fallos que cometi durante mi paso de windows a
                linux. Lograre convertirme en un linuxero completo (con barba desarrollando en vim) o fallare mi mision y regresare
                al lado oscuro de lo usarios de windows"
            />

            <Stiker imge={need} title="Stevelabs"
                paragrap="Tutoriales de un chico que no es precisamente un hacker/desarrollador Senior o simplemente
                un verdadero erudito de la programacion pero comparte lo que sabe y que quisa pueda servirte"
            />

            <Stiker imge={need} title="Rows and Colums"
                paragrap="Una seccion mas tranquila done compartire opiones sobre temas, reflexiones o simplemente alguna idea
                sobre un tema, no tiene el animo de influenciar a la gente ni de ser tomadas como una ley o la verdad absoluta
                solo un contenido mas simple que permitira escribir un guion que no precisamente busca tener que informar a las
                persona si no poder entretener a los usuarios"
            />

        </div>
    );
}

export default News;