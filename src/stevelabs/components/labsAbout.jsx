import React from "react";
import { PanelText } from "../../component/Contenedores/Cajas";

function LabsAbout() {
    return (
        <>
            <PanelText>
                <h1 className="maint-title">¿Programar es dificil?</h1>
                <p className="main-text">La respuesta corta es si pero no solo debemos quedarnos con
                    eso ya que esto puede variar mucho dependiendo de lo que queremos hacer
                    ya que existen algoritmos bastantes complejos pero que no siempre debemos
                    imeplementar, ya que en muchos casos la programacion que usaremos no sera tan compleja
                    pero si pueden ser bastantes lineas de codgio las que se utilizen en una aplicacion.
                </p>

                <p className="main-text">En el curos de primeros pasos se mostraran implementaciones simples
                    de codigo que permitiran al usuario tener una primer experiencia con la programacion que no
                    sea tan abrumadora y que pemrita ter un poco mas de confianza, para poder tomar mayores retos
                    que permitan obtener mejores conocimientos para implementaciones mas complejas.
                </p>

                <hr className="about-line"></hr>

                <h1 className="maint-title">¿Porque deberia aprender a programar?</h1>

                <p className="main-text">Si no eres un usuario que esta enfocado a la informartica, las ingenierias de
                    computacion o ciencias puede que no sea una gran herramienta, no lo mal interpretes no es malo que aprendas
                    linux pero siendo un usario comun de computadora no obtendras una herramienta tan util pero es bueno conocer
                    una alternativa al tipico sistema operativo windows
                </p>

                <hr className="about-line"></hr>

                <h1 className="maint-title">La programacion esta en todos lados</h1>

                <p className="main-text">Aunque no lo paresca linux es muy popular en las empresas y de hecho si tienes
                    un telefono con sistema android esta usando un sistema operativo basado en linux sin saberlo, ademas del
                    ejemplo anterior muchas empresas de servicio de hosting o cloud utilizan sistemas de linux para sus
                    plataformas porque es un sistemas muy eficiente y bastante estable
                </p>
            </PanelText>
        </>
    );
}

export default LabsAbout;