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
                <p className="Content">stevechambitas@gmai.com</p>
                <a>mail</a>
                <h1 className="title1">Githud</h1>
                <h1 className="title1">Youtube</h1>
                <h1 className="title1">Power by Giphy</h1>
            </div>
        </div>
    );
}

export default FooterHave;