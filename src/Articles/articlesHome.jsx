import React from "react";
import Pie from "../component/Pie";

function ArticlesHome(){
    return(
        <>
            <div className="center">
                <h1 className="title1">Los mejores articulos</h1>
            </div>

            <div className="div-topic">
                    <h1 className="title1">Rows and Colums</h1>
                    <p className="Content"> Una seccion mas tranquila con opiones sobre temas, 
                    reflexiones o simplemente alguna idea sobre un tema, es contenido para
                    poder entretener a los usuarios
                    </p>
                    <div className="center">
                        <a className="dumix-btn" href="articulos/rows">Ver articulos</a>
                    </div>
            </div>

            <div className="div-topic">
                    <h1 className="title1">Reviews</h1>
                    <p className="Content"> Los guiones que uso para los videos 
                    de review de videojuegos pero en formato de articulo y con 
                    detalles extras para los que les agrada leer.
                    </p>
                    <div className="center">
                        <a className="dumix-btn" href="#">Ver articulos</a>
                    </div>
            </div>

            <div className="div-topic">
                    <h1 className="title1">Articulos informativos</h1>
                    <p className="Content"> Una extension de los videos informativos 
                    en los cuales se puede encontrar un poco mas de informacion y 
                    posiblemente mejores ejemplos pues toman menos tiempo.
                    </p>
                    <div className="center">
                        <a className="dumix-btn" href="#">Ver articulos</a>
                    </div>
            </div>

            <Pie />

        </>
    );
}

export default ArticlesHome;