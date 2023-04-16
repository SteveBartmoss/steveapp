import React from "react";
import Pie from "../component/Pie";

function Greview(){
    return(
        <>
            <div className="encabezado">
                <img className="imgAutor" src={"/Assets/steveA.png"} alt="imgAutor"/>
                <div className="text-head">
                    <h1 className="title1">Brotato un juego simple pero entretenido</h1>
                    <p>Escrito por Steve</p>
                    <p>Fecha de publicacion: 16/04/23</p>
                </div>
            </div>

            <div className="articulo-div">

                <div className="contenido-articulo">

                    <div className="text-cuerpo">
                        <p className="Content">Al principio pense que era una perdida de dinero ya que el juego tenia mala pinta
                        pero decidio dar el beneficio de la duda y ademas el juego estaba en oferta asi que lo compre y lo pobre
                        y debo decir que no estoy arrependtido de hacerlo,</p>
                    </div>

                </div>

                <div>
                    <h1 className="title1">Tambien te puede interesar</h1>
                    <p className="Content">Lisa de recomendaciones para leer o ver</p>
                </div>

            </div>

            <Pie/>
        </>
    );
}

export default Greview;