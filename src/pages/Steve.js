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
                <div className="div-menu-item">
                    <div className="div-flex-item">
                        <div className="item-mid">
                            <h1 className="title1">Soobre steve</h1>
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
                        <Grid />

                        <Data imge={"/Assets/music.png"} title="Mi perfil de spotify"
                            paragrap="Si quieres saber que tipo de musica escuho o dar una vuelta mis playlist de spotify tienes un enlace a mi perfil
                            para que puedas seguirme, quizas algunas de mis playlist te agraden"
                            url="https://open.spotify.com/user/31oqe6wxs3fjglyrintoskfe342u?si=33e8b9d8974346b4"
                        />

                        <Data imge={"/Assets/arcade.png"} title="Mi perifl de steam"
                            paragrap="Si quires agregarme en steam para jugar o para ver mi biblioteca de juegos o las resenas de titulos que he jugado
                            puedes seguirme con el enlace a mi perfil que aparece a continuacion"
                            url="https://steamcommunity.com/id/tonyhallan/"
                        />

                        <Stiker imge={"/Assets/steveA.png"} title="PC Check Actual"
                            paragrap="El pc de edicion y para jugar de steve no resulta tan potente como el de otros creadores top, pero tiene 
                            lo necesario para que se pueda jugar decentemente y tambien para crear los videos necesarios. A continuacion
                            se describen los componentes que lleva: 
                            GPU: Radeon 
                            CPU: Ryzen
                            MotherBoard:
                            RAM: 2x8gigas,
                            HDD: 1x1tb, 1x2tb"
                        />


                    </div>
                    <div className="item-lateral">
                        <h1 className="title1">Estado: hackeando a la nasa</h1>
                    </div>
                </div>
            </div>
            <div className="grid-steve">
                <div className="main-contetn">
                    <Actividad juego={"border lands"} trabajo={"pagina canal"} estudio={"react"} review={"papers please"} />

                    <div className="biblio">
                        <p>Actualmente estudiante de ingenieria en sistemas con cero porciento de probabilidades
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


                    <Grid />

                    <Data imge={"/Assets/music.png"} title="Mi perfil de spotify"
                        paragrap="Si quieres saber que tipo de musica escuho o dar una vuelta mis playlist de spotify tienes un enlace a mi perfil
                para que puedas seguirme, quizas algunas de mis playlist te agraden"
                        url="https://open.spotify.com/user/31oqe6wxs3fjglyrintoskfe342u?si=33e8b9d8974346b4"
                    />

                    <Data imge={"/Assets/arcade.png"} title="Mi perifl de steam"
                        paragrap="Si quires agregarme en steam para jugar o para ver mi biblioteca de juegos o las resenas de titulos que he jugado
                puedes seguirme con el enlace a mi perfil que aparece a continuacion"
                        url="https://steamcommunity.com/id/tonyhallan/"
                    />


                    <Stiker imge={"/Assets/steveA.png"} title="PC Check Actual"
                        paragrap="El pc de edicion y para jugar de steve no resulta tan potente como el de otros creadores top, pero tiene 
                lo necesario para que se pueda jugar decentemente y tambien para crear los videos necesarios. A continuacion
                se describen los componentes que lleva: 
                GPU: Radeon 
                CPU: Ryzen
                MotherBoard:
                RAM: 2x8gigas,
                HDD: 1x1tb, 1x2tb"
                    />

                </div>

                <Lateral />

            </div>
            <div className="Contenedor">

            </div>
            <Pie />
        </>

    );
}

export default Steve;
