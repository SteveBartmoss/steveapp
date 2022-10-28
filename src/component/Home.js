import React from "react";
import Baner from "./Baner";
import Videos from "./Videos";
import "../App.css";
import Discord from "./Discord";



function Home(){
    return(
        <div className="Contenedor">
            <Baner/>
            <h3 className="title1">Videos con mas visitas</h3>
            <Videos/>
            <Discord/>
        </div>

    );
}

export default Home;