import React, { useEffect } from "react";
import { DivArticle, DivColum, DivMainContent, DivMosaico, DivRow, Panel } from "../../component/Contenedores/Cajas";
import { Card, CardFooter, CardHeader, CardText, CardTitle } from "../../component/Card";

function Rows() {

    useEffect(() => {
        document.title = "Rows And Columns"
    }, []);

    return (
        <>

            <DivArticle>

                <div className="center">
                    <h1 className="title1">Rows and Colums</h1>
                </div>

                <Panel>
                    <DivMainContent>
                        <DivRow>
                            <DivColum>
                                <Card>
                                    <DivRow>
                                        <DivColum>
                                            <CardHeader>
                                                <p>steve</p>
                                                <p>18/01/21</p>
                                            </CardHeader>
                                            <CardTitle>La gama Alta no es todo</CardTitle>
                                            <CardText>
                                                Actualmente la mayoria de usuarios de pc tiene
                                                la idea de que se debe llegar a la gama alta del pc gaming y tener
                                                toda la configuracion de una computadora tope de gama llegano a formar
                                                de cierta manera una elite conformada
                                            </CardText>
                                            <CardFooter>
                                                <a className="dumix-btn" href="rows/rc1">Ver articulo</a>
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
                            </DivColum>

                        </DivRow>
                    </DivMainContent>
                </Panel>

                <DivMosaico>

                    <div className="div-topic">
                        <h1 className="title1">La gama Alta no es todo</h1>
                        <p className="Content"> Actualmente la mayoria de usuarios de pc tiene
                            la idea de que se debe llegar a la gama alta del pc gaming y tener
                            toda la configuracion de una computadora tope de gama llegano a formar
                            de cierta manera una elite conformada
                        </p>
                        <div className="center">
                            <a className="dumix-btn" href="rows/rc1">Ver articulo</a>
                        </div>
                    </div>

                </DivMosaico>


                <div className="div-topic">
                    <h1 className="title1">Juegos que reunen polvo</h1>
                    <p className="Content">
                        La mayoria de personas tienen en sus librerias juegos que ni
                        siquiera han pronado una sola vez lo que indica que las personas
                        compran juegos solo porque estan en oferta pero no llegan a probar
                        lo cual es algo desconcertante
                    </p>
                    <div className="center">
                        <a className="dumix-btn" href="rows/rc2">Ver articulo</a>
                    </div>
                </div>

                <div className="div-topic">
                    <h1 className="title1">Juegos de acceso anticipado</h1>
                    <p className="Content">
                        Los juegos de acceso anticipado pueden ser una gran
                        oportunidad pero tambien pueden representar un riesgo
                        para tu cartera
                    </p>
                    <div className="center">
                        <a className="dumix-btn" href="rows/rc3">Ver articulo</a>
                    </div>
                </div>

                <div className="div-topic">
                    <h1 className="title1">Los indie una nueva esperanza</h1>
                    <p className="Content">
                        En este mundo de juegos triple A los desarrolladores
                        independientes nos traen un sople de aire fresco
                        con nuevas mecanicas o mejores historias
                    </p>
                    <div className="center">
                        <a className="dumix-btn" href="rows/rc4">Ver articulo</a>
                    </div>
                </div>

                <div className="div-topic">
                    <h1 className="title1">16 gigas de ram no son como antes</h1>
                    <p className="Content">
                        Hace algun tiempo 16 gigas de ram era una gloria para
                        la mayoria de personas pero ahora ya no es la misma
                        historia, ya que la poca optimizacion esta pasando
                        factura
                    </p>
                    <div className="center">
                        <a className="dumix-btn" href="rows/rc5">Ver articulo</a>
                    </div>
                </div>


            </DivArticle>

        </>
    );
}

export default Rows;