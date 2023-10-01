import React from "react";

function Prog1Presentacion() {
    return (
        <>
            <div className="div-curso">
                <div className="center">
                    <h1 className="title-subject">Acerca del curso</h1>
                </div>

                <hr className="line" />

                <p className="content-curso">
                    El curso esta pensado para que personas que no han programado
                    nunca y que quieren empezar a programar, por esta razon se abordan
                    temas simples y tambien se explicaran cosas sencillas como la configuracion
                    del ambiente para poder inciar con la programacion.
                </p>

                <p className="content-curso">
                    El curso se creo por un estudiante de temas relacionados con programcion pero
                    se espera que la informacion pueda servir para las personas que
                    quieren aprender y quisa la explicacion sea mas sencilla y clara.
                </p>

                <p className="content-curso">
                    Durante el curso se invitara al usuario a usar tanto el sistema operativo
                    windows como un sistema linux aunque las variaciones estaran principalmente
                    en la configuracion del ambiente de desarrollo.
                </p>
                <div className="center">
                    <h1 className="title-subject">Ambiente de desarrollo</h1>
                </div>

                <hr className="line" />

                <p className="content-curso">Para preparar el ambiente de desarrollo para el curso sera
                    necesario contar con los siguientes requisitos
                </p>

                <ul>
                    <li>Lenguaje C</li>
                    <li>Un compilador de lenguaje C</li>
                    <li>Un editor de codigo o texto</li>
                    <li>Terminal o cli del sistema</li>
                </ul>

                <p className="content-curso">
                    Si se desea se puede usar un IDE como codeblocks, Clion, eclipse,
                    Codelite o visual studio aunque mas adelante se mencionarana algunas
                    ventajas que tiene solo usar un editor de texto en lugar de usar un
                    ide
                </p>

                <div className="center">
                    <h1 className="title-subject">Porque es mejor usar un Editor de Codigo</h1>
                </div>


                <p className="content-curso">
                    Viendo el tema desde el ambito de productividad no es lo mas recomendable
                    ya que al no usar un ide tenemos que invertir tiempo en pasos extras como
                    tener que pasar a la terminal a compilar, perdemos efectividad como puede
                    ser compilar paso a paso un programa, ya que muchas veces los editores de
                    codigo no tienen estos complementos y tenemos que agregarlos por nuestra
                    cuenta.
                </p>

                <p className="content-curso">
                    A pesar de lo anterior el tener que compilar por nuestra cuenta nos deja ver
                    mas del proceso que conlleva compilar un programa teniendo que usar los comandos
                    necesario para generar los ejecutables de los programas y tener iteracciones con
                    la terminal ya que pocos estan acostumbrados a esto a pesar de que la terminal puede
                    ser un herramienta muy importante
                </p>

            </div>
        </>
    );
}

export default Prog1Presentacion;