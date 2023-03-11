import React from "react";
import java from "../img/java.png";
import c from "../img/c.png";
import cplus from "../img/c++.png";
import py from "../img/py.png";
import js from "../img/js.png";
import mysql from "../img/mysql.png";
import sql from "../img/sql.png";
import mongo from "../img/mongo.png";
import vscode from "../img/vscode.png";
import ubuntu from "../img/ubuntu.png";

function Lateral(){
    return(
        <>
        <div className="div-lateral">
            <h1 className="title1">Lenguajes de programacion que he usado</h1>
            <div className="div-prog">
                <img className="img-prog" src={java} />
                <img className="img-prog" src={c} />
                <img className="img-prog" src={cplus} />
                <img className="img-prog" src={py} />
                <img className="img-prog" src={js} />
            </div>
            <h1 className="title1">Conocimientos en bases de datos</h1>
            <div className="div-prog">
                <img className="img-prog" src={mysql} />
                <img className="img-prog" src={sql} />
                <img className="img-prog" src={mongo} />
            </div>
            <h1 className="title1">Lenguaje de programacion Favorito</h1>
            <div>
                <img className="img-prog" src={java} />
            </div>
            <p>Java el mejor lenguaje que existe</p>

            <h1 className="title1">Editor de codigo Favorito</h1>
            <div>
                <img className="img-prog" src={vscode} />
            </div>
            <p>Vscode ya que vim aun no lo domino</p>

            <h1 className="title1">Distribucion que usa actual mente</h1>
            <div>
                <img className="img-prog" src={ubuntu} />
            </div>
            <p>Ubuntu ya que es para novatos</p>
        </div>
        </>
    );
}

export default Lateral;