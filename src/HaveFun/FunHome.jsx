import React, { useEffect } from "react";
import DivBaner from "../component/DivBaner";
import FooterHave from "./component/FooterHave";
import { DivArticle, DivCardHave, DivCenter, DivMosaico } from "../component/Contenedores/Cajas";

function FunHome() {

    useEffect(() => {
        document.title = "Havefun"
    }, [])
    return (
        <>
            <DivBaner name="baner-have-fun" />

            <DivArticle>
                <p className="p-havefun">
                    Un apartado donde puedes divertirte un poco con las aplicaciones
                    que ofrecen diferentes interacciones e informacion de diferentes personajes
                    que te puede agradar
                </p>

                <DivMosaico>

                    <DivCardHave>
                        <h1 className="h1-havefun">gifApp</h1>
                        <p className="p-card">
                            Una aplicacion para buscar gifs que te gusten
                            solo ingresa las palabras busca tus gifs favoritos
                        </p>
                        <div className="button-havefun">
                            <a className="a-card" href="havefun/gifapp">visitar</a>
                        </div>
                    </DivCardHave>

                    <DivCardHave>
                        <h1 className="h1-havefun">OraculoApp</h1>
                        <p className="p-card">Una aplicacion a la cual puedes hacerle preguntas
                            para sabar mas sobre tu destino</p>
                        <div className="button-havefun">
                            <a className="a-card" href="havefun/yesornotapp">visitar</a>
                        </div>
                    </DivCardHave>

                    <DivCardHave>
                        <h1 className="h1-havefun">rickosoApp</h1>
                        <p className="p-card">Relajate un rato y ponte rickoso mientras buscas informacion
                            sobre tus personajes favoritos de rick y morty</p>
                        <div className="button-havefun">
                            <a className="a-card" href="havefun/rickosoapp">visitar</a>
                        </div>
                    </DivCardHave>

                    <DivCardHave>
                        <h1 className="h1-havefun">AssembleApp</h1>
                        <p className="p-card">Encuentra informacion sobre tus super heroes favoritos y diviertete
                            por unos momentos con esta aplicacions de super heroes</p>
                        <div className="button-havefun">
                            <a className="a-card" href="havefun/marvelapp">visitar</a>
                        </div>
                    </DivCardHave>

                    <DivCardHave>
                        <h1 className="h1-havefun">AtrapalosApp</h1>
                        <p className="p-card">Busca la informacion de tu pokemon favorito en esta aplicacion que
                            te brinda la informacion de la mayoria de los pokemon gracias a la pokeapi</p>
                        <div className="button-havefun">
                            <a className="a-card" href="havefun/pokeapp">visitar</a>
                        </div>
                    </DivCardHave>

                </DivMosaico>

            </DivArticle>

            <FooterHave />
        </>
    );
}

export default FunHome;