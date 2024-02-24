import React from "react";
import { Div70, DivCenter, DivRead, Paper } from "../../component/Contenedores/Cajas";

function NvmLinux() {
    return (
        <>
            <Paper>

                <DivCenter>
                    <h1 className="title-1">Node Version Manager</h1>
                </DivCenter>

                <Div70>

                    <DivRead>
                        <p className="content-curso">
                            Una gran herramienta a la hora de crear paginas web o
                            aplicaciones web es node js ya que nos permite ejecutar
                            el entorno de programacion para una pagina web, pero si
                            llevas un tiempo usando sistemas linux entonces sabras que
                            instalar programas no suele ser tan simple.

                        </p>

                        <p className="content-curso">
                            Esto es porque si el programa no esta en los repositorios 
                            oficiales es algo tardado o para algunos puede ser dificil 
                            ya que aunque me guste usar linux debo admitir que en ocaciones 
                            puede ser algo frustante tener que seguir mas pasos para poder 
                            instalar un programa.
                        </p>


                    </DivRead>
                </Div70>
            </Paper>

        </>
    );
}

export default NvmLinux;