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
                        <p>
                            Una gran herramienta a la hora de crear paginas web o
                            aplicaciones web es node js ya que nos permite ejecutar
                            el entorno de programacion para una pagina web, pero si
                            llevas un tiempo usando sistemas linux entonces sabras que
                            es un poco elaborado instalar programas que no estan en los
                            repositorios oficiales puese ser algo tardado o para algunos 
                            puede ser un dificil ya que aunque me guste usar linux 
                            debo admitir que en ocaciones puede ser algo frustante/
                        </p>
                    </DivRead>
                </Div70>
            </Paper>

        </>
    );
}

export default NvmLinux;