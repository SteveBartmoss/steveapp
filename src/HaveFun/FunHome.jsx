import React, { useEffect } from "react";
import DivBaner from "../component/DivBaner";
import FooterHave from "./component/FooterHave";
import { DivArticle, DivCenter } from "../component/Contenedores/Cajas";

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

                <div className="card-havefun">
                    <img src="https://media2.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif?cid=53b38410k5i0xybbeivy1ma041z940wlsg0da8flau90pw09&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
                    <h1 className="h1-havefun">gifApp</h1>
                    <p className="p-card">
                        Una aplicacion para buscar gifs que te gusten
                        solo ingresa las palabras busca tus gifs favoritos
                    </p>
                    <div className="button-havefun">
                        <a className="a-card" href="havefun/gifapp">visitar</a>
                    </div>
                </div>

                <div className="card-havefun">
                    <DivCenter>
                        <img src="https://media3.giphy.com/media/l0ExsgrTuACbtPaqQ/giphy.gif?cid=53b38410ndcui17do9mm7yvqvihom3di66snfry5342g9gbq&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
                    </DivCenter>

                    <h1 className="h1-havefun">OraculoApp</h1>
                    <p className="p-card">Una aplicacion a la cual puedes hacerle preguntas
                        para sabar mas sobre tu destino</p>
                    <div className="button-havefun">
                        <a className="a-card" href="havefun/yesornotapp">visitar</a>
                    </div>
                </div>

                <div className="card-havefun">
                    <img src="https://media0.giphy.com/media/jsYfLXpibzkdr5sjZ8/giphy.gif?cid=ecf05e47es8xl4cwolqrqacyj3u1cev1hz6tsox2w6ux4j9x&ep=v1_gifs_related&rid=giphy.gif&ct=g" />
                    <h1 className="h1-havefun">rickosoApp</h1>
                    <p className="p-card">Relajate un rato y ponte rickoso mientras buscas informacion
                        sobre tus personajes favoritos de rick y morty</p>
                    <div className="button-havefun">
                        <a className="a-card" href="havefun/rickosoapp">visitar</a>
                    </div>
                </div>

                <div className="card-havefun">
                    <h1 className="h1-havefun">AssembleApp</h1>
                    <p className="p-card">Encuentra informacion sobre tus super heroes favoritos y diviertete
                        por unos momentos con esta aplicacions de super heroes</p>
                    <div className="button-havefun">
                        <a className="a-card" href="havefun/marvelapp">visitar</a>
                    </div>
                </div>

                <div className="card-havefun">
                    <h1 className="h1-havefun">AtrapalosApp</h1>
                    <p className="p-card">Busca la informacion de tu pokemon favorito en esta aplicacion que
                        te brinda la informacion de la mayoria de los pokemon gracias a la pokeapi</p>
                    <div className="button-havefun">
                        <a className="a-card" href="havefun/pokeapp">visitar</a>
                    </div>
                </div>

            </DivArticle>

            <FooterHave />
        </>
    );
}

export default FunHome;