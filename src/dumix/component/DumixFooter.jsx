import React from "react";
import { Div70, DivFooter } from "../../component/Contenedores/Cajas";

export function DumixFooter() {
    return (
        <>
            <DivFooter>
                <Div70>
                    <ul className="lista">
                        <li>
                            <a className="archor">SteveLabs</a>
                        </li>
                        <li>
                            <a className="archor">Dumix</a>
                        </li>
                        <li>
                            <a className="archor">Articulos</a>
                        </li>
                    </ul>
                </Div70>
            </DivFooter>
        </>
    );
}