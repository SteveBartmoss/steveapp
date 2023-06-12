import React from "react";
import DivBaner from "../component/DivBaner";

function FunHome() {
    return (
        <>
            <DivBaner name="baner-have-fun" />

            <div className="div-havefun">

                <p className="p-havefun">Un apartado donde puedes divertirte un poco con las aplicaciones
                    que ofrecen diferentes interacciones e informacion de que te puede agradar</p>

                <div className="card-havefun">
                    <h1 className="h1-havefun">gifApp</h1>
                    <p className="p-card">Una aplicacion para buscar gifs que te gusten
                        solo ingresa las palabras busca tus gifs favoritos</p>
                    <div className="button-havefun">
                        <a className="a-card" href="havefun/gifapp">visitar</a>
                    </div>
                </div>

                <div className="card-havefun">
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

            </div>

            <div>
                <h1 className="h1-havefun">Footer have fun</h1>
            </div>

        </>
    );
}

export default FunHome;