import React from "react";
import Stiker from "../component/Stiker";
import Data from "../component/Data";
import "../App.css";
import { Grid } from "../component/Grid";
import Portada from "../component/Portada";
import Actividad from "../component/Actividad";
import Lateral from "../component/LateralSteve";
import Pie from "../component/Pie";


function Steve() {
    return (

        <>
            <Portada image={"/Assets/steveA.png"} />
            <div className="Contenedor">
                <div>
                    <h1 className="title1">Programador</h1>
                    <p className="Content">Los codigos no siempre son como queremos
                        pero somos programadores, aceptamos lo que nos ofrecen y a veces
                        eso es suficiente</p>
                    <p className="Content">steve, techrunner</p>
                </div>
                <div className="div-tags">
                    <h1 className="tag">React</h1>
                    <h1 className="tag">JavaScript</h1>
                    <h1 className="tag">Linux</h1>
                    <h1 className="tag">WebDeveloper</h1>
                </div>

                <div className="div-bio">
                    <h1 className="title1">Acerca de steve</h1>
                    <p className="Content">Actualmente estudiante de ingenieria en sistemas con cero porciento de probabilidades
                        de triunfar pero con el cien porciento de fe, uno de mis gustos es la cultura geek por lo cual me
                        me gustan las peliculas de super heroes, la ciencia ficcion, los videojuegos y los temas de programacion
                        aunque en esto ultimo no soy tan bueno. Inicie mi canal de youtube para ayudarme a repasar temas de la
                        carrera y de paso podia compartir temas que me gustaban con otras personas teniendo la esperanza de que
                        otras personas se interesen por los temas de programacion, una de mis metas es poder fundar una academia en
                        linea para que las personas puedan acceder al conocimiento de manera facil y rapida esto aun queda muy lejos
                        y tenemos todo en contra pero hare lo que se pueda. Por esta razon inicia mi camino en youtube para empezar a
                        compartir informacion con otras personas pero poco a poco espero poder mudarme a mi propia plataforma.
                    </p>
                </div>

                <div className="div-menu-item">

                    <div className="div-flex-item">

                        <div className="div-min-article">
                            <h1 className="title1">Lenguajes de programcion usados</h1>
                            <div className="div-prog">
                                <img className="img-prog" src={"/Assets/java.png"} alt="imgLateral" />
                                <img className="img-prog" src={"/Assets/c.png"} alt="imgLateral" />
                                <img className="img-prog" src={"/Assets/c++.png"} alt="imgLateral" />
                                <img className="img-prog" src={"/Assets/py.png"} alt="imgLateral" />
                                <img className="img-prog" src={"/Assets/js.png"} alt="imgLateral" />
                            </div>
                        </div>

                        <div className="div-min-article">
                            <h1 className="title1">Conocimientos en bases de datos</h1>
                            <div className="div-prog">
                                <img className="img-prog" src={"/Assets/mysql.png"} alt="imgLateral" />
                                <img className="img-prog" src={"/Assets/sql.png"} alt="imgLateral" />
                                <img className="img-prog" src={"/Assets/mongo.png"} alt="imgLateral" />
                            </div>
                        </div>

                        <div className="div-min-article">
                            <h1 className="title1">Lenguaje de programacion Favorito</h1>
                            <div>
                                <img className="img-prog" src={"/Assets/java.png"} alt="imgLateral" />
                            </div>
                        </div>

                        <div className="div-min-article">
                            <h1 className="title1">Editor de codigo Favorito</h1>
                            <div>
                                <img className="img-prog" src={"/Assets/vscode.png"} alt="imgLateral" />
                            </div>
                        </div>

                        <div className="div-min-article">
                            <h1 className="title1">Distribucion que usa actual mente</h1>
                            <div>
                                <img className="img-prog" src={"/Assets/ubuntu.png"} alt="imgLateral" />
                            </div>
                        </div>

                        <div className="div-min-article">
                            <h1 className="title1">Manejador de versiones usado</h1>
                            <p>Github un clasico</p>
                        </div>

                    </div>
                    <div className="item-lateral">
                        <h1 className="title1">Estado: hackeando a la nasa</h1>
                        <h1 className="title1">Horas de programacion:</h1>
                        <h1 className="title1">Meta de subs: </h1>
                        
                    </div>
                </div>

                <Grid />

                <Actividad juego={"border lands"} trabajo={"pagina canal"} estudio={"react"} review={"papers please"} />

                <div className="item-mid">
                    <h1 className="title1">Mi perfil de spotify</h1>
                    <p className="Content">Si quieres saber que tipo de musica escuho o dar una vuelta mis playlist de spotify tienes un enlace a mi perfil
                        para que puedas seguirme, quizas algunas de mis playlist te agraden
                    </p>
                    <a className="dumix-btn">Ir al enlace</a>
                </div>

                <div className="item-mid">
                    <h1 className="title1">Mi perfil de steam</h1>
                    <p className="Content">Si quires agregarme en steam para jugar o para ver mi biblioteca de juegos o las resenas de titulos que he jugado
                        puedes seguirme con el enlace a mi perfil que aparece a continuacion
                    </p>
                    <a className="dumix-btn">Ir al enlace</a>
                </div>

                <div className="item-mid">
                    <h1 className="title1">Pc Check Actual</h1>
                    <p className="Content">El pc de edicion y para jugar de steve no resulta tan potente como el de otros creadores top, pero tiene
                        lo necesario para que se pueda jugar decentemente y tambien para crear los videos necesarios. A continuacion
                        se describen los componentes que lleva:
                        GPU: Radeon
                        CPU: Ryzen
                        MotherBoard:
                        RAM: 2x8gigas,
                        HDD: 1x1tb, 1x2tb</p>
                </div>

            </div>
            <div className="grid-steve">
                <div className="main-contetn">
                    <Actividad juego={"border lands"} trabajo={"pagina canal"} estudio={"react"} review={"papers please"} />

                </div>
            </div>
            <div className="Contenedor">

            </div>
            <Pie />
        </>

    );
}

export default Steve;
