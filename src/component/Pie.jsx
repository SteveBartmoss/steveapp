import React from "react";
import { Div70, DivColum, DivFooter, DivRow } from "./Contenedores/Cajas";

function Pie() {
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
                        <div className="div-footer-alert">
                            <h1 className="title1">Hola a todos</h1>
                            <p className="Content">Esta pagina fue creada como primer
                                portafolio pero no por eso es menos importante ya que
                                recibira actualizaciones para hacerla mas interesante.
                                La version actual seria 2.8.0
                                Tambien puedes pasar a mi canal de Youtube
                                quiza encuentras contenido que te agrade y me agregas a tus canales
                                preferidos sigue aprendiendo.
                            </p>
                        </div>
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
                            <img className="img-footer-logo" src="/Assets/logoCanal.png" />
                        </div>
                        <div>
                            <DivRow>
                                <a href="https://www.youtube.com/@stevechambitas2782"><img alt="youtube" className="img-icon" src="/Assets/yticon.png" /></a>
                                <a href="https://discord.gg/QTdVBq5Q9r"><img alt="discord" className="img-icon" src="/Assets/discord.png" /></a>
                                <a href="https://github.com/MarcoAntonioGuadalupeRivasGuzman"><img alt="github" className="img-icon" src="/Assets/github.png" /></a>
                                <a href="mailto:stevechanvitas@gmail.com"><img className="img-icon" alt="email" src="/Assets/email.png" /></a>
                            </DivRow>
                        </div>
                    </DivRow>
                </Div70>
            </DivFooter>
            <div className="gif-footer">
                <div className="footer-item">

                    <p className="Content">La version actual seria 2.8.0 pero
                        se planea que siga evolucionando hasta volverse una
                        plataforma mas completa si quieres ver las novedades
                    </p>

                    <a className="contacto" href="progreso">Aqui</a>
                    
                    <p className="contacto">Quieres aprender a programar? visita el enlace</p>
                </div>
                <div className="item-grid">
                    <h1 className="title1">Contacto</h1>
                    <p className="contacto">Enviame un <a className="contacto" href="mailto:stevechanvitas@gmail.com">Correo</a></p>
                    <a className="contacto" href="https://github.com/MarcoAntonioGuadalupeRivasGuzman">Githud</a>
                    <a className="contacto" href="https://www.youtube.com/@stevechambitas2782">Youtube</a>
                    <p className="contacto">Preguntas frecuentes</p>
                </div>
            </div>
        </>
    );
}

export default Pie;