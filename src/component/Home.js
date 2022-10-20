import React from "react";
import Baner from "./Baner";
import Videos from "./Videos";
import "../App.css";

function Home(){
    return(
        <div className="Contenedor">
            <Baner/>
            <h3 className="title1">Videos con mas visitas</h3>
            <Videos/>
        </div>
    );
}

export default Home;