import React from "react";

function FunHome(){
    return(
    <>
        <h1 className="title1">have fun page</h1>

        <p className="Content">Un apartado donde puedes divertirte un poco con las aplicaciones
        que ofrecen diferentes interacciones e informacion de que te puede agradar</p>

        <div>
            <h1 className="title1">gifApp</h1>
            <p className="Content">Una aplicacion para buscar gifs que te gusten
            solo ingresa las palabras busca tus gifs favoritos</p>
            <a href="havefun/gifapp">visitar</a>
        </div>

        <div>
            <h1 className="title1">rickosoApp</h1>
            <p className="Content">Relajate un rato y ponte rickoso mientras buscas informacion
            sobre tus personajes favoritos de rick y morty</p>
            <a href="havefun/rickosoapp">visitar</a>
        </div>

        <div>
            <h1 className="title1">AssembleApp</h1>
            <p className="Content">Encuentra informacion sobre tus super heroes favoritos y diviertete
            por unos momentos con esta aplicacions de super heroes</p>
        </div>
    </>
    );
}

export default FunHome;