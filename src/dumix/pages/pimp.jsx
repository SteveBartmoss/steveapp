import React from "react";
import { Working } from "../../component/Working";
import { DivCenter, Paper } from "../../component/Contenedores/Cajas";

function Pimp() {
    return (
        <Paper>
            <DivCenter>
                <h1 className="main-title">Pimp my terminal</h1>
            </DivCenter>

            <hr className="line" />

            <div className="back-articles">
                <p>
                    Si eres programador o estudiante de temas relacionados
                    a la programacion seguramente pasaras mucho tiempo delante
                    de una terminal y con el tiempo puede que llegue a ser
                    aburrido ver solo una pantalla negra.
                </p>

                <p>
                    Es por eso que una buena idea es darle un poco mas e estilo
                    a esa pantalla que estaras viendo cuando compiles, ejecutes,
                    hagas comits o empujes cambios hacia tu repositorios y ademas
                    para que tu crush quede sorprendida al ver que tienes procesos
                    corriendos en tu terminal mientras haces commit y compilas
                    como jefe
                </p>

                <p>
                    Bueno quizas no tengas mucha suerte con tu crush si eres programador
                    pero al menos tendras una terminal mas divertida y podras pasar
                    el tiempo mas rapido mientras miras que tu codigo no compila
                    y la fecha de entrega esta cada vez mas cerca
                </p>
            </div>

            <h1 className="title1">Esquema de colores</h1>
            <hr className="line" />

            <div>
                <p>
                    Una manera simple de mejorar el aspecto de nuestra terminal 
                    es cambiando el esquema de colores que viene por defecto ya que 
                    puede que sea el tipico negro y letras blannca o el terrible color 
                    blanco con con letras negras que puede quemarte la retina si 
                    lo usas todo el tiempo
                </p>

                <p>
                    La forma mas simple de modificar esto es tan facil como 
                    modificar las preferencias de la terminal y seleccionando 
                    manualmente los colores de la terminal
                </p>
            </div>
            <Working />
        </Paper>
    );
}

export default Pimp;