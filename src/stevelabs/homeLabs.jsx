import React from "react";
import LabsAbout from "./components/labsAbout";

function HomeLabs() {
    return (
        <>
            <div className="center">
                <h1 className="labs-title">Steve Labs</h1>
            </div>

            <div className="center">
                <h1 className="title1">Comienza a aprender</h1>
            </div>

            <div className="display-topics">

                <div className="div-topic">
                    <h1 className="title1">Primeros pasos en programacion</h1>
                    <p className="Content">En este curso se abordan temas basicos de programacion
                        ya que esta orientado a personas que comienzan a programar por lo cual no
                        se esperan muchos conocimientos por parte de las personas que toman el curso
                        el lenguaje que se utiliza sera c</p>
                    <div className="center">
                        <a className="dumix-btn" href="#">Ir al curso</a>
                    </div>

                </div>

                <div className="div-topic">
                    <h1 className="title1">Web developer</h1>
                    <p className="Content">En este apartado puede consultar los articulos que fueron
                        creados por un colaborador, los temas tratados seran sobre desarrollo de paginas
                        web y que permitiran tener informacion sobre este tipo de temas
                    </p>
                    <div className="center">
                        <a className="dumix-btn" href="webdeveloper">Ver articulos</a>
                    </div>
                </div>

                <div className="div-topic">
                    <h1 className="title1">Coder Life</h1>
                    <p className="Content">Aqui podras leer articulos sobre temas de la vida 
                    de desarolladores, juegos o simplemente reflexiones sobre temas de informatica
                    </p>
                    <div className="center">
                        <a className="dumix-btn" href="#">Ver articulos</a>
                    </div>
                </div>


            </div>

            <LabsAbout />
        </>

    );
}

export default HomeLabs;