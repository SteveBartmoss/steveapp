import React, { useEffect, useState } from "react";
import { DivWorkImg, Paper } from "./Contenedores/Cajas";

export function Working() {

    return (
        <Paper>
            <h1>Estamos trabajando para mejorar la pagina</h1>
            <DivWorkImg>
                <img src="https://media1.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.gif?cid=53b38410lvif8bs1blkhfr3rjy8w8e4c8pw1yys31s0koyfv&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
            </DivWorkImg>
            <h1>404</h1>
            <h1>Proximamente habra una pagina aqui (espero)</h1>
        </Paper>
    );
}