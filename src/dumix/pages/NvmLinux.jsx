import React from "react";
import { Div70, DivCenter, DivCode, DivRead, Paper } from "../../component/Contenedores/Cajas";

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

                        <p className="content-curso">
                            Fue gracias a esto que descubri una herramienta para poder instalar
                            node js en una distribucion de linux de una forma rapida y simple,
                            nvm quiere decir node version manager y como su nombre los indica es
                            mas que un simple instalador de node si no que tambien es un manejador
                            de versiones que nos permite mantener diferentes versiones.
                        </p>

                        <p>
                            Para instalar esta aplicacion debemos tener curl que es un comando
                            que nos permite traer datos desde un servidor mediante una url, este
                            comando puede ser util pero tambien debe ser usado con cuidado pues
                            software malicioso podria llegar usando este comando, en este caso el
                            url es el oficial del programa pero siempre se debe verificar que es lo
                            que estamos descargando
                        </p>

                        <DivCenter>
                            <DivCode>
                                <p className="code-simple">curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash</p>
                            </DivCode>
                        </DivCenter>

                        

                        <h1 className="title1">Mas que un simple instalador</h1>


                    </DivRead>
                </Div70>
            </Paper>

        </>
    );
}

export default NvmLinux;