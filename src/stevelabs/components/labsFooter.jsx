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
                <div className="div-nav-footer">
                    <div className="div-row">
                        <div className="div-footer-alert">
                            <h1 className="title1">Importante</h1>
                            <p className="Content">Esta seccion es creada con el fin de compartir informacion
                                con otros usuarios o personas que quieren empezar en el mundo de linux pero
                                que pueden verse abrumados por la cantidad de comandos o diferencias que se
                                tienen con los sistemas de linux</p>
                        </div>
                        <div className="div-row">
                            <div>
                                <p>Cursos</p>
                                <a>About</a>
                            </div>
                            <div>
                                <p>Developer</p>
                                <a>How to</a>
                            </div>
                            <div className="div-colum">
                                <p>Dumix</p>
                                <a>Linux basico</a>
                                <a>Comandos</a>
                                <a>Vingg</a>
                            </div>
                            <div>
                                <p>Articulos</p>
                                <a>Web Masters</a>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="div-nav-footer">
                    <img className="img-footer-logo" src="/Assets/logoCanal.png" />
                    <h1 className="title1">Contacto</h1>
                    <p className="contacto">Enviame un <a className="contacto" href="mailto:stevechanvitas@gmail.com">Correo</a></p>
                    <a className="contacto" href="https://github.com/MarcoAntonioGuadalupeRivasGuzman">Githud</a>
                    <a className="contacto" href="https://www.youtube.com/@stevechambitas2782">Youtube</a>
                    <h1 className="title1">Power by <a className="contacto" href="https://giphy.com/">Giphy</a></h1>
                </div>
            </div>
            <DivFooter>
                <div className="item-grid">

                </div>
            </DivFooter>
        </Paper>
    );
}

export default LabsFooter;