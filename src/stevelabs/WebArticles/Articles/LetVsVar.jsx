import React from "react";
import { DivCenter } from "../../../component/Contenedores/Cajas";
import CreatorSing from "../../../component/sing";

let example1 = ' javascript function example() { if (true) { var x = 5; } console.log(x); // 5 (incluso fuera del bloque if) } example();'

let example2 = 'javascript function example() { if (true) { let x = 5; } console.log(x); // ReferenceError: x is not defined } example();'

function LetVsVar() {
    return (
        <>
            <div className="div-about">

                <DivCenter>
                    <h1 className="main-title">Let vs Var</h1>
                </DivCenter>

                <hr className="line" />

                <CreatorSing autor={"Steve"} date={"08/04/23"} img={"/Assets/steveA.png"} grade={"Free coder"} />

                <p className="content-curso">
                    El uso de var en JavaScript ha sido tradicionalmente la forma de declarar variables, pero con la introducción de let y const en ECMAScript 6 (ES6), hay varias razones por las cuales var ya no es aconsejable para la mayoría de los casos. Aquí te explico algunas de estas razones:
                    Problemas con var

                    Ámbito de Función (Function Scope) en lugar de Ámbito de Bloque (Block Scope):
                    Las variables declaradas con var tienen ámbito de función, lo que significa que están disponibles en toda la función en la que se declaran, incluso si se declaran dentro de un bloque (por ejemplo, dentro de un if o un for).
                    Esto puede llevar a comportamientos inesperados y errores difíciles de depurar.
                </p>

                <h1 className="title1">Problemas con el Hoisting:</h1>
                <hr className="line" />

                <p className="content-curso">
                    Las variables declaradas con var son "hoisted" (elevadas) al comienzo de su contexto de ejecución (contexto de función o contexto global), pero no se inicializan. Esto significa que puedes usar la variable antes de su declaración sin obtener un error.
                </p>

                <p className="content-curso">
                    javascript

                    console.log(x); // undefined
                    var x = 5;
                </p>

                <p className="content-curso">
                    Aunque esto puede parecer conveniente, a menudo puede llevar a errores difíciles de entender y depurar.
                </p>

                <h1 className="title1">Declaraciones Duplicadas:</h1>
                <hr className="line" />

                <p className="content-curso">
                    Con var, puedes declarar la misma variable múltiples veces sin error,
                    lo que puede sobrescribir silenciosamente el valor de la variable y causar problemas.
                </p>

                <p className="content-curso">
                    javascript

                    var x = 1;
                    var x = 2;
                    console.log(x); // 2
                </p>

                <h1 className="title1">Ventajas de let y const</h1>
                <hr className="line" />

                <p className="content-curso">
                    Ámbito de Bloque (Block Scope):
                    Las variables declaradas con let y const tienen ámbito de bloque, lo que significa que solo están disponibles dentro del bloque donde se declaran (por ejemplo, dentro de un if o for).
                </p>

                <h1 className="title1">Sin Hoisting de Inicialización:</h1>
                <hr className="line" />

                <p className="content-curso">
                    Aunque let y const también son hoisted, no están inicializados hasta que el intérprete alcanza su declaración en el código. Esto significa que usar la variable antes de su declaración resultará en un error.
                </p>

                <p className="content-curso">
                    javascript

                    console.log(x); // ReferenceError: x is not defined
                    let x = 5;
                </p>

                <h1 className="title1">Declaraciones Duplicadas Prohibidas:</h1>
                <hr className="line" />

                <p className="content-curso">
                    Con let y const, intentar declarar una variable con el mismo nombre en el mismo ámbito resulta en un error.
                </p>

                <p className="content-curso">
                    javascript

                    let x = 1;
                    let x = 2; // SyntaxError: Identifier 'x' has already been declared
                </p>

                <h1 className="title1">Constantes con const:</h1>
                <hr className="line" />

                <p className="content-curso">
                    const se usa para declarar constantes, lo que garantiza que el valor de la variable no se puede reasignar después de su declaración. Esto es útil para variables cuyo valor no debe cambiar.
                </p>

                <p className="content-curso">
                    javascript

                    const y = 10;
                    y = 15; // TypeError: Assignment to constant variable.
                </p>

            </div>





            <h1>Conclusión</h1>

            <p>
                Usar let y const en lugar de var proporciona un control más predecible y seguro sobre el alcance y el comportamiento de las variables. let debe usarse para variables cuyo valor puede cambiar, y const para variables cuyo valor no debe cambiar. Estos mecanismos ayudan a evitar errores comunes relacionados con el alcance y el hoisting que pueden ocurrir al usar var.
            </p>
        </>
    );
}

export default LetVsVar;