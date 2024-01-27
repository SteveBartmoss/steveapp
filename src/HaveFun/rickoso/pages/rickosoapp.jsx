import React from "react";
import { DivColum, DivRow } from "../../../component/Contenedores/Cajas";

function RickosoApp() {
    return (
        <>
            <div className="div-ricoso-page">
                <div className="div-main-card" >
                    <DivRow>
                        <div className="img-main-card">
                            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ204dm12MmJzZXJsYmI3ZThzZzhieWNtdXZ0aDA0cnA1N2Jlb3d0eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41lI4bYmcsPJX9Go/giphy.gif" />
                        </div>
                        <div className="div-main-content">
                            <DivColum>
                                <h1 className="tittle-app">Rickoso App</h1>
                                <p className="content-card">
                                    Ponte ricoso con esta aplicacion en la que
                                    encontrartas informacion de rick and morty
                                </p>
                            </DivColum>
                        </div>
                    </DivRow>
                </div>
            </div>
        </>
    );
}

export default RickosoApp;