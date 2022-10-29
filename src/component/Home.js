import React from "react";
import Baner from "./Baner";
import Videos from "./Videos";
import "../App.css";
import Discord from "./Discord";
import Review from "./Review";
import Canal from "./Canal";



function Home(){
    return(
        <div className="Contenedor">
            <Baner/>
            <h3 className="title1">Videos con mas visitas</h3>
            <Videos/>
            <Discord/>
            <h3 className="title1">Reviews mas recientes</h3>
            <Review/>
            <Canal/>
        </div>

    );
}

export default Home;