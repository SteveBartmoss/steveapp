import React, { useEffect } from "react";
import "../App.css";
import Pie from "../component/Pie";
import DivBaner from "../component/DivBaner";
import FlexDiv from "../component/Contenedores/FlexDiv";
import SquareDiv from "../component/Contenedores/SquareDiv";
import CardDiv from "../component/Contenedores/CardDiv";
import { DivSection1, DivSection2, Paper } from "../component/Contenedores/Cajas";

function Home() {

    useEffect(() => {
        document.title = "stevechambitas"
    }, []);

    return (
        <>
            <Paper>
                <DivBaner name="Baner" />
                <DivSection1>
                    <FlexDiv>
                        <h1 className="title-1">Videos con mas visitas</h1>
                        <p className="p-main">
                            Algunos de los videos mas populares del canal,
                            escoge uno y pasa un buen rato mientras obtienes
                            algo de informacion.
                        </p>
                    </FlexDiv>

                    <SquareDiv>

                        <CardDiv>
                            <h1 className="title1">Borrar System32</h1>
                            <p className="content-curso">
                                La popular broma de borrar System32 para que tu pc
                                sea mas rapida puede generar mas problemas de lo
                                que crees
                            </p>
                            <a href="https://www.youtube.com/watch?v=QsPAVmQFnUQ" rel="noopener noreferrer" className="dumix-btn" target="_blank">Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1 className="title1">Fantasmas de pacman</h1>
                            <p className="content-curso">
                                El popular juego guarda algunos secretos sobre el
                                comportamiento de sus enemigos
                            </p>
                            <a href="https://www.youtube.com/watch?v=XLCuuMvgbec" rel="noopener noreferrer" className="dumix-btn" target="_blank">Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1 className="title1">CPU multi nucleo</h1>
                            <p className="content-curso">
                                Los procesadores tienen diferentes propiedades y una
                                de ellas es el numero de nucleos que tiene
                            </p>
                            <a href="https://www.youtube.com/watch?v=AuPJ8kL-iLs" rel="noopener noreferrer" className="dumix-btn" target="_blank">Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1 className="title1">Librerias</h1>
                            <p className="content-curso">
                                Las librerias de programacion son un tema recurrente dentro
                                de la programacion
                            </p>
                            <a href="https://www.youtube.com/watch?v=V4ZxnSYly-Y" rel="noopener noreferrer" className="dumix-btn" target="_blank">Ir al video</a>
                        </CardDiv>

                    </SquareDiv>
                </DivSection1>

                <DivSection2>
                    <FlexDiv>
                        <h1 className="title-1">Rows And Colums</h1>
                        <p className="p-main">
                            Algunos de los videos mas populares del canal,
                            escoge uno y pasa un buen rato mientras obtienes
                            algo de informacion.
                        </p>
                    </FlexDiv>

                    <SquareDiv>

                        <CardDiv>
                            <h1 className="title1">Juegos early access</h1>
                            <p className="content-curso">
                                Los early access pueden ser una gran
                                oportunidad pero tambien pueden representar un riesgo
                                para tu cartera
                            </p>
                            <div className="center">
                                <a className="dumix-btn" href="rows/rc3">Ver articulo</a>
                            </div>
                        </CardDiv>

                        <CardDiv>
                            <h1 className="title1">Una nueva esperanza</h1>
                            <p className="content-curso">
                                En este mundo de juegos triple A los indie son
                                aire fresco con nuevas mecanicas o mejores historias
                            </p>
                            <div className="center">
                                <a className="dumix-btn" href="rows/rc4">Ver articulo</a>
                            </div>
                        </CardDiv>

                        <CardDiv>
                            <h1 className="title1">La gama alta</h1>
                            <p className="content-curso"> Actualmente la mayoria de usuarios de pc tiene
                                la idea de que se debe llegar a la gama alta del pc gaming
                            </p>
                            <div className="center">
                                <a className="dumix-btn" href="rows/rc1">Ver articulo</a>
                            </div>
                        </CardDiv>

                        <CardDiv>
                            <h1 className="title1">16 de ram </h1>
                            <p className="content-curso">
                                Antes 16 gigas de ram era una gloria para
                                la mayoria de personas pero ahora ya no es la misma
                                historia
                            </p>
                            <div className="center">
                                <a className="dumix-btn" href="rows/rc5">Ver articulo</a>
                            </div>
                        </CardDiv>

                    </SquareDiv>
                </DivSection2>

                <DivSection1>
                    <FlexDiv>
                        <h1 className="title-1">Videos con pocas reproducciones</h1>
                        <p className="p-main">
                            Algunos de los videos que no tienen tanto
                            exito pero que podrian gustarte,
                            escoge uno y pasa un buen rato.
                        </p>
                    </FlexDiv>
                    <SquareDiv>

                        <CardDiv>
                            <h1 className="title1">Mudos de Minecraft</h1>
                            <p className="content-curso">
                                La generacion de los mundos de Minecraft
                                puede que te soprenda al tratarse de un proceso
                                algo complejo
                            </p>
                            <a className="dumix-btn" href="https://www.youtube.com/watch?v=6gle9QkZpbI" rel="noopener noreferrer" target="_blank">Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1 className="title1">Que es el lag</h1>
                            <p className="content-curso">
                                Esa ira que se siente cuando tu personaje
                                deja de moverse y todos parecen flahs
                            </p>
                            <a className="dumix-btn" href="https://www.youtube.com/watch?v=HizfLah3KGE" rel="noopener noreferrer" target="_blank">Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1 className="title1">phising</h1>
                            <p className="content-curso">
                                El test para saber que pan eres puede
                                no ser tan inofensivo como crees
                            </p>
                            <a className="dumix-btn" href="https://www.youtube.com/watch?v=KJD8Sq9O1ps" rel="noopener noreferrer" target="_blank">Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1 className="title1">HDD lento</h1>
                            <p className="content-curso">
                                Los discos mecanicos tienen gran
                                capacidad pero son demasiado lentos
                            </p>
                            <a className="dumix-btn" href="https://www.youtube.com/watch?v=Vdb4jy2NQPk" rel="noopener noreferrer" target="_blank">Ir al video</a>
                        </CardDiv>

                    </SquareDiv>
                </DivSection1>

                <DivSection2>
                    <FlexDiv>
                        <h1 className="title-1">Reviews mas Recientes</h1>
                        <p className="p-main">
                            Opiniones personales sobre algunos juegos que no
                            tienen la intencion de ofender o menospreciar,
                            si no solo informar y pasar un buen rato.
                        </p>
                    </FlexDiv>
                    <SquareDiv>

                        <CardDiv>
                            <h1 className="title1">Papers Please</h1>
                            <p className="content-curso">
                                Un entrenido indie que implementa buenas
                                mecanicas y tiene una historia interesante
                            </p>
                            <a className="dumix-btn" href="https://www.youtube.com/watch?v=RLAiWG8Ysds&list=PL54hUsqjhNIbL4g55Uo0I1mDrH71tCcJy&index=6" rel="noopener noreferrer" target="_blank">Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1 className="title1">Death Stranding</h1>
                            <p className="content-curso">
                                Al principio crei que era un uber simulator
                                pero luego me lleve una gran sorpresa
                            </p>
                            <a className="dumix-btn" href="https://www.youtube.com/watch?v=TWe5LETi3SM&list=PL54hUsqjhNIbL4g55Uo0I1mDrH71tCcJy&index=5" rel="noopener noreferrer" target="_blank">Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1 className="title1">Need for Speed</h1>
                            <p className="content-curso">
                                Esperaba que este fuera un digno sucesor de
                                la saga under ground pero no fue asi
                            </p>
                            <a className="dumix-btn" href="https://www.youtube.com/watch?v=jmLM6DvAn84&list=PL54hUsqjhNIbL4g55Uo0I1mDrH71tCcJy&index=4" rel="noopener noreferrer" target="_blank">Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1 className="title1">Sunset Overdrive</h1>
                            <p className="content-curso">
                                Un juego que no es tan valorado como
                                deberia ya que tiene algo que mostrar
                            </p>
                            <a className="dumix-btn" href="https://www.youtube.com/watch?v=Ip7WDHnbB5s&list=PL54hUsqjhNIbL4g55Uo0I1mDrH71tCcJy&index=3" rel="noopener noreferrer" target="_blank">Ir al video</a>
                        </CardDiv>

                    </SquareDiv>
                </DivSection2>

                <DivSection1>
                    <FlexDiv>
                        <h1 className="title-1">Unete al servidor de discor</h1>
                        <p className="p-main">
                            Entra en el canal para conocer mas sobre temas de
                            programacion, informatica o sobre juegos.
                        </p>
                    </FlexDiv>

                    <center>
                        <img className="img-disc" src="/Assets/disc.png" alt="discimg" />
                    </center>
                    <center>
                        <a className="dumix-btn" href="https://discord.gg/QTdVBq5Q9r" rel="noopener noreferrer" target="_blank" >Ir al servidor</a>
                    </center>

                </DivSection1>

                <DivSection2>
                    <FlexDiv>
                        <h1 className="title-1">Dumix</h1>
                        <p className="p-main">
                            Una seccion dedicada a tratar temas de linux
                            para que las personas puedan estar relacionadas
                            con este sistema operativo que tiene mucho para
                            ofrecer
                        </p>
                    </FlexDiv>
                </DivSection2>

                <DivSection1>
                    <FlexDiv>
                        <h1 className="title-1">Have Fun</h1>
                        <p className="p-main">
                            Diviertete un poco con estas aplicaciones que
                            te haran pasar un buen rato o simplemente prueba
                            estas implementaciones de diferentes apis
                        </p>
                    </FlexDiv>
                </DivSection1>

                <DivSection2>
                    <FlexDiv>
                        <h1 className="title-1">Steve labs</h1>
                        <p className="p-main">
                            Visita la seccion de cursos para aprender mas
                            sobre temas relacionados a la programacion y
                            la informatica
                        </p>
                    </FlexDiv>
                </DivSection2>

                <DivSection1>
                    <FlexDiv>
                        <h1 className="title-1">Web Masters</h1>
                        <p className="p-main">
                            En esta seccion encontraras articulos relacionados al
                            desarrollo web, temas de programacion web y algunos
                            cursos sobre el desarrollo de apliaciones web que
                            te serviran
                        </p>
                    </FlexDiv>
                </DivSection1>

            </Paper>
            <Pie />
        </>
    );
}

export default Home;