import React from "react";
import '../App.css';

function Branding({name, title, url}){
    return(
        <section className={name}>
            <div className="BrandContenido">
                <h2>{title}</h2>
                <a href={url} rel="noreferrer" target="_blank" className="Btn">Ir al canal</a>
            </div>
        </section>
    );
}

export default Branding;