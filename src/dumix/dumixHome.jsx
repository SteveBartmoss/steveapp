import React from "react";
import Baner from "../component/Baner";
import DumixAbout from "./pages/dumixAbout";

function DumixHome(){
    return(
        <>
            <Baner/>
            <div>
                <h1 className="title1">Contenido principal</h1>
            </div>
            <DumixAbout />
        </>
    );
}

export default DumixHome;