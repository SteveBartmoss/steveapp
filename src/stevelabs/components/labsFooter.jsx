import React from "react";
import { DivFooter, Paper } from "../../component/Contenedores/Cajas";

function LabsFooter() {
    return (
        <Paper>
            <div className="div-back-footer">
                <div className="div-nav-footer">
                    <ul className="lista">

                        <li>
                            <a className="archor">SteveLabs</a>
                        </li>

                        <li>
                            <a className="archor">Dumix</a>
                        </li>

                        <li>
                            <a className="archor">Articulos</a>
                        </li>

                    </ul>
                </div>
                <div className="div-row">
                    <div className="div-footer-alert">
                        <h1 className="title1">Importante</h1>
                        <p className="Content">Esta seccion es creada con el fin de compartir informacion
                            con otros usuarios o personas que quieren empezar en el mundo de linux pero
                            que pueden verse abrumados por la cantidad de comandos o diferencias que se
                            tienen con los sistemas de linux</p>
                    </div>
                    <div>
                        <div>
                            <a>Cursos</a>
                        </div>
                        <div>
                            <a>Developer</a>
                        </div>
                        <div>
                            <a>Dumix</a>
                        </div>
                        <div>
                            <a>Articulos</a>
                        </div>
                    </div>
                </div>
            </div>
            <DivFooter>

                <div className="item-grid">
                    <h1 className="title1">Contacto</h1>
                    <p className="contacto">Enviame un <a className="contacto" href="mailto:stevechanvitas@gmail.com">Correo</a></p>
                    <a className="contacto" href="https://github.com/MarcoAntonioGuadalupeRivasGuzman">Githud</a>
                    <a className="contacto" href="https://www.youtube.com/@stevechambitas2782">Youtube</a>
                    <h1 className="title1">Power by <a className="contacto" href="https://giphy.com/">Giphy</a></h1>
                </div>
            </DivFooter>
        </Paper>
    );
}

export default LabsFooter;