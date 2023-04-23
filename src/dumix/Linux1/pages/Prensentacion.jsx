import React from "react";

function Presentacion(){
    return(
        <div className="div-curso">
            <h1 className="title1">Hola a todos</h1>
            <p className="Content">Este curso tiene como finalidad dar una introduccion
            a las personas que nunca han utilizado un sistema operativo linux pero tambien
            para las personas que nnunca han interactuado con la terminal de comando, ya que
            no se tendra en cuenta el uso de la interfaz grafica del sisetma operativo pues
            en este apartado un sistema operativo como ubuntu no difiere tanto con windows y
            ciertamente lo interesante de usar linux no esta en el manejo de la interfaz de
            usuario si no el manejo de su terminal y de las herramientas que nos provee como 
            el manejador de paquetes</p>

           <p className="Content">No se espera que la persona que tome el curso tenga experiecia
           en el sistema pero si algunos aspectos como tener instaldo un sistema operativo de linux,
           ya sea como maquina virtual, dual boot o que solo tengas instalado linux en tu maquina, lo 
           anterior es para pode poner en practica los comandos que se mostraran durante el curso. 
           Otros sistemas operativos cuentan con su propia consola de comandos y es posible usarla de
           manera similar a como se utiliza la terminal de linx pero es importante mencionar que los
           comandos pueden no ser los mismos y en ese caso se debe buscar el equivalente del comando
           porque en este curso solo se mostraran comandos con la sintaxis de linux</p>

           <h1 className="title1">¿De que sirve aprender Linux?</h1>

          <p className="Content">Para la mayoria de las personas solo existe un sistema operativo que es 
          windows y una pequeña parte sabe que existe otro sistema porque tienen acceso a un equipo de apple
          y al final una parte casi inexistente sabe de la existencia de un tercer sistema operato que tiene
          como mascota un pinguino, este tipo de personas no suele ser las mas sociables y tambien se podria
          decir que les gusta complicarse la vida porque si ya todos usan un sistema para que buscar una alternativa.
          </p> 

          <p className="Content">Conocer este nuevo sistema operativo te permitira concer nuevos temas como 
          el uso de comandos, permisos sobre archivos, interactuar con una terminal entre muchos otros temas, 
          aunque no lo paresca este sistema esta presente en muchos lados como pueden ser los telefonos moviles
          android, servidores de alojamiento de paginas web y muchas otras empresas usan linux por diferentes ventajas
          que ofrecen. Aun con lo anterior considero que si eres estudiante de una carrera relacionada a informatica,
          computacion, comunicaciones o incluso de electronica te sera de mucha ayuda aprender este sistema y ademas
          puede ser mas comodo trabajar en un entorno de linux</p>

          <h1 className="title1">¿Porque usar un cli?</h1>

          <p className="Content">La letras cli hacen referencia a Comand Line Interface que es una interfaz que
          recibe comandos y que seguramente la has utilizado alguna vez si tuviste que instalar algo del viejo y
          confiable steam verde, normalmente la terminal de comandos se trata de una ventana negra en la que solo
          aparece una linea de texto que comun mente se llamaba promp</p>

          <div className="bash">
            <p className="Content">steve@steve-HP-Notebook:~$</p>
          </div>

          <p className="Content">Usar una terminal puede parecer dificil pero no es para tanto solo se trata de
          escribir intrucciones para la computadora lo cual era bastante comun con las primeras computadoras</p>


          
        </div>
    );
}

export default Presentacion;
