import React from "react";

function LabsFooter(){
    return(
        <div className="gif-footer">
            <div className="footer-item">
                <h1 className="title1">Importante</h1>
                <p className="Content">Esta seccion es creada con el fin de compartir informacion 
                con otros usuarios o personas que quieren empezar en el mundo de linux pero 
                que pueden verse abrumados por la cantidad de comandos o diferencias que se 
                tienen con los sistemas de linux</p>
            </div>
            <div className="item-grid">
                <h1 className="title1">Contacto</h1>
                <p className="contacto">Enviame un <a className="contacto" href="mailto:stevechanvitas@gmail.com">Correo</a></p>
                <a className="contacto" href="https://github.com/MarcoAntonioGuadalupeRivasGuzman">Githud</a>
                <a className="contacto" href="https://www.youtube.com/@stevechambitas2782">Youtube</a>
                <h1 className="title1">Power by <a className="contacto" href="https://giphy.com/">Giphy</a></h1>
            </div>
        </div>
    );
}

export default LabsFooter;