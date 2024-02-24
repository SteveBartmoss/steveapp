import React from "react";
import { DivCenter, Paper } from "../../component/Contenedores/Cajas";

function NvmLinux(){
    return(
        <>
        <Paper>
            <DivCenter>
                <h1 className="title-1">Node Version Manager</h1>
            </DivCenter>
        </Paper>
        

        <p>
            Una gran herramienta a la hora de crear paginas web o 
            aplicaciones web es node js ya que nos permite ejecutar 
            el entorno de programacion para una pagina web, pero si 
            llevas un tiempo usando sistemas linux entonces sabras que 
            es un poco elaborado instalar programas que no estan en los 
            repositorios oficiales
        </p>
        </>
    );
}

export default NvmLinux;