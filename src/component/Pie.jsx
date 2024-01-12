import React from "react";
import { Div70, DivFooter, DivRow } from "./Contenedores/Cajas";

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
                </Div70>
            </DivFooter>
            <div className="gif-footer">
                <div className="footer-item">
                    <h1 className="title1">Hola a todos</h1>
                    <p className="Content">Esta pagina fue creada como primer
                        portafolio pero no por eso es menos importante ya que
                        recibira actualizaciones para hacerla mas interesante.
                    </p>

                    <p className="Content">La version actual seria 2.8.0 pero
                        se planea que siga evolucionando hasta volverse una
                        plataforma mas completa si quieres ver las novedades
                    </p>

                    <a className="contacto" href="progreso">Aqui</a>

                    <p className="Content">Tambien puedes pasar a mi canal de Youtube
                        quiza encuentras contenido que te agrade y me agregas a tus canales
                        preferidos
                    </p>
                    <p className="Content">Sigue aprendiendo</p>
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