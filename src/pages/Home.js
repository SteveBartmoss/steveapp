import React from "react";
import Baner from "../component/Baner";
import Videos from "../component/Videos";
import "../App.css";
import Discord from "../component/Discord";
import Review from "../component/Review";
import Canal from "../component/Canal";



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