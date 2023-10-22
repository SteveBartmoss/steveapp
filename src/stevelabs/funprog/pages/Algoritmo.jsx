import React from "react";

function Prog1Algoritmo() {
    return (
        <>
            <div className="div-curso">

                <div className="center">
                    <h1 className="title-subject">Algoritmo</h1>
                </div>

                <hr className="line" />

                <p className="content-curso">
                    Es un conjunto de reglas o instrucciones definidas, no ambiguas, ordenadas y
                    finitas que permiten resolver un problema.
                </p>

                <p className="content-curso">
                    la anterior definición puede ser abrumadora pero es solo por la definición
                    formal de la misma ya que en realidad las personas usan un algoritmo todo el
                    tiempo. Seguir un manual, las instrucciones para una dirección o un proceso de
                    instalación de un programa es también seguir un algoritmo, en la programación
                    un tema principal son los algoritmos ya que un programa es un conjunto de instrucciones
                    ordenadas y que son finitas que permiten resolver un problema, con lo anterior podemos
                    ver a los programas como un conjunto de algoritmos.
                </p>

                <div>
                    <h1 className="title-subject">Representaciones de un algoritmo</h1>
                </div>

                <p className="content-curso">
                    Un algoritmo puede tener diferentes representacións ya que por ejemplo un manual de
                    instrucciones puede componerse solamente de imágenes, solamente de texto o combinar
                    ambas pero aún con eso el resultado debe ser el mismo resolver el problema planteado
                    siguiendo los pasos descritos. En la programación hay diferentes maneras de representar
                    un programa y una de las más populares es el diagrama de flujo y el pseudo código que si
                    bien nunca me agradaron pueden ser de gran utilidad a la hora de enfrentar problemas de
                    gran complejidad.
                </p>

                <div>
                    <h1 className="title-subject">Importancia de un diagrama de flujo</h1>
                </div>

                <p className="content-curso">
                    Aunque pueda parecer una pérdida de tiempo (por mucho tiempo yo también lo considere así)
                    hacer un diagrama de flujo antes de crear el programa te puede dar una visión clara de como
                    resolver el problema, muchas veces los programadores que inician no definen bien los pasos para
                    resolver el problema antes de crear el programa y el resultado es que no tienen idea de cómo
                    iniciar el programa o crean codigo que no es necesario para resolver el problema. Una de las
                    bases para poder programar sin tantos problemas es que definir cuál es la entrada de nuestro
                    programa y cuál debe ser la salida, en el medio de pueden definir pasos claves como una condición,
                    un bucle o llamadas a otra programa.Tener claro la entrada, los pasos y la salida permite al
                    programador tener una vista previa de lo que tiene que codificar y de esta manera no se inicia
                    desde cero, si no que se puede buscar como hacer un paso en específico o diseñar una función en
                    específico para resolver un paso, esto aunque no lo parezca puede simplificar mucho los problemas
                    que lleva la creación de un programa.
                </p>

                <div>
                    <h1 className="title-subject">Ejemplo de un algoritmo</h1>
                </div>

                <p className="content-curso">
                    Problema: crear un algoritmo que incremente una número hasta el que su valor sea 10
                    Solución: tomamos como base el número 0 y preguntamos la base es igual a 10, si no es igual 10
                    entonces a la base le sumamos uno, si  base es igual a 10 entonces hemos terminado. El ejemplo
                    anterior es muy simple pero permite ver cómo se codificaria un programa que incremente una
                    variable hasta 10 o incluso hasta el número que queramos ya que se puede sustituir el número 10
                    por cualquier otros, podemos identificar que en el ejemplo la base es la entrada de nuestro programa
                    que en este caso empieza como 0, y que nuestra salida es la base con el valor 10, los pasos Intermedios
                    serían preguntar si la base es igual a 10 y sumar uno a la base si no es a 10. En ejemplo anterior usamos
                    la palabra base para referirnos al número que queremos que llegue a 10 pero en programación a esto
                    le llamamos variable, preguntar si la base es igual a 10 sería el equivalente a un operador lógico
                    pero en secciones posteriores se abordan con más detalle estos temas. En esta sección es importante
                    conocer y entender el concepto de algoritmo ya que es algo fundamental para la programación.
                </p>

                <div>
                    <h1 className="title-subject">Ejercicios propuestos</h1>
                </div>

                <p className="content-curso">
                    Crear el algoritmo para saber si un número es par.

                    Crear un algoritmo obtener el cuadro de un número.

                    Crear el algoritmo para obtener el área de un cuadro.
                </p>
            </div>
        </>
    );
}

export default Prog1Algoritmo;