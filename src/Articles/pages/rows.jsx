import React from "react";

function Rows() {
    return (
        <>
            <div className="div-about">
                <div className="center">
                    <h1 className="title1">Rows and Colums</h1>
                </div>

                <div className="div-topic">
                    <h1 className="title1">La gama Alta no es todo</h1>
                    <p className="Content"> Actualmente la mayoria de usuarios de pc tiene 
                    la idea de que se debe llegar a la gama alta del pc gaming y tener 
                    toda la configuracion de una computadora tope de gama llegano a formar 
                    de cierta manera una elite conformada
                    </p>
                    <div className="center">
                        <a className="dumix-btn" href="rows/rc1">Ver articulo</a>
                    </div>
                </div>

                <div className="div-topic">
                    <h1 className="title1">Juegos que reunen polvo</h1>
                    <p className="Content">
                        La mayoria de personas tienen en sus librerias juegos que ni 
                        siquiera han pronado una sola vez lo que indica que las personas 
                        compran juegos solo porque estan en oferta pero no llegan a probar
                        lo cual es algo desconcertante
                    </p>
                    <div className="center">
                        <a className="dumix-btn" href="rows/rc2">Ver articulo</a>
                    </div>
                </div>

                <div className="div-topic">
                    <h1>Juegos de acceso anticipado</h1>
                    <p className="Content">
                        Los juegos de acceso anticipado
                    </p>
                    <div className="center">
                        <a className="dumix-btn" href="rows/rc3">Ver articulo</a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Rows;