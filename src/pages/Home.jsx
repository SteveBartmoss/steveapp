import React from "react";
import Videos from "../component/Videos";
import "../App.css";
import Review from "../component/Review";
import Pie from "../component/Pie";
import Branding from "../component/Branding";
import DivBaner from "../component/DivBaner";
import MenuItems from "../component/MenuItem";
import Section1 from "../component/Contenedores/Section1";
import FlexDiv from "../component/Contenedores/FlexDiv";
import SquareDiv from "../component/Contenedores/SquareDiv";
import CardDiv from "../component/Contenedores/CardDiv";




function Home() {
    return (
        <>
            {document.title = "stevechambitas"}
            <DivBaner name="Baner" />
            <Section1>
                <FlexDiv>
                    <h1 className="title-1">Videos con mas visitas</h1>
                    <p className="p-main">
                        Algunos de los videos mas populares del canal,
                        escoge uno y pasa un buen rato mientras obtienes
                        algo de informacion.
                    </p>
                </FlexDiv>

                <SquareDiv>
                        
                        <CardDiv>
                            <h1>Borrar System32</h1>
                            <p>
                                La popular broma de borrar System32 para que tu pc 
                                sea mas rapida puede generar mas problemas de lo 
                                que crees
                            </p>
                            <a>Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1>Borrar System32</h1>
                            <p>
                                La popular broma de borrar System32 para que tu pc 
                                sea mas rapida puede generar mas problemas de lo 
                                que crees
                            </p>
                            <a>Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1>Borrar System32</h1>
                            <p>
                                La popular broma de borrar System32 para que tu pc 
                                sea mas rapida puede generar mas problemas de lo 
                                que crees
                            </p>
                            <a>Ir al video</a>
                        </CardDiv>

                        <CardDiv>
                            <h1>Borrar System32</h1>
                            <p>
                                La popular broma de borrar System32 para que tu pc 
                                sea mas rapida puede generar mas problemas de lo 
                                que crees
                            </p>
                            <a>Ir al video</a>
                        </CardDiv>

                    </SquareDiv>

            </Section1>
            <div className="Contenedor">
                <h3 className="title1">Temas populares del canal</h3>
                <MenuItems />
            </div>
            <div className="Contenedor">
                <h3 className="title1">Reviews mas recientes</h3>
            </div>
            <Pie />
        </>
    );
}

export default Home;