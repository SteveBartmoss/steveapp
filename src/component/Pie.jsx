import React from "react";

function Pie() {
    return (
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
    );
}

export default Pie;