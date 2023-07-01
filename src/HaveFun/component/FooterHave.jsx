import React from "react";
import "../../App.css";

function FooterHave() {

    return (
        <div className="gif-footer">
            <div className="footer-item">
                <h1 className="title1">Importante</h1>
                <p className="Content">Esta seccion fue creada gracias al curso de
                    react de Fernando Herrera, si quieres apoyarlo puedes comprar su
                    curso o recomendarlo.
                </p>

                <p className="Content">Esta pagina forma parte de mi portafolio, si
                    te interesa puedes contactarme en algunas de las siguientes redes.</p>

                <p className="Content">Tambien puedes pasar a mi canal de Youtube
                    quiza encuentras contenido que te agrade y me agregas a tus canala
                    preferidos</p>
            </div>
            <div className="item-grid">
                <h1 className="title1">Contacto</h1>
                <a>Conrreo</a>
                <h1 className="title1">Githud</h1>
                <a href="https://github.com/MarcoAntonioGuadalupeRivasGuzman">Githud</a>
                <h1 className="title1">Youtube</h1>
                <a href="https://www.youtube.com/@stevechambitas2782">Youtube</a>
                <h1 className="title1">Power by Giphy</h1>
                <a href="https://giphy.com/">Giphy</a>
            </div>
        </div>
    );
}

export default FooterHave;