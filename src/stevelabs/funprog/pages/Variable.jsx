import React from "react";
import { DivCurso, DivRead, TitleDiv } from "../../../component/Contenedores/Cajas";

function Prog1Variable(){
    return(
        <>
            <DivCurso>
                <DivRead>

                    <TitleDiv>
                        <h1 className="title-subject">Variables</h1>
                        <hr className="line" />
                    </TitleDiv>

                    <p className="content-curso">
                        La variables son contenedores para informacion o valores de un programa 
                        los cuales nos permiten tener informacion dentro de nuestro programa y 
                        poder manipularla dentro de nuestro codigo.
                    </p>

                    <p className="content-curso">
                        Las razones para tener que almacenar informacion pueden ser diversas ya que 
                        por ejemplo podemos querer que el usuario ingrese algo hacia nuestro programa 
                        y luego nosotros manipular esa informacion, por ejemplo en programa que simula 
                        una calculadora pedira al usuario que ingrese los numeros que desea sumar, restar 
                        o en general los numeros a los cuales desea aplicar alguna operacion. En este caso 
                        es util que usemos variables para poder guardar los valores que el usario ingreso a 
                        nuestro programa y despues poder hacer las operaciones y dar el resultado al usuario.
                    </p>

                    

                </DivRead>
            </DivCurso>
        </>
    );
}

export default Prog1Variable;