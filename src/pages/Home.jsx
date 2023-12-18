import React, { useEffect } from "react";
import "../App.css";
import Pie from "../component/Pie";
import DivBaner from "../component/DivBaner";
import Section1 from "../component/Contenedores/Section1";
import FlexDiv from "../component/Contenedores/FlexDiv";
import SquareDiv from "../component/Contenedores/SquareDiv";
import CardDiv from "../component/Contenedores/CardDiv";
import Section2 from "../component/Contenedores/Section2";
import { Paper } from "../component/Contenedores/Cajas";

function Home() {

    useEffect(() => {
        document.title = "stevechambitas"
    }, []);

    return (
        <>
            <Paper>
                <DivBaner name="Baner" />
                <Section1>
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
                            <a href="https://www.youtube.com/watch?v=QsPAVmQFnUQ" className="dumix-btn">Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1 className="title1">Fantasmas de pacman</h1>
                            <p className="content-curso">
                                El popular juego guarda algunos secretos sobre el
                                comportamiento de sus enemigos
                            </p>
                            <a href="https://www.youtube.com/watch?v=XLCuuMvgbec" className="dumix-btn">Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1 className="title1">CPU multi nucleo</h1>
                            <p className="content-curso">
                                Los procesadores tienen diferentes propiedades y una
                                de ellas es el numero de nucleos que tiene
                            </p>
                            <a href="https://www.youtube.com/watch?v=AuPJ8kL-iLs" className="dumix-btn">Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1 className="title1">Librerias</h1>
                            <p className="content-curso">
                                Las librerias de programacion son un tema recurrente dentro
                                de la programacion
                            </p>
                            <a href="https://www.youtube.com/watch?v=V4ZxnSYly-Y" className="dumix-btn">Ir al video</a>
                        </CardDiv>

                    </SquareDiv>

                </Section1>

                <Section2>
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

                </Section2>

                <Section1>
                    <FlexDiv>
                        <h1 className="title-1">Videos con pocas reproducciones</h1>
                        <p className="p-main">
                            Algunos de los videos mas que no tienen tanto
                            exito pero que podrian gustarte,
                            escoge uno y pasa un buen rato.
                        </p>
                    </FlexDiv>

                    <SquareDiv>

                        <CardDiv>
                            <h1>Borrar System32</h1>
                            <p>
                                La popular broma de borrar System32 para que tu pc
                                sea mas rapida puede generar mas problemas de lo
                                que crees
                            </p>
                            <a href="#">Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1>Borrar System32</h1>
                            <p>
                                La popular broma de borrar System32 para que tu pc
                                sea mas rapida puede generar mas problemas de lo
                                que crees
                            </p>
                            <a href="#">Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1>Borrar System32</h1>
                            <p>
                                La popular broma de borrar System32 para que tu pc
                                sea mas rapida puede generar mas problemas de lo
                                que crees
                            </p>
                            <a href="#">Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1>Borrar System32</h1>
                            <p>
                                La popular broma de borrar System32 para que tu pc
                                sea mas rapida puede generar mas problemas de lo
                                que crees
                            </p>
                            <a href="#">Ir al video</a>
                        </CardDiv>

                    </SquareDiv>

                </Section1>

                <Section2>
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
                            <h1>Borrar System32</h1>
                            <p>
                                La popular broma de borrar System32 para que tu pc
                                sea mas rapida puede generar mas problemas de lo
                                que crees
                            </p>
                            <a href="#">Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1>Borrar System32</h1>
                            <p>
                                La popular broma de borrar System32 para que tu pc
                                sea mas rapida puede generar mas problemas de lo
                                que crees
                            </p>
                            <a href="#">Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1>Borrar System32</h1>
                            <p>
                                La popular broma de borrar System32 para que tu pc
                                sea mas rapida puede generar mas problemas de lo
                                que crees
                            </p>
                            <a href="#">Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1>Borrar System32</h1>
                            <p>
                                La popular broma de borrar System32 para que tu pc
                                sea mas rapida puede generar mas problemas de lo
                                que crees
                            </p>
                            <a href="#">Ir al video</a>
                        </CardDiv>

                    </SquareDiv>
                </Section2>

                <Section1>
                    <FlexDiv>
                        <h1 className="title-1">Unete al servidor de discor</h1>
                        <p className="p-main">
                            Entra en el canal para conocer mas sobre temas de
                            programacion, informatica o sobre juegos.
                        </p>
                    </FlexDiv>
                    <center>
                        <img className="img-disc" src="/Assets/disc.png" />
                    </center>
                </Section1>

                <Section2>
                    <FlexDiv>
                        <h1 className="title-1">Dumix</h1>
                        <p className="p-main">
                            Una seccion dedicada a tratar temas de linux
                            para que las personas puedan estar relacionadas
                            con este sistema operativo que tiene mucho para
                            ofrecer
                        </p>
                    </FlexDiv>
                </Section2>

                <Section1>
                    <FlexDiv>
                        <h1 className="title-1">Have Fun</h1>
                        <p className="p-main">
                            Diviertete un poco con estas aplicaciones que
                            te haran pasar un buen rato o simplemente prueba
                            estas implementaciones de diferentes apis
                        </p>
                    </FlexDiv>
                </Section1>

                <Section2>
                    <FlexDiv>
                        <h1 className="title-1">Steve labs</h1>
                        <p className="p-main">
                            Visita la seccion de cursos para aprender mas
                            sobre temas relacionados a la programacion y
                            la informatica
                        </p>
                    </FlexDiv>
                </Section2>

                <Section1>
                    <FlexDiv>
                        <h1 className="title-1">Web Masters</h1>
                        <p className="p-main">
                            En esta seccion encontraras articulos relacionados al
                            desarrollo web, temas de programacion web y algunos
                            cursos sobre el desarrollo de apliaciones web que
                            te serviran
                        </p>
                    </FlexDiv>
                </Section1>
            </Paper>
            <Pie />
        </>
    );
}

export default Home;