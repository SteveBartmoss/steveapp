import React, { useEffect, useState } from "react";
import "../App.css";
import Pie from "../component/Pie";
import DivBaner from "../component/DivBaner";
import FlexDiv from "../component/Contenedores/FlexDiv";
import SquareDiv from "../component/Contenedores/SquareDiv";
import CardDiv from "../component/Contenedores/CardDiv";
import { Div70, DivCenter, DivColum, DivRow, DivSection1, DivSection2, Paper } from "../component/Contenedores/Cajas";
import { Card, CardFooter, CardHeader, CardText, CardTitle } from "../component/Card";

function Home() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        console.log(width);
        console.log(height);
    }


    useEffect(() => {
        document.title = "stevechambitas"
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
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

                    <Div70>
                        <DivRow>
                            <DivColum>
                                <Card>
                                    <DivRow>
                                        <DivColum>
                                            <CardHeader>
                                                <p>steve</p>
                                                <p>18/01/21</p>
                                            </CardHeader>
                                            <CardTitle>Borrar System32</CardTitle>
                                            <CardText>
                                                La popular broma de borrar System32 para que tu pc
                                                sea mas rapida puede generar mas problemas de lo
                                                que crees
                                            </CardText>
                                            <CardFooter>
                                                <a href="https://www.youtube.com/watch?v=QsPAVmQFnUQ" rel="noopener noreferrer" className="dumix-btn" target="_blank">Ir al video</a>
                                            </CardFooter>
                                        </DivColum>
                                        <DivColum>
                                            <img className="card-image" src="/Assets/music.png" alt="discimg" />
                                        </DivColum>
                                    </DivRow>
                                </Card>

                                <Card>
                                    <DivRow>
                                        <DivColum>
                                            <CardHeader>
                                                <p>steve</p>
                                                <p>7/04/21</p>
                                            </CardHeader>
                                            <CardTitle>Fantasmas de pacman</CardTitle>
                                            <CardText>
                                                El popular juego guarda algunos secretos sobre el
                                                comportamiento de sus enemigos
                                            </CardText>
                                            <CardFooter>
                                                <a href="https://www.youtube.com/watch?v=XLCuuMvgbec" rel="noopener noreferrer" className="dumix-btn" target="_blank">Ir al video</a>
                                            </CardFooter>
                                        </DivColum>
                                        <DivColum>
                                            <img className="card-image" src="/Assets/music.png" alt="discimg" />
                                        </DivColum>
                                    </DivRow>
                                </Card>

                            </DivColum>

                            <DivColum>
                                <Card>
                                    <DivRow>
                                        <DivColum>
                                            <CardHeader>
                                                <p>steve</p>
                                                <p>18/01/21</p>
                                            </CardHeader>
                                            <CardTitle>CPU multi nucleo</CardTitle>
                                            <CardText>
                                                Los procesadores tienen diferentes propiedades y una
                                                de ellas es el numero de nucleos que tienen
                                            </CardText>
                                            <CardFooter>
                                                <a href="https://www.youtube.com/watch?v=AuPJ8kL-iLs" rel="noopener noreferrer" className="dumix-btn" target="_blank">Ir al video</a>
                                            </CardFooter>
                                        </DivColum>
                                        <DivColum>
                                            <img className="card-image" src="/Assets/music.png" alt="discimg" />
                                        </DivColum>
                                    </DivRow>
                                </Card>

                                <Card>
                                    <DivRow>
                                        <DivColum>
                                            <CardHeader>
                                                <p>steve</p>
                                                <p>18/01/21</p>
                                            </CardHeader>
                                            <CardTitle>Librerias</CardTitle>
                                            <CardText>
                                                Las librerias de programacion son un tema recurrente dentro
                                                de la programacion
                                            </CardText>
                                            <CardFooter>
                                                <a href="https://www.youtube.com/watch?v=V4ZxnSYly-Y" rel="noopener noreferrer" className="dumix-btn" target="_blank">Ir al video</a>
                                            </CardFooter>
                                        </DivColum>
                                        <DivColum>
                                            <img className="card-image" src="/Assets/music.png" alt="discimg" />
                                        </DivColum>
                                    </DivRow>
                                </Card>

                            </DivColum>

                        </DivRow>
                    </Div70>

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

                    <Div70>
                        <DivRow>
                            <DivColum>
                                <Card>
                                    <DivRow>

                                        <DivColum>
                                            <CardHeader>
                                                <p>steve</p>
                                                <p>18/01/21</p>
                                            </CardHeader>
                                            <CardTitle>Juegos early access</CardTitle>
                                            <CardText>
                                                Los early access pueden ser una gran
                                                oportunidad pero tambien pueden representar un riesgo
                                                para tu cartera
                                            </CardText>
                                            <CardFooter>
                                                <a href="rows/rc3" className="dumix-btn" >Ver articulo</a>
                                            </CardFooter>
                                        </DivColum>

                                        <DivColum>
                                            <img className="card-image" src="/Assets/music.png" alt="discimg" />
                                        </DivColum>
                                    </DivRow>
                                </Card>

                                <Card>
                                    <DivRow>
                                        <DivColum>
                                            <CardHeader>
                                                <p>steve</p>
                                                <p>18/01/21</p>
                                            </CardHeader>
                                            <CardTitle>Una nueva esperanza</CardTitle>
                                            <CardText>
                                                En este mundo de juegos triple A los indie son
                                                aire fresco con nuevas mecanicas o mejores historias
                                            </CardText>
                                            <CardFooter>
                                                <a href="rows/rc4" className="dumix-btn" >Ver articulo</a>
                                            </CardFooter>
                                        </DivColum>

                                        <DivColum>
                                            <img className="card-image" src="/Assets/music.png" alt="discimg" />
                                        </DivColum>
                                    </DivRow>
                                </Card>
                            </DivColum>

                            <DivColum>
                                <Card>
                                    <DivRow>
                                        <DivColum>
                                            <CardHeader>
                                                <p>steve</p>
                                                <p>18/01/21</p>
                                            </CardHeader>
                                            <CardTitle>La gama alta</CardTitle>
                                            <CardText>
                                                Actualmente la mayoria de usuarios de pc tiene
                                                la idea de que se debe llegar a la gama alta del pc gaming
                                            </CardText>
                                            <CardFooter>
                                                <a href="rows/rc1" className="dumix-btn" >Ver articulo</a>
                                            </CardFooter>
                                        </DivColum>

                                        <DivColum>
                                            <img className="card-image" src="/Assets/music.png" alt="discimg" />
                                        </DivColum>
                                    </DivRow>
                                </Card>

                                <Card>
                                    <DivRow>
                                        <DivColum>
                                            <CardHeader>
                                                <p>steve</p>
                                                <p>18/01/21</p>
                                            </CardHeader>
                                            <CardTitle>16 de ram</CardTitle>
                                            <CardText>
                                                Antes 16 gigas de ram era una gloria para
                                                la mayoria de personas pero ahora ya no es la misma
                                                historia
                                            </CardText>
                                            <CardFooter>
                                                <a href="rows/rc5" className="dumix-btn" >Ver articulo</a>
                                            </CardFooter>
                                        </DivColum>

                                        <DivColum>
                                            <img className="card-image" src="/Assets/music.png" alt="discimg" />
                                        </DivColum>
                                    </DivRow>
                                </Card>
                            </DivColum>
                        </DivRow>

                    </Div70>

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

                    <Div70>
                        <DivRow>
                            <DivColum>
                                <Card>
                                    <DivRow>
                                        <DivColum>
                                            <CardHeader>
                                                <p>steve</p>
                                                <p>18/01/21</p>
                                            </CardHeader>
                                            <CardTitle>Mundos de Minecraft</CardTitle>
                                            <CardText>
                                                La generacion de los mundos de Minecraft
                                                puede que te soprenda al tratarse de un proceso
                                                algo complejo
                                            </CardText>
                                            <CardFooter>
                                                <a className="dumix-btn" href="https://www.youtube.com/watch?v=6gle9QkZpbI" rel="noopener noreferrer" target="_blank">Ir al video</a>
                                            </CardFooter>
                                        </DivColum>

                                        <DivColum>
                                            <img className="card-image" src="/Assets/music.png" alt="discimg" />
                                        </DivColum>
                                    </DivRow>
                                </Card>
                                <Card>
                                    <DivRow>
                                        <DivColum>
                                            <CardHeader>
                                                <p>steve</p>
                                                <p>18/01/21</p>
                                            </CardHeader>
                                            <CardTitle>Que es el lag</CardTitle>
                                            <CardText>
                                                Esa ira que se siente cuando tu personaje
                                                deja de moverse y todos parecen flash
                                            </CardText>
                                            <CardFooter>
                                                <a className="dumix-btn" href="https://www.youtube.com/watch?v=HizfLah3KGE" rel="noopener noreferrer" target="_blank">Ir al video</a>
                                            </CardFooter>
                                        </DivColum>

                                        <DivColum>
                                            <img className="card-image" src="/Assets/music.png" alt="discimg" />
                                        </DivColum>
                                    </DivRow>
                                </Card>
                            </DivColum>
                            <DivColum>
                                <Card>
                                    <DivRow>
                                        <DivColum>
                                            <CardHeader>
                                                <p>steve</p>
                                                <p>18/01/21</p>
                                            </CardHeader>
                                            <CardTitle>phising</CardTitle>
                                            <CardText>
                                                El test para saber que pan eres puede
                                                no ser tan inofensivo como crees
                                            </CardText>
                                            <CardFooter>
                                                <a className="dumix-btn" href="https://www.youtube.com/watch?v=KJD8Sq9O1ps" rel="noopener noreferrer" target="_blank">Ir al video</a>
                                            </CardFooter>
                                        </DivColum>

                                        <DivColum>
                                            <img className="card-image" src="/Assets/music.png" alt="discimg" />
                                        </DivColum>
                                    </DivRow>
                                </Card>
                                <Card>
                                    <DivRow>
                                        <DivColum>
                                            <CardHeader>
                                                <p>steve</p>
                                                <p>18/01/21</p>
                                            </CardHeader>
                                            <CardTitle>HDD lento</CardTitle>
                                            <CardText>
                                                Los discos mecanicos tienen gran
                                                capacidad pero son demasiado lentos
                                            </CardText>
                                            <CardFooter>
                                                <a className="dumix-btn" href="https://www.youtube.com/watch?v=Vdb4jy2NQPk" rel="noopener noreferrer" target="_blank">Ir al video</a>
                                            </CardFooter>
                                        </DivColum>

                                        <DivColum>
                                            <img className="card-image" src="/Assets/music.png" alt="discimg" />
                                        </DivColum>
                                    </DivRow>
                                </Card>
                            </DivColum>
                        </DivRow>

                    </Div70>

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

                    <Div70>
                        <DivRow>
                            <DivColum>
                                <Card>
                                    <DivRow>
                                        <DivColum>
                                            <CardHeader>
                                                <p>steve</p>
                                                <p>18/01/21</p>
                                            </CardHeader>
                                            <CardTitle>Papers Please</CardTitle>
                                            <CardText>
                                                Un entrenido indie que implementa buenas
                                                mecanicas y tiene una historia interesante
                                            </CardText>
                                            <CardFooter>
                                                <a className="dumix-btn" href="https://www.youtube.com/watch?v=RLAiWG8Ysds&list=PL54hUsqjhNIbL4g55Uo0I1mDrH71tCcJy&index=6" rel="noopener noreferrer" target="_blank">Ir al video</a>
                                            </CardFooter>
                                        </DivColum>

                                        <DivColum>
                                            <img className="card-image" src="/Assets/music.png" alt="discimg" />
                                        </DivColum>
                                    </DivRow>
                                </Card>
                                <Card>
                                    <DivRow>
                                        <DivColum>
                                            <CardHeader>
                                                <p>steve</p>
                                                <p>18/01/21</p>
                                            </CardHeader>
                                            <CardTitle>Death Stranding</CardTitle>
                                            <CardText>
                                                Al principio crei que era un uber simulator
                                                pero luego me lleve una gran sorpresa
                                            </CardText>
                                            <CardFooter>
                                                <a className="dumix-btn" href="https://www.youtube.com/watch?v=TWe5LETi3SM&list=PL54hUsqjhNIbL4g55Uo0I1mDrH71tCcJy&index=5" rel="noopener noreferrer" target="_blank">Ir al video</a>
                                            </CardFooter>
                                        </DivColum>

                                        <DivColum>
                                            <img className="card-image" src="/Assets/music.png" alt="discimg" />
                                        </DivColum>
                                    </DivRow>
                                </Card>
                            </DivColum>
                            <DivColum>
                                <Card>
                                    <DivRow>
                                        <DivColum>
                                            <CardHeader>
                                                <p>steve</p>
                                                <p>18/01/21</p>
                                            </CardHeader>
                                            <CardTitle>Need for Speed</CardTitle>
                                            <CardText>
                                                Esperaba que este fuera un digno sucesor de
                                                la saga under ground pero no fue asi
                                            </CardText>
                                            <CardFooter>
                                                <a className="dumix-btn" href="https://www.youtube.com/watch?v=jmLM6DvAn84&list=PL54hUsqjhNIbL4g55Uo0I1mDrH71tCcJy&index=4" rel="noopener noreferrer" target="_blank">Ir al video</a>
                                            </CardFooter>
                                        </DivColum>

                                        <DivColum>
                                            <img className="card-image" src="/Assets/music.png" alt="discimg" />
                                        </DivColum>
                                    </DivRow>
                                </Card>
                                <Card>
                                    <DivRow>
                                        <DivColum>
                                            <CardHeader>
                                                <p>steve</p>
                                                <p>18/01/21</p>
                                            </CardHeader>
                                            <CardTitle>Sunset Overdrive</CardTitle>
                                            <CardText>
                                                Un juego que no es tan valorado como
                                                deberia ya que tiene algo que mostrar
                                            </CardText>
                                            <CardFooter>
                                                <a className="dumix-btn" href="https://www.youtube.com/watch?v=Ip7WDHnbB5s&list=PL54hUsqjhNIbL4g55Uo0I1mDrH71tCcJy&index=3" rel="noopener noreferrer" target="_blank">Ir al video</a>
                                            </CardFooter>
                                        </DivColum>

                                        <DivColum>
                                            <img className="card-image" src="/Assets/music.png" alt="discimg" />
                                        </DivColum>
                                    </DivRow>
                                </Card>
                            </DivColum>
                        </DivRow>
                    </Div70>

                </DivSection2>

                <DivSection1>
                    <FlexDiv>
                        <h1 className="title-1">Unete al servidor de discor</h1>
                        <p className="p-main">
                            Entra en el canal para conocer mas sobre temas de
                            programacion, informatica o sobre juegos.
                        </p>
                    </FlexDiv>

                    <DivCenter>
                        <img className="img-disc" src="/Assets/disc.png" alt="discimg" />
                    </DivCenter>

                    <DivCenter>
                        <a className="dumix-btn" href="https://discord.gg/QTdVBq5Q9r" rel="noopener noreferrer" target="_blank" >Ir al servidor</a>
                    </DivCenter>

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