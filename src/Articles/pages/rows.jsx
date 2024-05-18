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
                                        <CardTitle>Juegos que reunen polvo</CardTitle>
                                        <CardText>
                                            La mayoria de personas tienen en sus librerias juegos que ni
                                            siquiera han pronado una sola vez lo que indica que las personas
                                            compran juegos solo porque estan en oferta pero no llegan a probar
                                            lo cual es algo desconcertante
                                        </CardText>
                                        <CardFooter>
                                            <a className="dumix-btn" href="rows/rc2">Ir al curso</a>
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
                                        <CardTitle>Juegos de acceso anticipado</CardTitle>
                                        <CardText>
                                            Los juegos de acceso anticipado pueden ser una gran
                                            oportunidad pero tambien pueden representar un riesgo
                                            para tu cartera
                                        </CardText>
                                        <CardFooter>
                                            <a className="dumix-btn" href="rows/rc3">Ir al curso</a>
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
                                        <CardTitle>Los indie una nueva esperanza</CardTitle>
                                        <CardText>
                                            En este mundo de juegos triple A los desarrolladores
                                            independientes nos traen un sople de aire fresco
                                            con nuevas mecanicas o mejores historias
                                        </CardText>
                                        <CardFooter>
                                            <a className="dumix-btn" href="rows/rc4">Ir al curso</a>
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
                                        <CardTitle>16 gigas de ram no son como antes</CardTitle>
                                        <CardText>
                                            Hace algun tiempo 16 gigas de ram era una gloria para
                                            la mayoria de personas pero ahora ya no es la misma
                                            historia, ya que la poca optimizacion esta pasando
                                            factura
                                        </CardText>
                                        <CardFooter>
                                            <a className="dumix-btn" href="rows/rc5">Ir al curso</a>
                                        </CardFooter>
                                    </DivColum>
                                    <DivColum>
                                        <img className="card-image" src="/Assets/music.png" alt="discimg" />
                                    </DivColum>
                                </DivRow>
                            </Card>

                        </DivColum>

                    </DivRow>
                </Panel>

            </DivArticle>

        </>
    );
}

export default Rows;