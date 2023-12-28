import React, { useEffect } from "react";
import DumixAbout from "./pages/dumixAbout";
import DivBaner from "../component/DivBaner";
import { DivCenter, DivFlex, DivSection1, DivSection2 } from "../component/Contenedores/Cajas";
import SquareDiv from "../component/Contenedores/SquareDiv";
import CardDiv from "../component/Contenedores/CardDiv";

function DumixHome() {

    useEffect(() => {
        document.title = "Dumix"
    }, []);

    return (
        <>
            <DivBaner name="back-dumix" />

            <DivSection1>
                <DivFlex>
                    <h1 className="title-1">¿Que es dumix?</h1>
                    <p className="p-main">
                        Ya que mis habilidades para apoyar al desarrollo del codigo abierto
                        no son las mejores y mi tiempo es limitado, cree este apartado en
                        mi pagina para poder compartir tutoriales para que la gente pueda
                        introducirse a los comandos de linux de manera facil y perder
                        el miedo de usar la terminal.
                    </p>
                </DivFlex>
            </DivSection1>

            <DivSection2>
                <DivFlex>
                    <h1 className="title-1">Primeros pasos</h1>
                    <p className="p-main">
                        En esta seccion se abordaran temas para personas
                        que no han interactuado con linux, se describira lo que es una terminal
                        de comandos, cuales son las partes que componen la terminal, comandos basicos
                        para crear un archovo, como ver los permisos, como listar los elementos de un
                        directorio, como navegae entre direcctorios. Esta parte busca dar una introduccion
                        a los usuarios que nunca han utilizado comandos
                    </p>
                    <DivCenter>
                        <a className="dumix-btn" href="dumix/linux1">Ir al curso</a>
                    </DivCenter>
                </DivFlex>
            </DivSection2>

            <DivSection1>
                <DivFlex>
                    <h1 className="title-1">Pimp my terminal</h1>
                    <p className="p-main">
                        Un poco de estilo a nadie le queda mal y si vas pasar gran
                        parte de tu tiempo interactuando con la terminal de comando es buena idea que puedas
                        personalizarla y asi por lo menos tener un area de trabajo mas agradable, este post
                        te dara algunsejos para tener un cli mas a la moda y digna de un hackerma asi podras
                        impresionar a las nenas cuando les muestras todo el tiempo que ahorras por usar vim
                    </p>
                    <DivCenter>
                        <a className="dumix-btn" href="dumix/pimp">Ir al post</a>
                    </DivCenter>
                </DivFlex>
            </DivSection1>

            <DivSection2>
                <DivFlex>
                    <h1 className="title-1">Mejores aplicaciones para terminal</h1>
                    <p className="p-main">
                        Una recopilacion de las mejores aplicaciones que se pueden usar
                        en la terminal y que resultan bastante utiles cuando se esta interactuando con la
                        consola de linux
                    </p>
                    <DivCenter>
                        <a className="dumix-btn" href="dumix/terminalapps">Ir al post</a>
                    </DivCenter>
                </DivFlex>
            </DivSection2>

            <DivSection1>
                <DivFlex>
                    <h1 className="title-1">Vimgg una guia para mortales</h1>
                    <p className="p-main">Empezar a utilizar vim no es facil pero en esta seccion se encuentran
                        tutoriales o consejos que pueden hacer mas facil el cambio a este tipo de aplicaciones
                        y puede que al final te convence y se convierte en tu editor predilecto</p>
                    <div className="center">
                        <a className="dumix-btn" href="dumix/vimgg">Ir al post</a>
                    </div>
                </DivFlex>
            </DivSection1>

            <DivSection2>
                <DivFlex>
                    <h1 className="title-1">¿Porque deberia aprender linux?</h1>

                    <p className="p-main">Si no eres un usuario que esta enfocado a la informartica, las ingenierias de
                        computacion o ciencias puede que no sea una gran herramienta, no lo mal interpretes no es malo que aprendas
                        linux pero siendo un usario comun de computadora no obtendras una herramienta tan util pero es bueno conocer
                        una alternativa al tipico sistema operativo windows
                    </p>
                </DivFlex>
            </DivSection2>

            <DivSection1>
                <DivFlex>
                    <h1 className="title-1">Lista de comando basicos</h1>
                    <p className="p-main">
                        Una recopilacion de los comandos basicos que te ayudaran 
                        manejar linux desde la terminal como todo un sysadmin, o 
                        por lo menos te dejaran usar tu distribucion de linux
                    </p>
                    <DivCenter>
                        <a className="dumix-btn" href="dumix/clibasic">Ir al post</a>
                    </DivCenter>
                </DivFlex>
            </DivSection1>
        </>
    );
}

export default DumixHome;