import React from "react";
import "../App.css";
import Stiker from "../component/Stiker";
import ban from "../img/baner canal.png";
import Pie from "../component/Pie";
import ChangeLog from "./changeLog";
import { useEffect } from "react";



function About() {

    useEffect(()=>{
        document.title = "stevechambitas";
    },[]);
    return (
        <>
            <div className="contenedor-about">

                <Stiker imge={"/Assets/perfil2.jpg"} title="Acerca de steve chambitas"
                    paragrap="Steve chambitas es un proyecto que tiene como objetivo dar a conocer algunos temas de programacion y de informatica, sin el rigor o formalidad
                que se maneja en una carrera. La idea es presentar los temas de manera simple para que las personas se interesen por la informatica, al mostrar
                los temas de formas mas formal tambien se vuelve mas complejo pudiendo abrumar a las personas o incluso asustarlas generando desinformacion.
                Dedio a temas relacionados con la escuela, el tranajo y personales los videos se suben uno por mes pero se espera que pronto 
                se pueda mejorar esto para que el contenido sea mas constante. Se tienen planeadas diferentes secciones que pronto se mostraran
                en la pagina de news, con una descripcion de la seccion, el tiempo que falta para agregarse al canal y el porcentaje que tiene de avance
                espero que pronto el canal se vuelva mas atractivo para las personas"
                />

                <div className="contenedor-logros">
                    <h1 className="title1">Secciones del canal</h1>

                    <Stiker imge={ban} title="Videos informativos"
                        paragrap="Videos en los que se busca dar a conocer sobre un tema en especifico de programacion, informatica o de hardware
                        tiene un gamaplay de fondo para que poder ambientar el video sin tener que recurrir a paginas de stock de fotos 
                        y tambien para evitar que marcen copy en el video. Me gustaria usar imagenes mas representativas para los videos
                        pero lamentablemente mi presupuesto no es tanto pero el contenido siempre busca ser util para los demas."
                    />

                    <Stiker imge={"/Assets/sunsetMiniatura.jpg"} title="Reviews de juegos"
                        paragrap="Comparto mi opinion sobre un juego en una lista de los elementos de un juego como puede ser sus graficos,
                        la historia, la jugabilidad, la banda sonora entre otros, no considero ser un profesional del tema pero si trato de dar inforimaicon
                        util y de mejorar continuamente, ya sea mis habilidades de edicion, mis giones y mi narracion. Si eres fan de algun juego sobre el que opine
                        tampoco te lo tomes enserio al final puedes disfrutar el juego que quieras :)"
                    />

                    <Stiker imge={"/Assets/rwMin.jpg"} title={"Row And Colums"}
                        paragrap="Una seccion donde compartire una refleccion u opinion sobre algun tema con lo cual no se busca crear polemica 
                        sino crear un contenido mas variado y que se pueda escuchar de fondo al hacer una activiad o simplemente para pasaf el rato,
                        tambien me ayudara a tener mas contenido en los tiempos ajustados de la escuela y el trabajo pero debe verse siempre con la ide
                        de que es contenido para entretener y no busca influenciar de ninguna manera a los espectadores"
                    />

                    <Stiker imge={"/Assets/realman.jpg"} title={"The real man dont click"}
                        paragrap="Hace un tiempo empece a usar un sistema operativo basado e linux porque tenia que pasar una materia pero al interactuar
                        con este nuevo kernel me di cuenta de ciertas cosas, algnas buenas, otras desesperantes y unas cuantas divertidas por lo que me 
                        parecio buena idea contar mi experiencia de paso de windows a linux y hacer un poco de comedia por el camino, la idea del video no
                        es ofender y espero que nadie se sienta mal por los chistes o el lenguaje usado solo tomenlo con humor"
                    />

                </div>

            </div>
            <Pie />
        </>

    );
}

export default About;
