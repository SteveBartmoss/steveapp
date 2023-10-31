import React from "react";

function Prog1Compile() {
    return (
        <>
            <div className="div-curso">

                <div className="center">
                    <h1 className="title-subject"> Proceso de compilación</h1>
                </div>

                <p className="content-curso">
                    La compilación es el procedimiento mediante el cual un programa llamado compilador 
                    recibe como entrada el código fuente de otro programa, para convertir lo en un archivo 
                    binario que el procesador puede leer y ejecutar. Lo anterior es necesario por una simple 
                    razón los humanos leemos y escribimos en un idioma diferente ya que nosostros usamos 
                    letras para escribir, así como reglas semánticas pero las computadoras solo saben leer 
                    unos y ceros, esto es un problema ya que escribir en unos y ceros puede ser muy complejo 
                    para los humanos ya que se tendría que analizar grandes bloques de unos y ceros para 
                    poder entender una palabra. Por esta razón las personas pensaron una mejor manera de dar 
                    instrucciones a una computadora y está es mediante un lenguaje de programación que sea 
                    más fácil de leer para las personas y con esto surgieron los lenguajes de programación, 
                    aunque suene ilógico los primeros programas que se crearon estaban escritos por unos y 
                    ceros así que los programadores de esa época debian leer muy bien sus códigos para no 
                    cometer errores. De manera simple se puede pensar que el proceso de compilar un 
                    programa es transformar cada una de nuestras líneas de código a unos y ceros, el procesó 
                    verdadero es mucho más complejo que lo que se menciona pero para este curso basta con 
                    saber un ejemplo simple ya que la tarea de crear un compilador esta bastante arriba en 
                    la escala de aprendizaje ya que esto suele ser un proyecto de una clase de universidad 
                    de los últimos grados.
                </p>

                <div className="center">
                    <h1 className="title-subject">No compila :(</h1>
                </div>

                <p className="content-curso">
                    Está es una frase típica de programadores y hace referencia a qué el complidor no 
                    pudo traducir nuestros código a su equivalente en unos y ceros, aunque esto es un 
                    error se debe hacer una distinción ya que si un programa no compila es porque su 
                    código está más escrito y efectivamente es un error pero suele ser un error en la 
                    escritura del mismo que también le llaman error lexico. Cuando nuestro programa se 
                    termina de compilar y al ejecutarlo no hace lo que esperamos que haga como poner 
                    ejemplo no imprime el mensaje correcto o el resultado de una operación es incorrecto 
                    entonces estamos frente a un error lógico o un error ala hora de decirle a la computadora 
                    lo que tiene que hacer, por esta razón es importante distinguir los dos tipos de errores 
                    ya que los dos provienen de diferente parte y de igual manera la forma de resolver cada 
                    tipo de error es diferente la una de la otra.
                </p>

                <div className="center">
                    <h1 className="title-subject">El compilador es tu amigo</h1>
                </div>

                <p className="content-curso">
                    Cuando tenemos un problema al compilar quiere decir que escribimos mal una parte de nuestro 
                    código, puede ser porque olvidamos un letra en alguna palabra reservada, porque no escribimos 
                    la palabra reservada correcta o porque simplemente olvidamos el típico punto y coma ; en estos 
                    casos el complidor nos indicara que hay un error en el código y por lo general te menciona la 
                    línea en que se encontró el error. Además también te dará una idea de que lo que está mal ya que 
                    suele mostrar mensajes como se esperaba ) y se recibio , o se esperaba ; y se recibio : . 
                    Mientras mejor hecho este el compilador más información y más errores será capaz de reconocer 
                    ya que también puede indicar errores de tipos de datos, que una variable no exista entre muchos 
                    otros errores de sintaxis, otra de las características de un buen compilador es que pueda tolerar 
                    los errores y esto quiere decir que no se detenga en el primer error que se encuentre si no que lo 
                    detecte continúe su proceso y busque la mayor cantidad de errores que pueda, en este sentido el 
                    compilador es un buen amigo del programador ya que ayuda en la tarea de resolver errores pero no 
                    es perfecto y algunos tipos de errores no será capaz de detectar.

                </p>

                <div className="center">
                    <h1 className="title-subject">Olvide un punto y coma :(</h1>
                </div>

                <p className="content-curso">
                    Es el mayor de los problemas a la hora de inciar a programar ya que en en varios lenguajes de 
                    programación este símbolo es necesario para que el programa funcione bien, la razón es simple 
                    un punto y cómo indica al compilador el final de una línea de código y así sabe que debe leer 
                    la línea que sigue. Así como las personas sabemos que el renglón termino y debemos bajar a leer 
                    el siguiente el programa sabe que al ver un punto y cómo debe leer la siguiente línea de nuestro 
                    código, puede que te estés preguntando porque el compilador no puede usar el salto de línea para 
                    saber cuándo un renglón termina y esto es porque los humanos lo usamos al escribir y esto limitaría 
                    la forma en que se puede escribir el código pues tendríamos que usar el salto de línea solamente 
                    cuando queremos finalizar una línea de código y no cuando ya se abarcó el espacio legible en la pantalla.
                    Por lo anterior se decidío usar el punto y cómo carácter final de una línea de código y así permitir 
                    a las personas dar saltos de línea siempre que quieran, logrando que el código quede de una forma más 
                    legible y que no se tenga que desplazar la barra horizontal todo el tiempo para poder leer una línea 
                    bastante larga.
                </p>
            </div>
        </>
    );
}

export default Prog1Compile;
