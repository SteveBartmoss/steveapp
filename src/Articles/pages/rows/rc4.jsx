import React from "react";
import CreatorSing from "../../../component/sing";

function Rc4() {
    return (
        <>
            <div className="div-about">
                <div className="center">
                    <h1 className="main-title">Los indie una nueva esperanza</h1>
                </div>

                <hr className="line"/>

                <CreatorSing autor={"Steve"} date={"08/04/23"} img={"/Assets/steveA.png"} grade={"Free coder"} />

                <div className="back-articles">
                    <p className="content-curso">
                        Cuando era menor siempre pensaba que mi trabajo favorito sería probar Videojuegos
                        o poder crear videojuegos pero en ese entonces los únicos que desarrollaban juegos
                        eran empresas grandes y estudios independientes no eran tan populares o no tenían
                        tanto éxito como actualmente se tiene, hace poco probé pineapple on a pizza un juego
                        de un desarrollador llamado Alva majo o al menos así se presenta en Youtube y al probar
                        el juego tuve una experiencia buena aunque fue bastante simple ya que en el juego
                        no se requiere interactuar de una forma elaborada si no que basta con acercar se
                        a los personajes que bailan o chocar nuestro personaje con elementos del escenario.
                    </p>
                </div>

                <h1 className="title1">Un cocepto simple pero bien implementado</h1>
                <hr className="line"/>

                <div className="back-articles">
                    <p className="content-curso">
                        Una mecánica muy simple pero que me permitió pasar unos cuantos minutos de diversión
                        y fue ahí cuando recordé otro título que también me había llamado la atención por
                        su manera de implementar el gameplay y era del mismo desarrollador, el juego trataba
                        de sacar una espada de una piedra así como contaba la leyenda del rey Arturo con esto
                        la mecánica estaba planteada pero hacía falta algo que la volviera interesante algo
                        que animará a los jugadores a probar lo. Bueno detrás de la simple idea de solo sacar
                        una espada había un modo de multijugador que tendría a los usuarios frustrados por
                        mucho tiempo y es que el juego mostraba una simple espada pero la longitud y el peso
                        de la misma variaba cada que un jugador lograba sacarla lo cual hacia que los posteriores
                        intentos fueran mucho más difíciles, lo anterior se complicaba más con la forma
                        en que se jugaba ya que la espada solo subía si desplazabas el ratón hacia adelante
                        y mantienes presionado el botón derecho del ratón. Si por algo dejas de apretar el
                        botón la espada cae haciendo que pierdas todo el progreso que tenías viejo no te
                        voy a mentir dure bastante tiempo tratando de sacar la espada en el modo sin conexión
                        y tener que explicarle a mi familia porque cuando entraban al cuarto estaba mirando
                        siempre la misma pantalla y deslizando el mouse no fue fácil, luego descubrí un truco
                        para hacer la tarea más fácil pero aún así me costó un poco retirar la espada y en
                        el modo en línea me rendí pues los jugadores habían llevado el peso y la longitud de
                        la espada al máximo y lamentablemente ya no tenía tanto tiempo pero me pareció una
                        idea buena para hacer que las personas probaran el jugador.
                    </p>
                </div>

                <h1 className="title1">Menos mundos enormes y mejores mecanicas</h1>

                <hr className="line"/>
                
                <div className="back-articles">
                    <p className="content-curso">

                        El ejemplo anterior
                        muestra como una idea buena y una forma correcta de implementar mecánicas diferentes
                        pude hacer que tú juego sea interesante para las personas y me hizo pensar que ojalá
                        las desarrolladoras triple a pusieran más tiempo en hacer sus juegos más interesantes
                        y menos tiempo en sus misiones de relleno, sus gráficas ultra realistas o en mecánicas
                        de farmeo tan excesivo que hace que los juegos dejen de ser tan divertidos por esta
                        razón los juegos indie se han convertido en algo especial para los usuarios ya que
                        se tratan de juegos con mayor libertad creativa donde pueden arriesgar se a implementar
                        una forma de jugar poco convencional pero que con buenas ideas puede volverse un gran
                        éxito y actualmente se necesita más ideas innovadoras y menos refritos de battle Royale
                        o mundos abiertos que no tienen para ofrecer que no sean horas invertidas en ir del
                        punto a al punto b, historias simples que muchas veces están en segundo plano o que
                        directamente no está presente en el juego. Los triple a se cada vez son más difíciles
                        de hacer y duran mucho en desarrollarse pero lo más decepcionante es ver que todo ese
                        esfuerzo fue no surtió efecto por tratar de seguir las corrientes que están de moda y
                        no arriesgarse a entregar un producto diferente asi que ojala más desarrolladoras
                        grandes lanzaran juegos como death stranding que se animó a dar un juego con una
                        mecánica poco convencional y llamativa pero que termino agradando a una parte de la
                        comunidad bueno esto fue filas y columnas hasta la próxima
                    </p>
                </div>
            </div>
        </>
    );
}

export default Rc4;