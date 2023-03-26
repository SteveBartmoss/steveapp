import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/News";
import Almanac from "../pages/Almanac";
import Steve from "../pages/Steve";
import "../App.css";
import { NavBar } from "./NavBar";
import Articulo from "../Articles/RC1";

function Router(){
    return(
        <BrowserRouter>
            <div>
                <NavBar />
                <Routes>

                    <Route path="/" element={<Home/>}/>

                    <Route path="home" element={<Home/>}/>
                        
                    <Route path="about" element={<About/>}/>

                    <Route path="news" element={<News/>}/>

                    <Route path="almanac" element={<Almanac/>}/>

                    <Route path="steve" element={<Steve/>}/>

                    <Route path="RC1" element={<Articulo/>}/>
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default Router;