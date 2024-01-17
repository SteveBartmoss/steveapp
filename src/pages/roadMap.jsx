import React from "react";
import { Working } from "../component/Working";

function RoadMap() {
    return (
        <>
            <div className="contenedor-logros">
                <h1 className="main-title">Road map de la pagina</h1>

                <h1 className="title1">Ultima actualizacion</h1>

                <h1 className="title1">17/01/2024</h1>

                <h1 className="title1">Mejoras que llegaran a la pagina</h1>

                <ul>
                    <li>
                        <p>Curso de porgamacion completo</p>
                    </li>

                    <li>
                        <p>Dos secciones nuevas en have fun &#40; ricoso app y poke app &#41;</p>
                    </li>

                    <li>
                        <p>Mas contenido para dumix</p>
                    </li>

                    <li>
                        <p>Nuevos articulos de rows and colums</p>
                    </li>

                    <li>
                        <p>Nuevos trucos para linux</p>
                    </li>
                </ul>

                <h1 className="title1">Cursos nuevos que tendra la pagina</h1>

                <ul>
                    <li>
                        <p>Curso basico de base de datos</p>
                    </li>

                    <li>
                        <p>Curso de Programacion Orientad a objetos</p>
                    </li>

                    <li>
                        <p>Implementaciones y ejemplos de algoritmos</p>
                    </li>

                    <li>
                        <p>Curso basico de git</p>
                    </li>

                    <li>
                        <p>Conceptos de creacion de creacion de UI en java</p>
                    </li>
                </ul>

            </div>
            <Working />
        </>
    );
}

export default RoadMap;