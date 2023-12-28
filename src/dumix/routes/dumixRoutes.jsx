import React from "react";
import { Route, Routes } from "react-router-dom";
import Presentacion from "../Linux1/pages/Prensentacion";
import Linux1NavBar from "../Linux1/routes/Linux1Navbar";
import Cli from "../Linux1/pages/Cli";
import Pimp from "../pages/pimp";
import Sintaxis from "../Linux1/pages/Sintaxis";
import Directorio from "../Linux1/pages/Directorios";
import Archivos from "../Linux1/pages/Archivos";
import Editores from "../Linux1/pages/Editores";
import Paquetes from "../Linux1/pages/Paquetes";
import Redireccion from "../Linux1/pages/Redireccion";
import Sudo from "../Linux1/pages/Sudo";
import System from "../Linux1/pages/System";
import Usuarios from "../Linux1/pages/Usuarios";
import Rwx from "../Linux1/pages/Permisos";
import TerminalApp from "../pages/terminalApps";
import Vimgg from "../pages/vimgg";
import { BasicCli } from "../pages/BasicCli";

function RoutesDumix (){
    return(
        <div>
            <Routes>
                <Route path="linux1" element={<Linux1NavBar/>}>

                    <Route index element={<Presentacion />}/>

                    <Route path="presentacion" element={<Presentacion/>} />

                    <Route path="comandline" element={<Cli />} />

                    <Route path="sintaxis" element={<Sintaxis />} />

                    <Route path="directorio" element={<Directorio />}/>

                   <Route path="archivos" element={<Archivos />}/>

                   <Route path="editores" element={<Editores />}/>

                   <Route path="paquetes" element={<Paquetes />}/>

                   <Route path="redireccion" element={<Redireccion />}/>

                   <Route path="sudo" element={<Sudo />}/>

                   <Route path="system" element={<System />}/>

                   <Route path="usuarios" element={<Usuarios />}/>

                   <Route path="permisos" element={<Rwx />}/>

                </Route>
            </Routes>
                
            <Routes>
                <Route path="pimp" element={<Pimp />} />
            </Routes>

            <Routes>
                <Route path="terminalapps" element={<TerminalApp/>}/>
            </Routes>

            <Routes>
                <Route path="vimgg" element={<Vimgg/>} />
            </Routes>

            <Routes>
                <Route path="clibasic" element={<BasicCli />} />
            </Routes>

        </div>
    );
}

export default RoutesDumix;