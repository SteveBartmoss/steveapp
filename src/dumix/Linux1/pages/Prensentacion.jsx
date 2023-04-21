import React from "react";

function Presentacion(){
    return(
        <div>
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

          <p className="Content">Conocer este nuevo sistema operativo te permitira</p>

        </div>
    );
}

export default Presentacion;
