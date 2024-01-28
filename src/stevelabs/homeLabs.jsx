import React, { useEffect } from "react";
import LabsAbout from "./components/labsAbout";
import { DivArticle, DivMosaico } from "../component/Contenedores/Cajas";
import LabsFooter from "./components/labsFooter";

function HomeLabs() {

    useEffect(() => {
        document.title = "Stevelabs"
    }, []);

    return (
        <>
            <div className="center">
                <h1 className="labs-title">Steve Labs</h1>
            </div>

            <div className="center">
                <h1 className="title1">Comienza a aprender</h1>
            </div>

            <DivArticle>
                <DivMosaico>

                    <div className="div-min-article">
                        <div className="center">
                            <h1 className="title1">Primeros pasos en programacion</h1>
                        </div>
                        <p className="Content">En este curso se abordan temas basicos de programacion
                            ya que esta orientado a personas que comienzan a programar por lo cual no
                            se esperan muchos conocimientos</p>
                        <div className="center">
                            <a className="dumix-btn" href="stevelabs/program1">Ir al curso</a>
                        </div>

                    </div>

                    <div className="div-min-article">
                        <div className="center">
                            <h1 className="title1">Primeros pasos en Base de datos</h1>
                        </div>
                        <p className="Content">En este curso se abordan temas basicos sobre bases de
                            datos, esta orientado a personas que empiezan por lo
                            cual no se esperan muchos conocimientos
                        </p>
                        <div className="center">
                            <a className="dumix-btn" href="stevelabs/program1">Ir al curso</a>
                        </div>

                    </div>

                    <div className="div-min-article">
                        <div className="center">
                            <h1 className="title1">Web developer</h1>
                        </div>
                        <p className="Content">En este apartado puede consultar los articulos que fueron
                            creados por un colaborador, los temas tratados seran sobre desarrollo de paginas
                            web y que permitiran tener informacion sobre este tipo de temas
                        </p>
                        <div className="center">
                            <a className="dumix-btn" href="webdeveloper">Ver articulos</a>
                        </div>
                    </div>

                    <div className="div-min-article">
                        <div className="center">
                            <h1 className="title1">Coder Life</h1>
                        </div>
                        <p className="Content">Aqui podras leer articulos sobre temas de la vida
                            de desarolladores, juegos o simplemente reflexiones sobre temas de informatica
                        </p>
                        <div className="center">
                            <a className="dumix-btn" href="#">Ver articulos</a>
                        </div>
                    </div>

                </DivMosaico>
            </DivArticle>

            <LabsAbout />

            <LabsFooter />
        </>

    );
}

export default HomeLabs;