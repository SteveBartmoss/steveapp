import React from "react";
import Videos from "../component/Videos";
import "../App.css";
import Review from "../component/Review";
import Pie from "../component/Pie";
import Branding from "../component/Branding";
import DivBaner from "../component/DivBaner";
import MenuItems from "../component/MenuItem";




function Home(){
    return(
        <>
        {document.title="stevechambitas"}
        <DivBaner name="Baner" />
        <div className="Contenedor">
            <h3 className="title1">Temas populares del canal</h3>
            <MenuItems />   
        </div>
        <div className="Contenedor">
            <h3 className="title1">Reviews mas recientes</h3>
        </div>
        <Pie/>
        </>
    );
}

export default Home;