import React from "react";
import { DivCenter, DivCode, DivCurso, DivRead, TitleDiv } from "../../../component/Contenedores/Cajas";

function Prog1Variable() {
    return (
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

                    <TitleDiv>
                        <h1 className="title-subject">Tipos de variables</h1>
                        <hr className="line" />
                    </TitleDiv>

                    <p className="content-curso">
                        Las variables a las que anteriormente llamamos contenedores tienen un tipo especifico
                        para diferentes tipos de informacion, ya que por ejemeplo podemos tener un numero
                        entero o natural que no tienen una fracion o un punto decimal ya que no es igual
                        1 que 1.5, de la misma forma en la programcion se alamcena de diferente manera
                        un numero decimal y un entero.
                    </p>

                    <p className="content-curso">
                        Algunos de los tipos de datos que existen en el lenguaje C son:
                    </p>

                    <ul>
                        <li className="list-item">
                            int
                        </li>

                        <li className="list-item">
                            float
                        </li>
                        <li className="list-item">
                            char
                        </li>
                        <li className="list-item">
                            bool
                        </li>
                        <li className="list-item">
                            double
                        </li>
                        <li className="list-item">
                            long double
                        </li>
                    </ul>

                    <p className="content-curso">
                        Int y float almacenan numeros pero int almacena enteros sin tomar en
                        cuenta ningun decimal mientras que float almacena un entero y 6 o 7 decimales de precision,
                        char solo almacena un dato de tipo caracater y double admite mayor numero de decimales ya que
                        almacena hasta 14 decimales y long double puede almacenar hasta 19 decimanles.
                    </p>

                    <TitleDiv>
                        <h1 className="title-subject">Declaracion de variables</h1>
                        <hr className="line" />
                    </TitleDiv>

                    <p className="content-curso">
                        La declaracion de variables en lenguaje C sigue la siguiente sintaxis:

                    </p>

                    <DivCenter>
                        <DivCode>
                            <p className="code-simple">&#91; Tipo &#93; &#91; Nombre &#93; = &#91; Valor inicial &#93;</p>
                        </DivCode>
                    </DivCenter>

                    <p className="content-curso">
                        Con lo anterior podemos definir los siguientes ejemplos de de declaracion de variables:
                    </p>

                    <p className="content-curso">
                        De esta manera se puedem declarar variables en el lenguaje C y muchos
                        otro lenguajes que tomen en cuenta el tipo de dato que se almacenara.
                    </p>

                    <DivCenter>
                        <DivCode>
                            <div className="div-lines-code">
                                <p className="code-line">int edad=20;</p>
                                <p className="code-line">float precio=9.99;</p>
                                <p className="code-line">char opcion='C';</p>
                            </div>
                        </DivCode>
                    </DivCenter>

                    <p className="content-curso">
                        Los ejemplos anteriores son validos para declarar variables en el lenguaje C aun que tambien
                        se puede declarar mas de una variable en una sola linea como se muestra a continuacion:
                    </p>

                    <DivCenter>
                        <DivCode>
                            <div className="div-lines-code">
                                <p className="code-line">int edad=20,peso=60,numHermanos=3;</p>
                                <p className="code-line">float precio=9.99,altura=1.78,calificacion=9.5;</p>
                                <p className="code-line">char opcion='C',grupo='B',identificador='A';</p>
                            </div>
                        </DivCode>
                    </DivCenter>

                    <p className="content-curso">
                        Es importante notar que se pueden declarar multiples varibles en una sola linea siempre que 
                        sean del mismo tipo, si trataramos de asignar mas de un tipo a una variable daria un error pues 
                        no se puede tener mas de un tipo en una varible.
                    </p>


                    <p className="content-curso">
                        La sintaxis que usa lenguaje C y otros lenguajes para los nombres de las
                        variables son las siguientes:
                    </p>

                    <ul>
                        <li className="list-item">
                            Las variables no pueden empezar por un numero
                        </li>

                        <li className="list-item">
                            Las variables no pueden ser palabra resevadas como for, int, float o main
                        </li>

                        <li className="list-item">
                            Las variables no pueden tener expacios deben ser una sola cadena de caracteres
                        </li>
                    </ul>

                    <p className="content-curso">
                        Lo anterior son reglas que se deben seguir pues de no ser asi, el compilador
                        dara un error pero a continacion se mencionan algunas convenciones que puede
                        ser tomados como consejos para que el codigo sea mas facil de entender para
                        otras personas o si vuelver a leer tu codigo despues de un tiempo
                    </p>

                    <ul>
                        <li className="list-item">
                            Los nombres deben hacer sentido para la variable, si una variable almacena
                            la edad de una persona es buena idea llamara edad y no simplemente x, y o z
                        </li>

                        <li className="list-item">
                            Los nombres deben ser cortos sin perder el sentido del significado para la variable, 
                            en general se busca que se pueda entender la relacion de la variable con el codigo 
                            pero que no sea tan larga como para que estorbe al leer.
                        </li>
                    </ul>

                    <p className="content-curso">
                        Siguiendo con el ultimo consejo de las recomendaciones en caso de que la variable
                        requiera mas de una palabra se pueden usar diferentes nomenclaturas como las siguientes:
                    </p>

                    <p className="content-curso">
                        camelCase: este tipo de convencion nos dice que en caso de tener que usar dos
                        palabras para una variable, la segunda palabra debe empesar con una mayuscula
                        como por ejemplo edadAlumno o pasajePrecio de esta manera se entiende mejor
                        la division de entre las palaras y la forma recuerda a los camellos de ahi
                        que se llame camel case.
                    </p>

                    <p className="content-curso">
                        snake_case: este tipo de convencion nos dice que para que la separacion de
                        las dos palabras se debe usar un guion bajo para separar dos palabras como
                        por ejemplo numero_monedas o numero_casas lo cual recuerda un poco a la forma
                        en que las serpientes se mueven y por eso el nombre.
                    </p>

                    <p className="content-curso">
                        PascalCase: aqui la convecion nos dice que para diferenciar la separacion una
                        variable con dos palabras ambas palabras deben iniciar con mayusculas como por
                        ejemplo VelocidadMax o VelocidadMin en este caso esta convencion se empezo usar
                        en el lenguaje pascal y de ahi viene su nombre.
                    </p>

                    <p className="content-curso">
                        kebab-case: en este caso nos dice que debemos usar un guion para separar las
                        palabras que componen el nombre de la variable y de esta manera se puede notar
                        aun mas que el nombre tiene dos palabras diferentes, algunos ejemplos serian
                        horas-hombre o horas-maquina la forma en que el guion separa las palabras recuerda
                        a la comida kebab que suele estar atrevzada por una brocheta y de ahi proviene el nombre.
                    </p>

                    <p className="content-curso">
                        Las convenciones anteriores funcionan para que nuestor codigo sea mas legible para otras
                        personas si es que alguien mas intenta darle uso a nuestro codigo o si debemos compartilo con
                        otras personas y les sea mas facil entender el porque de una variable.
                    </p>

                    <TitleDiv>
                        <h1 className="title-subject">Compatibilidad entre tipo de variables</h1>
                        <hr className="line" />
                    </TitleDiv>

                    <p className="content-curso">
                        Aunque pudiera parecer logico que tipos de variables que trabajan con un mismo dato pueddan
                        ser compatibles entre si, esto no es del todo correcto ya que si bien float e int trabajan con numeros
                        una variable de tipo int no puede almacenar un tipo de datos flotante y viceversa, aunque en la
                        practica algo curioso puede pasar pues algunos compiladores hacen la adaptacion de una variable a otra
                        pero con un problema y es que los decimales se ven afectados.
                    </p>

                    <p className="content-curso">
                        Si asignamos un flotante a un entero el compilador no arrojara un error pero solo tomara en cuenta la
                        parte entera, los decimales seran ignorados lo cual puede ser un problema si requerimos de estos datos,
                        en el caso contrario realmente no existe probela pues asignarle a un flotante un valor entero solo
                        causa que tengamos el mismo entero pero con una parte decimal.
                    </p>

                    <p className="content-curso">
                        En el caso de los caracteres esto es curioso pues tomar el valor de una variable char y asignarla a una
                        variable int no ocaciona como tal problemas ya que un tipo caracter almacena los caracteracteres por su
                        valor numerico que puede estar contenido en -128 a 128 entero asi que el entero puede almacenar la
                        informacion del caracter pero eso no siempre quiere decir que este manejo sea correcto o que no ocaciones
                        problemas ya que dependiendo de como manejamos la informacion la salida puede ser incorrecta.
                    </p>

                    <TitleDiv>
                        <h1 className="title-subject">Conversion de valores (Casting)</h1>
                        <hr className="line" />
                    </TitleDiv>

                    <p className="content-curso">
                        Si bien podemos asignar valores diferentes a la variables y esperar que el compilador haga la tarea por nosotros
                        tambien podemos hacer la conversion de la variable por nuestra cuenta y de esta manera obtendremos el tipo que
                        deseamos y no el tipo que el compilador cree que debemos obtener, la sintaxis es la siguiente:
                    </p>

                    <DivCenter>
                        <DivCode>
                            <p className="code-simple">(Tipo de dato) Expresion</p>
                        </DivCode>
                    </DivCenter>

                    <TitleDiv>
                        <h1 className="title-subject">Constantes</h1>
                        <hr className="line" />
                    </TitleDiv>

                    <p className="content-curso">
                        Este es un tipo de variable un tanto curiosa ya que puede ser de los tipos anteriormente mencionados
                        pero una vez que se le asigno su valor inicial no se puede cambiar en ningun momento, esto puede ser util
                        cuando queremos asegurarnos de que el codigo no pueda cambiar o que queremos que siempre mantenga un valor
                        como el numero pi o la constante de aceleracion, su sintaxis es la siguiente:
                    </p>

                    <DivCenter>
                        <DivCode>
                            <p className="code-simple">const  &#91; Tipo &#93; &#91; Nombre &#93; = &#91; Valor &#93;</p>
                        </DivCode>
                    </DivCenter>

                    <TitleDiv>
                        <h1 className="title-subject">Alcance de las variables</h1>
                        <hr className="line" />
                    </TitleDiv>

                    <p className="content-curso">
                        Una variable puede clasificarse por el tipo de alcance que tiene ya que puede ser global o local, este tema
                        se entiende mejor cuando se vean funciones o se entienda que es una funcion pero por el momento basta con decir
                        que una variable local solo existe y puede ser referenciada dentro de la funcion en que se declaro, si queremos usar
                        una variable local fuera de su alcance habra un error que indicara que no existe esa variable ya que lo que esta dentro
                        de una funcion solo existe dentro de si misma.
                    </p>

                    <p className="content-curso">
                        Una variable global puede ser usada en cualquier parte del codigo en que se declaro, si trataramos de usar una variable
                        que esta en otro archivo .c tendriamos el mismo problema de que la variable no esta declarada, pero siempre y cuando estemos
                        en el mismo archivo y la declamos para que sea global podremos usar la variable tanto dentro como fuera de funciones esto es util si
                        no tenemos claro como manejaremos ese dato pero en ocaciones puede ser mejor usar una variable local en caso de ser posible.
                    </p>

                </DivRead>
            </DivCurso>
        </>
    );
}

export default Prog1Variable;