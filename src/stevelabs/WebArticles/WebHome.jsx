import React from "react";
import DivBaner from "../../component/DivBaner";
import WebAbout from "./pages/WebAbout";
import { NavLink } from "react-router-dom";
import { DivCenter } from "../../component/Contenedores/Cajas";

const WebHome = () => {
    return (
        <>
            <DivBaner name="baner-web-developer" />

            <div className="center">
                <h1 className="title1">Contenido principal</h1>
            </div>

            <div className="display-topics">

                <div className="div-topic">

                    <div className="center">
                        <h1 className="title1">Herramientas que debes de aprender, si quieres desarrollar aplicaciones web en los próximos años.</h1>
                    </div>

                    <p className="Content">En esta seccion se dara una opinion personal acerca de las Herramientas
                        y tecnologias que en el dia de hoy se estan usando para programar paginas web, esto debido a que hoy en dia existe una revolucion en esta area,
                        y mucha gente no sabe que tiene que aprender para programar paginas web, pero eso es lo que intenta darte este articulo, una guia para que puedas convertiste
                        en un buen programador web o almenos tengas lo necesario para que seas considerado un programador web con todas las de la ley.</p>

                    <div className="center">

                        <NavLink to="opinion1"><button className="dumix-btn" type="button"> Ir al articulo</button></NavLink>
                    </div>

                </div>

                <div className="div-topic">

                    <DivCenter>
                        <h1 className="title1">Porque no deberias usar var para declarar tus variables</h1>
                    </DivCenter>

                    <p className="Content">
                        Si llevas tiempo sin usar java script puede que te sea raro el titulo pues usar 
                        var es una practica comun pero esto a cambiado un poco
                    </p>

                    <DivCenter>
                        <a href="/webdeveloper/letvsvar">Ir al articulo</a>
                    </DivCenter>
                </div>

            </div>

            <WebAbout />
        </>
    )
}

export default WebHome
