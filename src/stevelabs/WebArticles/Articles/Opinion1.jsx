import React from 'react'
import CreatorSing from '../../../component/sing'

const Opinion1 = () => {
  return (
    <>
      <div className="div-about">

        <h1 className="main-title">Herramientas que debes de aprender, si quieres desarrollar aplicaciones web en los próximos años</h1>
        <hr className="line" />

        <CreatorSing />

        <div className="back-articles">
          <p className="content-curso">Ciertamente el desarrollo web siempre ha sido popular entre los programadores, desde que el internet comenzó a ser una herramienta mas usada a nivel global, a un punto donde en muchos países se considera por las personas comunes como una necesidad, como si se tratara de agua potable o energía eléctrica.</p>

          <p className="content-curso"> Pero algo que ha tenido un boom o mucho interés en las últimas décadas es la programación web, debido a algo muy sencillo y es que prácticamente la mayoría de las empresas ven como una necesidad tener una pagina web donde puedan promocionarse, vender su mercancía o simplemente describir a que se dedican y es aquí en donde este articulo quiere hacer hincapié tratando de guiarte o al menos darte un consejo acerca de que herramientas necesitas aprender si deseas ser programador web.</p>

          <p className="content-curso">Realmente hoy en día existe mucho el debate de que lenguaje de programación es mejor hablando de manera general, es una pregunta que siempre termina con muchos programadores entrando en un arduo debate el cual no pareciera tener un fin aparente, y no se diga de la programación web, el cual, aunque sea algo más especializado, sigue teniendo el mismo debate, y es en esta pregunta en la cual quiero que te concentres, ¿qué debo de aprender para comenzar a programar páginas web?</p>

          <p className="content-curso"> Una respuesta que tiene muchas vertientes, pero que este articulo te tratare de guiar hacia la mejor respuesta, ojo, la mejor respuesta hablando de manera completamente personal, por lo que sin más comencemos con esta pequeña introducción hacia las herramientas que yo te aconsejo aprender para programar páginas web en un futuro próximo.</p>
        </div>


        <h3 className="title1">JS un lenguaje de programación que necesitas conocer</h3>
        <hr className="line" />

        <div className="back-articles">
          <p className="content-curso">
            JavaScript: JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web, y es usado en muchos entornos fuera del navegador, tal como Node.js, Apache CouchDB y Adobe Acrobat JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo, programación funcional).
            Lee más en acerca de JavaScript.
            (mozilla, 2023)
          </p>

          <p className='content-curso'>
            (Si te interesa saber más de este lenguaje de programación aquí te dejo un enlace con su documentación: <a className="article-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Link</a>)
          </p>

          <p className='content-curso'>
            Una vez que entiendas como funciona JS y logres familiarizarte de manera vainilla con este lenguaje de programación me gustaría presentarte una biblioteca JavaScript de código abierto y un entorno en tiempo de ejecución multiplataforma, de código abierto (aquí enfatizo lo de código abierto para que entiendas que son herramientas completamente gratuitas), La biblioteca se llama React y el entorno se llama Node.js.
            Una pregunta que te puede surgir en este punto del artículo es, porque si quiero desarrollar una página web, estamos hablando de 2 herramientas y no solo de una, y la verdad es que en este punto debes comprender que es el frontend y el backend, en una aplicación web, si no conoces el significado de este, ¡no te preocupes!, a continuación, te diré una breve explicación de cada uno.
          </p>

        </div>

        <h3 className='title1'>¿Qué es frontend?</h3>
        <hr className="line" />

        <div className="back-articles">
          <p className='content-curso'>
            El frontend es la parte del desarrollo web que se dedica a la parte frontal de un sitio web, en pocas palabras del diseño de un sitio web, desde la estructura del sitio hasta los estilos como colores, fondos, tamaños hasta llegar a las animaciones y efectos.
          </p>

          <p className='content-curso'>
            Es esa parte de la página con la que interaccionan los usuarios de esta, es todo el código que se ejecuta en el navegador de un usuario, al que se le denomina una aplicación cliente, es decir, todo lo que el visitante ve y experimenta de forma directa.
          </p>

          <p className='content-curso'>
            Un front-end, es la persona que se dedica básicamente al diseño web, pero esto no significa que no toque código, tanto el front-end como el back-end están en contacto con código todo el tiempo.
            (García, 2021)
          </p>
        </div>

        <h3 className='title1'>¿Qué es backend?</h3>
        <hr className="line" />

        <div className="back-articles">
          <p className='content-curso'>
            Mientras que el frontend es la capa de programación ejecutada en el navegador del usuario, el backend procesa la información que alimentará el frontend de datos.
          </p>

          <p className='content-curso'>
            Es la capa de acceso a los datos, ya sea de un software o de un dispositivo en general, es la lógica tecnológica que hace que una página web funcione, lo que queda oculto a ojos del visitante.
          </p>

          <p className='content-curso'>
            El backend de una solución, determina qué tan bien se ejecutará la aplicación y qué experiencia, positiva o negativa, obtendrá el usuario de su uso.
          </p>

          <p className='content-curso'>
            Trabajar en este apartado supone algo totalmente diferente al frontend, ya que exige el dominio de otros términos de programación, lenguajes que requieren una lógica, ya que esta área es también la encargada de optimizar recursos, de la seguridad de un sitio y otros factores.
          </p>

          <p className='content-curso'>
            Un framework de desarrollo es el que trabaja en el lado del servidor, se encarga de que las personas puedan disfrutar de una grata experiencia, su propósito principal es que los procesos de desarrollos estén más acelerados, que se puedan volver a utilizar los fragmentos de códigos ya existentes y que se realicen buenas prácticas mediante el uso de distintos patrones.
          </p>

          <p className='content-curso'>
            Con ellos se pueden escribir códigos o desarrollar aplicaciones con el mínimo esfuerzo. Los códigos de programación que más se utilizan son PHP, JavaScript, Python y Ruby, entre otros.
            (García, 2021)
          </p>

          <p className='content-curso'>
            De igual manera si estas definiciones no son lo suficiente claras para ti, me gustaría darte mi propia explicación y es que hoy en día que los ataques cibernéticos estan a la orden del día y que cada vez es más común el robo de informacion de sitios web, es mucho mas seguro dividir la aplicación en 2, las cuales trabajaran juntos para un objetivo en específico, Primero el frontend, es básicamente todo lo que va a ver y usar el usuario final como botones, descarga de registros, eliminaciones etc, todo lo visual o mejor dicho el frontend es la interfaz visual que el usuario final podrá utilizar en la aplicación web.
          </p>

          <p className='content-curso'>
            Y la parte que se encargara de procesar los datos haciendo llamadas a servicios propios como la Base de datos o servicios de terceros como API externas es denominada Backend, prácticamente esta parte se encargara de la comunicación de datos para que todo salga bien, Una buena analogía que se me ocurre es la de un helado, el frontend es el helado que te puedes comer y el backend es todo el proceso que se tuvo que realizar para que ese helado llegara a tus manos.
          </p>

          <p className='content-curso'>
            Una vez entendido estos 2 puntos me gustaría explicarte de que es la biblioteca de React y porque deberías aprenderla.
          </p>

        </div>

        <h3 className='title1'>¿Que es React?</h3>
        <hr className="line" />

        <div className="back-articles">
          <p className='content-curso'>
            ReactJS es una de las librerías más populares de JavaScript para el desarrollo de aplicaciones móviles y web. Creada por Facebook, React contiene una colección de fragmentos de código JavaScript reutilizables utilizados para crear interfaces de usuario (UI) llamadas componentes.
          </p>

          <p className='content-curso'>
            Es importante señalar que ReactJS no es un framework de JavaScript. Esto porque sólo es responsable de renderizar los componentes de la capa de vista de una aplicación. React es una alternativa a frameworks como Angular y Vue, que permiten crear funciones complejas.
            (Deyimar A, 2023)
          </p>
        </div>

        <h3 className='title1'>¿Por qué deberías aprender React?</h3>
        <hr className="line" />

        <div className="back-articles">

          <p className='content-curso'>
            Me gustaría darte varias razones para aprender esta biblioteca, pero me gustaría darte solo las 3 mas importantes que para mi lo hacen una herramienta indispensable para cualquier programador web.
          </p>

          <ol className='content-curso'>
            <li className='content-curso'>La curva de aprendizaje: React actualmente tiene una de las curvas de aprendizaje mas sencillas de completar, debido a que, si sabes JS de manera no experta, pero si normal, no tendrás problemas en trabajar con React y entender cómo es que funcione, realmente es una librería sumamente sencilla de aprender y dentro de sus competidoras como Viu.js o Angular, es más sencilla de trabajar para alguien inexperto en este tipo de herramientas.</li>
            <li className='content-curso'>React en demandando por múltiples empresas: A pesar de que como en el punto anterior explique, React no esta solo en el mercado de desarrollo de aplicaciones web, si es uno de los mas demandados por el simple hecho de que su empresa creadora que es Facebook, ha demostrado que React es una tecnología que no solo funciona, sino que tiene un potencial y un futuro monstruoso para la elaboración de aplicaciones web, otras empresas que tienes esta tecnología son Walmart, Discord, UberEats, entre muchas otras empresas, créeme que si logras aprender esta herramienta e incluso te llegas a certificar de algún modo, tu campo laboral sera basto.</li>
            <li className='content-curso'>Puedes crear aplicaciones móviles nativas: Con esto me refiero a que si aprender a usar React de manera profesional, no necesariamente tienes que crear aplicaciones web forzosamente, sino que esta biblioteca te permite crear aplicaciones móviles para IOS y para Android, por lo que prácticamente estarías aprendiendo una herramienta que te abre mas caminos de lo que puedas creer.</li>
          </ol>

          <p className='content-curso'>
            Si te interesa dar tus primeros pasos después de leer mis razones, te dejo la documentación oficial en el siguiente enlace, la cual te explica a mayor profundidad esta tecnología y como debes de trabajar con ella, <a className="article-link" href="https://es.react.dev/">enlace</a>.
          </p>
        </div>

        <h3 className='title1'>¿Qué es Node.js?</h3>
        <hr className="line" />

        <div className="back-articles">

          <p className='content-curso'>
            Node.js®, Node.js, es un entorno en tiempo de ejecución multiplataforma para la capa del servidor (en el lado del servidor) basado en JavaScript.
            Node.js es un entorno controlado por eventos diseñado para crear aplicaciones escalables, permitiéndote establecer y gestionar múltiples conexiones al mismo tiempo. Gracias a esta característica, no tienes que preocuparte con el bloqueo de procesos, pues no hay bloqueos.
            (Simões, 2021)
          </p>

        </div>



        <h3 className='title1'>¿Por qué deberías aprender Node.js?</h3>
        <hr className="line" />

        <div className="back-articles">
          <p className='content-curso'>
            Sinceramente a diferencia de React, yo no e usado mucho Node.js, por lo que no te puedo dar tantas razones personales, para aprender a utilizarlo, pero si te puedo explicar el porque a pesar de esto lo sigo usando para el desarrollo de aplicaciones web y las listare a continuación:
          </p>

          <ol className='content-curso'>
            <li className='content-curso'>En mi caso yo uso Node.js por el hecho de que para el desarrollo uso el sistema operativo Windows, así como Linux con la distro de Ubuntu y Node es una herramienta que corre en ambos sistemas con su versión mas reciente y sin problemas, para poder desarrollar el backend de la aplicación de manera cómoda y hasta cierto punto rápida.</li>
            <li className='content-curso'>Yo que recientemente aposte mucho por JS en cuanto al desarrollo de aplicaciones web, Node.js como dice el nombre es compatible con código JS y es algo a que ayuda como programador a que te enfoques en un lenguaje de programación y te sea mucho más sencillo ser FullStack (Programador que puede desarrollar tanto Frontend como Backend).</li>
            <li className='content-curso'>Al ser código abierto, me eh encontrado con multitud de videos o de tutoriales tantos oficiales como no para usar este entorno y la verdad el soporte que tiene es increíble por lo que créeme que no es complicado de aprender y sinceramente es una muy buena opción.</li>
          </ol>

          <p className='content-curso'>
            Lamentablemente no eh usado tanto este entorno como me gustaría, pero sinceramente te lo recomiendo mucho, de igual manera te dejare su documentación oficial por si te interesa aprender esta tecnología, <a className="article-link" href="https://nodejs.org/es/about">enlace</a>.
          </p>
        </div>

        <h3 className='title1'>Conclusión.</h3>
        <hr className="line" />

        <div className="back-articles">
          <p className='content-curso'>
            Sinceramente me hubiera gustado hablar mas de estas 2 tecnologías y de algunos significados que en el artículo, pero la idea de este mismo es una introducción y opinión personal, espero sinceramente mas adelante poder generar artículos para esta pagina mas extensos, y poder extender en los temas de Frontend y Backend, de más características que tienen React y Node.js y porque no hablar de otras posibles herramientas como estas, en fin, espero el articulo te haya resultado interesante y te inspire a aprender ya sea Node.js o React o porque no ambos, para crear tus propias aplicaciones web, sin mas que decir me despido, que tengas buenas noches coder.
          </p>

          <p className='content-curso'>
            Fecha de la primera versión 8 de junio del 2023.
          </p>

          <p className='content-curso'>
            Autor: Enrique Dev.
          </p>

          <p className='content-curso'>
            Firma: <img src="../firmas/Enrique.jpg" alt="Cat" sizes="(min-width: 600px) 200px, 50vw" />
          </p>
        </div>


        <h3 className='title1'>Bibliografía.</h3>
        <hr className="line" />

        <p className='content-curso'>
          Deyimar A. (5 de Abril de 2023). hostinger.mx. Recuperado el 6 de Junio de 2023, de hostinger.mx: <a href="https://www.hostinger.mx/tutoriales/que-es-react">https://www.hostinger.mx/tutoriales/que-es-react</a>.
        </p>
        <p className='content-curso'>
          García, I. J. (30 de Marzo de 2021). servnet.mx. Recuperado el 6 de Junio de 2023, de servnet.mx: <a href="https://www.servnet.mx/blog/backend-y-frontend-partes-fundamentales-de-la-programacion-de-una-aplicacion-web">https://www.servnet.mx/blog/backend-y-frontend-partes-fundamentales-de-la-programacion-de-una-aplicacion-web</a>.
        </p>
        <p className='content-curso'>
          mozilla. (6 de Junio de 2023). developer.mozilla.org. Obtenido de developer.mozilla.org: <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">https://developer.mozilla.org/es/docs/Web/JavaScript</a>.
        </p>
        <p className='content-curso'>
          Simões, C. (27 de Julio de 2021). itdo.com. Recuperado el 6 de Junio de 2023, de itdo.com: <a href="https://www.itdo.com/blog/que-es-node-js-y-para-que-sirve/">https://www.itdo.com/blog/que-es-node-js-y-para-que-sirve/</a>
        </p>
      </div>
    </>
  )
}

export default Opinion1
