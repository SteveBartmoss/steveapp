import React from "react";
import { Div60, Div70, DivAuto, DivColum, DivFooter, DivRow } from "./Contenedores/Cajas";

function Pie() {
    return (
        <>
            <DivFooter>
                <Div70>
                    <ul className="lista">
                        <li>
                            <a className="archor" href="stevelabs">SteveLabs</a>
                        </li>
                        <li>
                            <a className="archor" href="dumix">Dumix</a>
                        </li>
                        <li>
                            <a className="archor" href="articulos">Articulos</a>
                        </li>
                        <li>
                            <a className="archor" href="changelog">ChabgeLog</a>
                        </li>
                        <li>
                            <a className="archor" href="roadmap">Road Map</a>
                        </li>
                    </ul>
                </Div70>
                <Div70>
                    <DivRow>
                        <Div60>
                            <h1 className="title1">Hola a todos</h1>
                            <p className="content-footer">Esta pagina fue creada como primer
                                portafolio pero no por eso es menos importante ya que
                                recibira actualizaciones para hacerla mas interesante.
                                La version actual seria 3.1.0 y se planea que siga
                                evolucionando hasta volverse una plataforma mas completa.
                                Tambien puedes pasar a mi canal de Youtube quiza encuentras
                                contenido que te agrade y me agregas a tus canales
                                preferidos sigue aprendiendo.
                            </p>
                        </Div60>
                        <DivRow>
                            <DivColum>
                                <p className="Content">Cursos</p>
                                <a href="/" className="link-tag">About</a>
                            </DivColum>
                            <DivColum>
                                <p className="Content">Developer</p>
                                <a href="/" className="link-tag">How to</a>
                            </DivColum>
                            <DivColum>
                                <p className="Content">Dumix</p>
                                <a href="/" className="link-tag">Linux basico</a>
                                <a href="/" className="link-tag">Comandos</a>
                                <a href="/" className="link-tag">Vingg</a>
                            </DivColum>
                            <DivColum>
                                <p className="Content">Articulos</p>
                                <a href="/" className="link-tag">Web Masters</a>
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
                        <DivAuto>
                            <DivRow>
                                <a href="https://www.youtube.com/@stevechambitas2782"><img alt="youtube" className="img-icon" src="/Assets/yticon.png" /></a>
                                <a href="https://discord.gg/QTdVBq5Q9r"><img alt="discord" className="img-icon" src="/Assets/discord.png" /></a>
                                <a href="https://github.com/SteveBartmoss"><img alt="github" className="img-icon" src="/Assets/github.png" /></a>
                                <a href="mailto:stevechanvitas@gmail.com"><img className="img-icon" alt="email" src="/Assets/email.png" /></a>
                            </DivRow>
                        </DivAuto>
                    </DivRow>
                    <h1 className="title1">Power by <a className="contacto" href="https://react.dev/">React</a></h1>
                </Div70>
            </DivFooter>
        </>
    );
}

export default Pie;