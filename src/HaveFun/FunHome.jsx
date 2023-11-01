import React from "react";
import DivBaner from "../component/DivBaner";

function FunHome() {
    return (
        <>
        {document.title="Havefun"}
            <DivBaner name="baner-have-fun" />

            <div className="div-havefun">

                <p className="p-havefun">Un apartado donde puedes divertirte un poco con las aplicaciones
                    que ofrecen diferentes interacciones e informacion de diferentes personajes
                    que te puede agradar</p>

                <div className="card-havefun">
                    <h1 className="h1-havefun">gifApp</h1>
                    <p className="p-card">Una aplicacion para buscar gifs que te gusten
                        solo ingresa las palabras busca tus gifs favoritos</p>
                    <div className="button-havefun">
                        <a className="a-card" href="havefun/gifapp">visitar</a>
                    </div>
                </div>

                <div className="card-havefun">
                    <h1 className="h1-havefun">OraculoApp</h1>
                    <p className="p-card">Una aplicacion a la cual puedes hacerle preguntas
                        para sabar mas sobre tu destino</p>
                    <div className="button-havefun">
                        <a className="a-card" href="havefun/yesornotapp">visitar</a>
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

            <div className="gif-footer">
                <div className="footer-item">
                    <h1 className="title1">Importante</h1>
                    <p className="Content">Estas seccion fueron creadas gracias al curso de
                        react de Fernando Herrera, si quieres apoyarlo puedes comprar su
                        curso o recomendarlo.
                    </p>

                    <p className="Content">Esta pagina forma parte de mi portafolio, si
                        te interesa puedes contactarme en algunas de las siguientes redes.</p>

                    <p className="Content">Tambien puedes pasar a mi canal de Youtube
                        quiza encuentras contenido que te agrade y me agregas a tus canala
                        preferidos</p>
                </div>

                <div className="item-grid">
                    <h1 className="title1">Contacto</h1>
                    <p className="contacto">Enviame un <a className="contacto" href="mailto:stevechanvitas@gmail.com">Correo</a></p>
                    <a className="contacto" href="https://github.com/MarcoAntonioGuadalupeRivasGuzman">Githud</a>
                    <a className="contacto" href="https://www.youtube.com/@stevechambitas2782">Youtube</a>
                </div>
            </div>

        </>
    );
}

export default FunHome;