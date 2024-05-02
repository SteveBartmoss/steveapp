import React, { useEffect } from "react";
import LabsAbout from "./components/labsAbout";
import { Div70, DivArticle, DivColum, DivMosaico, DivRow, Panel } from "../component/Contenedores/Cajas";
import LabsFooter from "./components/labsFooter";
import { Card, CardFooter, CardHeader, CardText, CardTitle } from "../component/Card";

function HomeLabs() {

    useEffect(() => {
        document.title = "Stevelabs"
    }, []);

    return (
        <>
            <div className="center">
                <h1 className="labs-title">Steve Labs</h1>
            </div>

            <div className="center">
                <h1 className="title1">Comienza a aprender</h1>
            </div>

            <Panel>
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
                                        <CardTitle>Primeros pasos en programacion</CardTitle>
                                        <CardText>
                                            En este curso se abordan temas basicos de programacion
                                            ya que esta orientado a personas que comienzan a programar por lo cual no
                                            se esperan muchos conocimientos
                                        </CardText>
                                        <CardFooter>
                                            <a className="dumix-btn" href="stevelabs/program1">Ir al curso</a>
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
                                        <CardTitle>Primeros pasos en Base de datos</CardTitle>
                                        <CardText>
                                            En este curso se abordan temas basicos sobre bases de
                                            datos, esta orientado a personas que empiezan por lo
                                            cual no se esperan muchos conocimientos
                                        </CardText>
                                        <CardFooter>
                                            <a className="dumix-btn" href="stevelabs/program1">Ir al curso</a>
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
                                        <CardTitle>Web developer</CardTitle>
                                        <CardText>
                                            En este apartado puede consultar los articulos que fueron
                                            creados por un colaborador, los temas tratados seran sobre desarrollo de paginas
                                            web y que permitiran tener informacion sobre este tipo de temas
                                        </CardText>
                                        <CardFooter>
                                            <a className="dumix-btn" href="webdeveloper">Ver articulos</a>
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
                                        <CardTitle>Coder Life</CardTitle>
                                        <CardText>
                                            Aqui podras leer articulos sobre temas de la vida
                                            de desarolladores, juegos o simplemente reflexiones sobre temas de informatica
                                        </CardText>
                                        <CardFooter>
                                            <a className="dumix-btn" href="stevelabs/coder">Ver articulos</a>
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
            </Panel>

            <LabsAbout />

            <LabsFooter />
        </>

    );
}

export default HomeLabs;