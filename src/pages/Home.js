import React from "react";
import Videos from "../component/Videos";
import "../App.css";
import Review from "../component/Review";
import Pie from "../component/Pie";
import Branding from "../component/Branding";
import DivBaner from "../component/DivBaner";



function Home(){
    return(
        <>
        <DivBaner name="Baner" />
        <div className="Contenedor">
            <h3 className="title1">Videos con mas visitas</h3>   
        </div>
        <Videos/>
        <Branding name={"Discord"} 
        title={"Un servidor de discord con temas de videojuegos e informatica"}
        url={"https://discord.gg/QTdVBq5Q9r"}
        />
        
        <div className="Contenedor">
            <h3 className="title1">Reviews mas recientes</h3>
        </div>
        <Review/>
        <Branding name={"Canal"}
        title={"Un canal dedicado a los temas de informatica, videojuegos y techrunners"}
        url={"https://www.youtube.com/channel/UCsaZsVCeb3BkqBrROgc1uhw"}
        />
        <Pie/>
        </>
    );
}

export default Home;