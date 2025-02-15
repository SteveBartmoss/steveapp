import React from "react";
import { Div60, Div70, DivColum, DivFooter, DivRow } from "../../component/Contenedores/Cajas";

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
                    <DivRow>
                        <Div60>
                            <h1 className="title1">Importante</h1>
                            <p className="Content">Esta seccion es creada con el fin de compartir informacion
                                con otros usuarios o personas que quieren empezar en el mundo de linux pero
                                que pueden verse abrumados por la cantidad de comandos o diferencias que se
                                tienen con los sistemas de linux</p>
                        </Div60>
                        <DivRow>
                            <DivColum>
                                <p className="Content">Cursos</p>
                                <a className="link-tag">About</a>
                            </DivColum>
                            <DivColum>
                                <p className="Content">Developer</p>
                                <a className="link-tag">How to</a>
                            </DivColum>
                            <DivColum>
                                <p className="Content">Dumix</p>
                                <a className="link-tag">Linux basico</a>
                                <a className="link-tag">Comandos</a>
                                <a className="link-tag">Vingg</a>
                            </DivColum>
                            <DivColum>
                                <p className="Content">Articulos</p>
                                <a className="link-tag">Web Masters</a>
                            </DivColum>
                        </DivRow>
                    </DivRow>
                    <hr />
                </Div70>
                <Div70>
                    <DivRow>
                        <div className="div-footer-logo">
                            <img className="img-footer-logo" alt="logosteve" src="/Assets/logoCanal.png" />
                        </div>
                        <div className="div-iconos">
                            <DivRow>
                                <a href="https://www.youtube.com/@stevechambitas2782"><img alt="youtube" className="img-icon" src="/Assets/yticon.png" /></a>
                                <a href="https://discord.gg/QTdVBq5Q9r"><img alt="discord" className="img-icon" src="/Assets/discord.png" /></a>
                                <a href="https://github.com/MarcoAntonioGuadalupeRivasGuzman"><img alt="github" className="img-icon" src="/Assets/github.png" /></a>
                                <a href="mailto:stevechanvitas@gmail.com"><img className="img-icon" alt="email" src="/Assets/email.png" /></a>
                            </DivRow>
                        </div>
                    </DivRow>
                    <h1 className="title1">Power by <a className="contacto" href="https://react.dev/">React</a></h1>
                </Div70>
            </DivFooter>
        </>
    );
}

export default LabsFooter;