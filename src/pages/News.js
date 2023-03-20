import React from "react";
import "../App.css";
import Stiker from "../component/Stiker";
import need from "../img/heatminiatura.png";
import Pie from "../component/Pie";
import real from "../img/realman.jpg"
import lab from "../img/labs.png"

function News(){
    return(
        <>
        <div className="Contenedor">
            <h1 className="title1">Seccion mas reciente</h1>
            <Stiker imge={need} title="Opinion sobre videojuegos"
                paragrap="Seccion del canal en el que se comparte la opinion de steve sobre los juegos, opinando sobre
                los graficos, la banda sonora, las mecanicas, la historia y otros aspectos para que la gente vea un punto 
                de vista sobre el juego y decida si le interesa el juego o mejor pasa de el"
            />
            <h1 className="title1">Proximanente</h1>

            <Stiker imge={real} title="The real man dont click"
                paragrap="El camino para convertirse en un usuario de linux completo no es facil pero es el camino que hay
                que seguir, explorar algo diferente es una buen forma de obtener conocimiento y quiza obtener un nuevo gusto 
                esta es la historia de las cosas que tuve que aprender y de los fallos que cometi durante mi paso de windows a
                linux. Lograre convertirme en un linuxero completo (con barba desarrollando en vim) o fallare mi mision y regresare
                al lado oscuro de lo usarios de windows"
            />

            <Stiker imge={lab} title="Stevelabs"
                paragrap="Tutoriales de un chico que no es precisamente un hacker/desarrollador Senior o simplemente
                un verdadero erudito de la programacion pero comparte lo que sabe y que quisa pueda servirte"
            />

            <Stiker imge={need} title="Rows and Colums"
                paragrap="Una seccion mas tranquila done compartire opiones sobre temas, reflexiones o simplemente alguna idea
                sobre un tema, no tiene el animo de influenciar a la gente ni de ser tomadas como una ley o la verdad absoluta
                solo un contenido mas simple que permitira escribir un guion que no precisamente busca tener que informar a las
                persona si no poder entretener a los usuarios"
            />

            <Stiker imge={need} title="True history"
                paragrap="La historia de le tecnologia puede ser interesante y siempre en bueno saber que hay detras de lo que
                usamos cotidianamente, en esta seccion contare algunas historias sobre como surguieron programas especificos o 
                historias relacionadas con la computacion que tengan una parte interesante para conocer."
            />

            <Stiker imge={need} title="Its free"
                paragrap="Las ventajas del software libre no solo son mayor control sobre tus dato y tu informacion si no que
                ademas es gratis, como una contribucion no tan buena a la comunidad de gnu probare y recomendare programas de gnu
                para tener una alternativa a la aplicacion de pago que se usa contidianamente o que se suele usar en la industria
                con esto no solo se vuelve popular el software libre si no que tu bolsillo tambien se vera beneficiado por el ahorro"
            />

            <Stiker imge={need} title="Distro Runner"
                paragrap="El camino del lado luminoso del software no es simple pero es el camino que hay que recorrer pero esta
                seccion busca ayudar a los novatos que se sienten abrumados por la cantidad de distribuciones que existen que utilizan
                el kernel de linux, por eso probare una distribucion de linux y desde un punto de vista de novato puntuare la dificultad
                que presenta usar la distribucion, tambien dare la opinion sobre el aspecto de la distribucion"
            />

        </div>
        <Pie/>
        </>
    );
}

export default News;