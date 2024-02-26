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

                        <p className="content-curso">
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

                        <p className="content-curso">
                            Una vez que ejecutamos el comando podemos usar el siguiente comando 
                            para verificar que todo se instalo correctamente
                        </p>

                        <DivCenter>
                            <DivCode>
                                <p className="code-simple">nvm --version</p>
                            </DivCode>
                        </DivCenter>

                        <p className="content-curso">
                            Este comando nos debe arrojar un numero que indica la version del programa 
                            que se instalo, si este comando no es reconocido o no funciona se tiene 
                            que reinciar nuestra terminal asi que bastara con cerrar y abrir una nueva 
                            terminal
                        </p>

                        <p className="content-curso">
                            Ya que verificamos la version del programa podemos usar el siguiente 
                            comando para instalar node js
                        </p>

                        <DivCenter>
                            <DivCode>
                                <p className="code-simple">nvm install &#91; version de node &#93;</p>
                            </DivCode>
                        </DivCenter>

                        <p className="content-curso"> 
                            Con esto podemos instalar la version que queremos ya sea la mas actual 
                            o alguna en espefico, esto es util cuanod alguna herramienta o libreria 
                            solo funciona en una version en especifico y con esta herramienta evitamos 
                            tener estos problemas 
                        </p>

                        <p className="content-curso">
                            Estos son otros comandos utiles para usar en nvm 
                        </p>

                        <p className="content-curso">
                            Para cambiar la version de node que estamos usando
                        </p>

                        <DivCenter>
                            <DivCode>
                                <p className="code-simple">nvm use &#91; version de node &#93;</p>
                            </DivCode>
                        </DivCenter>    

                        <p className="content-curso">
                            Para listar las versiones de node que tenemos instaladas
                        </p>

                        <DivCenter>
                            <DivCode>
                                <p className="code-simple">nvm ls</p>
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