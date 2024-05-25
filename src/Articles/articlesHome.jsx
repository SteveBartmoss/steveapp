import React, { useEffect } from "react";
import Pie from "../component/Pie";
import { DivArticle, DivMosaico } from "../component/Contenedores/Cajas";

function ArticlesHome() {

    useEffect(() => {
        document.title = "Articles"
    }, []);

    return (
        <>
            <div className="center">
                <h1 className="title1">Los mejores articulos</h1>
            </div>

            <DivArticle>                
                <DivMosaico>
                    <div className="div-min-article">
                        <div className="center">
                            <h1 className="title1">Rows and Colums</h1>
                        </div>

                        <p className="Content"> Una seccion mas tranquila con opiones sobre temas,
                            reflexiones o simplemente alguna idea sobre un tema, es contenido para
                            poder entretener a los usuarios
                        </p>
                        <div className="center">
                            <a className="dumix-btn" href="articulos/rows">Ver articulos</a>
                        </div>
                    </div>

                    <div className="div-min-article">
                        <div className="center">
                            <h1 className="title1">Reviews</h1>
                        </div>

                        <p className="Content"> Los guiones que uso para los videos
                            de review de videojuegos pero en formato de articulo y con
                            detalles extras para los que les agrada leer.
                        </p>
                        <div className="center">
                            <a className="dumix-btn" href="articulos/reviews">Ver articulos</a>
                        </div>
                    </div>

                    <div className="div-min-article">
                        <div className="center">
                            <h1 className="title1">Articulos informativos</h1>
                        </div>

                        <p className="Content"> Una extension de los videos informativos
                            en los cuales se puede encontrar un poco mas de informacion y
                            posiblemente mejores ejemplos pues toman menos tiempo.
                        </p>
                        <div className="center">
                            <a className="dumix-btn" href="articulos/info">Ver articulos</a>
                        </div>
                    </div>

                </DivMosaico>
            </DivArticle>

            <Pie />

        </>
    );
}

export default ArticlesHome;