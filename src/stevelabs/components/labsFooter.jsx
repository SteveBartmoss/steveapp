import React from "react";
import { Div70, DivFooter, DivRow, Paper } from "../../component/Contenedores/Cajas";

function LabsFooter() {
    return (
        <>
            <DivFooter>
                <Div70>
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
                </Div70>
                <Div70>
                    <div className="div-row">
                        <div className="div-footer-alert">
                            <h1 className="title1">Importante</h1>
                            <p className="Content">Esta seccion es creada con el fin de compartir informacion
                                con otros usuarios o personas que quieren empezar en el mundo de linux pero
                                que pueden verse abrumados por la cantidad de comandos o diferencias que se
                                tienen con los sistemas de linux</p>
                        </div>
                        <div className="div-row">
                            <div className="div-colum">
                                <p>Cursos</p>
                                <a>About</a>
                            </div>
                            <div className="div-colum">
                                <p>Developer</p>
                                <a>How to</a>
                            </div>
                            <div className="div-colum">
                                <p>Dumix</p>
                                <a>Linux basico</a>
                                <a>Comandos</a>
                                <a>Vingg</a>
                            </div>
                            <div className="div-colum">
                                <p>Articulos</p>
                                <a>Web Masters</a>
                            </div>
                        </div>
                    </div>
                    <hr />
                </Div70>
                <Div70>
                    <DivRow>
                        <div className="div-footer-logo">
                            <img className="img-footer-logo" src="/Assets/logoCanal.png" />
                            <p>Pagina oficial de stevechambitas</p>
                        </div>
                        <div className="div-iconos">
                            <DivRow>
                                <a href="https://www.youtube.com/@stevechambitas2782"><img className="img-icon" src="/Assets/yticon.png" /></a>
                                <a href="https://discord.gg/QTdVBq5Q9r"><img className="img-icon" src="/Assets/discord.png" /></a>
                                <a href="https://github.com/MarcoAntonioGuadalupeRivasGuzman"><img className="img-icon" src="/Assets/github.png" /></a>
                                <a href="mailto:stevechanvitas@gmail.com"><img className="img-icon" src="/Assets/email.png" /></a>
                            </DivRow>
                        </div>
                    </DivRow>
                    <h1 className="title1">Power by <a className="contacto" href="https://giphy.com/">Giphy</a></h1>
                </Div70>
            </DivFooter>
        </>
    );
}

export default LabsFooter;