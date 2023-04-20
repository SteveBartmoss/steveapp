import React from "react";
import Baner from "../component/Baner";
import DumixAbout from "./pages/dumixAbout";

function DumixHome(){
    return(
        <>
            <Baner/>
            <div>
                <h1 className="title1">Contenido principal</h1>
                <div>
                    <h1 className="title1">Primeros pasos</h1>
                    <p className="Content">En esta seccion se abordaran temas para personas
                    que no han interactuado con linux, se describira lo que es una terminal
                    de comandos, cuales son las partes que componen la terminal, comandos basicos
                    para crear un archovo, como ver los permisos, como listar los elementos de un 
                    directorio, como navegae entre direcctorios. Esta parte busca dar una introduccion
                    a los usuarios que nunca han utilizado comandos</p>
                    <button>Ir al curso</button>
                </div>
            </div>
            <DumixAbout />
        </>
    );
}

export default DumixHome;