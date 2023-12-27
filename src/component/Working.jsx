import React from "react";
import { DivCenter, DivWorkImg, Paper } from "./Contenedores/Cajas";

export function Working() {

    return (
        <Paper>
            <DivCenter>
                <h1 className="title-working">Estamos trabajando para</h1>
                <h1 className="title-working">mejorar la pagina</h1>
            </DivCenter>
            <DivWorkImg>
                <img src="https://media1.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.gif?cid=53b38410lvif8bs1blkhfr3rjy8w8e4c8pw1yys31s0koyfv&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
            </DivWorkImg>
            <DivCenter>
                <h1 className="title-working">404</h1>
                <h1 className="title-working">Proximamente habra una pagina aqui (espero)</h1>
            </DivCenter>
        </Paper>
    );
}