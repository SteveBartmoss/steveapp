import React, { useEffect } from "react";
import DivBaner from "../component/DivBaner";
import FooterHave from "./component/FooterHave";
import { DivArticle, DivColum, DivMainContent, DivRow, Panel } from "../component/Contenedores/Cajas";
import { Card, CardFooter, CardHeader, CardText, CardTitle } from "../component/Card";

function FunHome() {

    useEffect(() => {
        document.title = "Havefun"
    }, [])
    return (
        <>
            <DivBaner name="baner-have-fun" />

            <DivArticle>
                <p className="p-main">
                    Un apartado donde puedes divertirte un poco con las aplicaciones
                    que ofrecen diferentes interacciones e informacion de diferentes personajes
                    que te puede agradar
                </p>

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
                                            <CardTitle>gifApp</CardTitle>
                                            <CardText>
                                                Una aplicacion para buscar gifs que te gusten
                                                solo ingresa las palabras busca tus gifs favoritos
                                            </CardText>
                                            <CardFooter>
                                                <a className="dumix-btn" href="havefun/gifapp">visitar</a>
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
                                            <CardTitle>OraculoApp</CardTitle>
                                            <CardText>
                                                Una aplicacion a la cual puedes hacerle preguntas
                                                para sabar mas sobre tu destino
                                            </CardText>
                                            <CardFooter>
                                                <a className="dumix-btn" href="havefun/yesornotapp">visitar</a>
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
                                            <CardTitle>rickosoApp</CardTitle>
                                            <CardText>
                                                Relajate un rato y ponte rickoso mientras buscas informacion
                                                sobre tus personajes favoritos de rick y morty
                                            </CardText>
                                            <CardFooter>
                                                <a className="dumix-btn" href="havefun/rickosoapp">visitar</a>
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
                                            <CardTitle>AssembleApp</CardTitle>
                                            <CardText>
                                                Encuentra informacion sobre tus super heroes favoritos y diviertete
                                                por unos momentos con esta aplicacions de super heroes
                                            </CardText>
                                            <CardFooter>
                                                <a className="dumix-btn" href="havefun/marvelapp">visitar</a>
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
                                            <CardTitle>AtrapalosApp</CardTitle>
                                            <CardText>
                                                Busca la informacion de tu pokemon favorito en esta aplicacion que
                                                te brinda la informacion de la mayoria de los pokemon gracias a la pokeapi
                                            </CardText>
                                            <CardFooter>
                                                <a className="dumix-btn" href="havefun/pokeapp">visitar</a>
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

            </DivArticle>

            <FooterHave />
        </>
    );
}

export default FunHome;