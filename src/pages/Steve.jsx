import React, { useEffect } from "react";
import Stiker from "../component/Stiker";
import Data from "../component/Data";
import "../App.css";
import { Grid } from "../component/Grid";
import Portada from "../component/Portada";
import Actividad from "../component/Actividad";
import Lateral from "../component/LateralSteve";
import Pie from "../component/Pie";
import { BackExp, Expositor, GridPerfil, Paper, TitleExp } from "../component/Contenedores/Cajas";


function Steve() {
    useEffect(()=>{
        document.title = "stevechambitas"
    },[]);
    return (

        <>
            <Portada image={"/Assets/steveA.png"} />

            <div className="div-tags">
                <h1 className="tag">React</h1>
                <h1 className="tag">JavaScript</h1>
                <h1 className="tag">Linux</h1>
                <h1 className="tag">WebDeveloper</h1>
            </div>

            <Expositor>
                <Paper>
                    <BackExp>
                        <p className="content-curso">
                            “Algunas personas me han dicho que no creen que un pingüino
                            gordo encarne el espíritu de Linux, lo que me dice que nunca
                            han visto a un pingüino cabreado corriendo hacia ellos a más
                            de 100 millas por hora.”
                        </p>
                        <p className="content-curso">Linus Torvals</p>
                    </BackExp>
                </Paper>
            </Expositor>

            <GridPerfil>
                <div>
                    <Expositor>
                        <Paper>
                            <TitleExp>
                                <h1 className="title1">Acerca de steve</h1>
                            </TitleExp>
                            <BackExp>
                                <p className="content-curso">
                                    Estudiante de ingenieria en sistemas con cero
                                    porciento de probabilidadesde triunfar pero con el cien
                                    porciento de fe, uno de mis gustos es la cultura geek,
                                    me gustan las peliculas de super heroes, la ciencia
                                    ficcion, los videojuegos y los temas de programacion
                                    aunque en esto ultimo no soy tan bueno.
                                </p>
                            </BackExp>
                        </Paper>
                    </Expositor>

                    <Expositor>
                        <Paper>
                            <TitleExp>
                                <h1 className="title1">Lenguajes usados</h1>
                            </TitleExp>
                            <BackExp>
                                <img className="img-prog" src={"/Assets/java.png"} alt="imgLateral" />
                                <img className="img-prog" src={"/Assets/c.png"} alt="imgLateral" />
                                <img className="img-prog" src={"/Assets/c++.png"} alt="imgLateral" />
                                <img className="img-prog" src={"/Assets/py.png"} alt="imgLateral" />
                                <img className="img-prog" src={"/Assets/js.png"} alt="imgLateral" />
                            </BackExp>
                        </Paper>
                    </Expositor>

                    <Expositor>
                        <Paper>
                            <TitleExp>
                                <h1 className="title1">Bases de datos usadas</h1>
                            </TitleExp>
                            <BackExp>
                                <img className="img-prog" src={"/Assets/mysql.png"} alt="imgLateral" />
                                <img className="img-prog" src={"/Assets/sql.png"} alt="imgLateral" />
                                <img className="img-prog" src={"/Assets/mongo.png"} alt="imgLateral" />
                            </BackExp>
                        </Paper>
                    </Expositor>

                    <Expositor>
                        <Paper>
                            <TitleExp>
                                <h1 className="title1">Mi perfil de spotify</h1>
                            </TitleExp>
                            <BackExp>

                                <p className="Content">
                                    Si quieres saber que tipo de musica escuho
                                    o dar una vuelta mis playlist de spotify tienes un enlace a mi perfil
                                    para que puedas seguirme, quizas algunas de mis playlist te agraden
                                </p>
                                <a href="https://open.spotify.com/user/31oqe6wxs3fjglyrintoskfe342u?si=33e8b9d8974346b4" className="dumix-btn">Ir al enlace</a>
                            </BackExp>
                        </Paper>
                    </Expositor>

                    <Expositor>
                        <Paper>
                            <TitleExp>
                                <h1 className="title1">Mi perfil de steam</h1>
                            </TitleExp>
                            <BackExp>

                                <p className="Content">
                                    Si quires agregarme en steam para jugar o para ver mi
                                    biblioteca de juegos o las resenas de titulos que he jugado
                                    puedes seguirme con el enlace a mi perfil que aparece a
                                    continuacion
                                </p>
                                <a href="https://steamcommunity.com/id/tonyhallan/" className="dumix-btn">Ir al enlace</a>
                            </BackExp>
                        </Paper>
                    </Expositor>

                    <Expositor>
                        <Paper>
                            <TitleExp>
                                <h1 className="title1">Pc Check Actual</h1>
                            </TitleExp>
                            <BackExp>

                                <p className="Content">
                                    El pc de edicion y para jugar de steve no resulta
                                    tan potente como el de otros creadores top, pero tiene
                                    lo necesario para que se pueda jugar decentemente y
                                    tambien para crear los videos necesarios. A continuacion
                                    se describen los componentes que lleva:
                                    GPU: Radeon
                                    CPU: Ryzen
                                    MotherBoard:
                                    RAM: 2x8gigas,
                                    HDD: 1x1tb, 1x2tb
                                </p>
                            </BackExp>
                        </Paper>
                    </Expositor>

                    <Expositor>
                        <Paper>
                            <TitleExp>
                                <h1 className="title1">Lenguajes por aprender</h1>
                            </TitleExp>
                            <BackExp>
                                <p className="content-curso">
                                    Rust
                                    Python
                                </p>
                            </BackExp>
                        </Paper>
                    </Expositor>

                    <Expositor>
                        <Paper>
                            <TitleExp>
                                <h1 className="title1">Tecnologias que pienso aprender</h1>
                            </TitleExp>
                            <BackExp>
                                <p className="content-curso">
                                    Docker
                                    Next Js
                                    Express Js
                                    Clusters
                                </p>
                            </BackExp>
                        </Paper>
                    </Expositor>

                    <Expositor>
                        <Paper>
                            <TitleExp>
                                <h1 className="title1">Proyectos que tengo planeados</h1>
                            </TitleExp>
                            <BackExp>
                                <p className="content-curso">
                                    Crear un tablero
                                    Terminar los cursos de las paginas
                                    Crear un editr ligero
                                </p>
                            </BackExp>
                        </Paper>
                    </Expositor>

                </div>
                <div>
                    <Expositor>
                        <h1 className="title1">Manejador de versiones usado</h1>
                        <p>Github un clasico</p>
                        <h1 className="title1">Editor de codigo Favorito</h1>
                        <img className="img-prog" src={"/Assets/vscode.png"} alt="imgLateral" />
                        <h1 className="title1">Distribucion que usa actual mente</h1>
                        <img className="img-prog" src={"/Assets/ubuntu.png"} alt="imgLateral" />
                        <h1 className="title1">Lenguaje de programacion Favorito</h1>
                        <img className="img-prog" src={"/Assets/java.png"} alt="imgLateral" />
                        <h1 className="title1">Estado: hackeando a la nasa</h1>
                        <h1 className="title1">Horas de programacion:</h1>
                        <h1 className="title1">Meta de subs: </h1>
                        <div className="div-progres">
                            <h1 className="title1">Lenguajes de programacion que uso</h1>
                            <p className="Content">Y su porcentaje de uso</p>

                            <p className="Content">JavaScript 90%</p>
                            <div className="percent-bar">
                                <div className="percent-progres nine"></div>
                            </div>
                            <p className="Content">Python 10%</p>
                            <div className="percent-bar">
                                <div className="percent-progres ten"></div>
                            </div>
                            <p className="Content">C 10%</p>
                            <div className="percent-bar">
                                <div className="percent-progres ten"></div>
                            </div>
                            <p className="Content">Java 80%</p>
                            <div className="percent-bar">
                                <div className="percent-progres eigth"></div>
                            </div>

                        </div>
                    </Expositor>
                </div>

            </GridPerfil>

            <Pie />
        </>

    );
}

export default Steve;
