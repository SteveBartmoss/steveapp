import React from "react";


function Lateral(){
    return(
        <>
        <div className="div-lateral">

            <div className="back-color">
            <h1 className="title1">Lenguajes de programacion que he usado</h1>
            <div className="div-prog">
                <img className="img-prog" src={"/Assets/java.png"} alt="imgLateral"/>
                <img className="img-prog" src={"/Assets/c.png"} alt="imgLateral"/>
                <img className="img-prog" src={"/Assets/c++.png"} alt="imgLateral"/>
                <img className="img-prog" src={"/Assets/py.png"} alt="imgLateral"/>
                <img className="img-prog" src={"/Assets/js.png"} alt="imgLateral"/>
            </div>
            </div>

            <div className="back-color">
            <h1 className="title1">Conocimientos en bases de datos</h1>
            <div className="div-prog">
                <img className="img-prog" src={"/Assets/mysql.png"} alt="imgLateral"/>
                <img className="img-prog" src={"/Assets/sql.png"} alt="imgLateral"/>
                <img className="img-prog" src={"/Assets/mongo.png"} alt="imgLateral"/>
            </div>
            </div>

            <div className="back-color">
            <h1 className="title1">Lenguaje de programacion Favorito</h1>
            <div>
                <img className="img-prog" src={"/Assets/java.png"} alt="imgLateral"/>
            </div>
            </div>

            <div className="back-color">
            <h1 className="title1">Editor de codigo Favorito</h1>
            <div>
                <img className="img-prog" src={"/Assets/vscode.png"} alt="imgLateral"/>
            </div>
            </div>

            <div className="back-color">
            <h1 className="title1">Distribucion que usa actual mente</h1>
            <div>
                <img className="img-prog" src={"/Assets/ubuntu.png"} alt="imgLateral"/>
            </div>
            </div>

            <div className="back-color">            
            <h1 className="title1">Manejador de versiones usado</h1>
            <p>Github un clasico</p>
            </div>

        </div>
        </>
    );
}

export default Lateral;