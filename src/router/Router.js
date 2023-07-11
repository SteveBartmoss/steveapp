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
import DumixHome from "../dumix/dumixHome";
import Greview from "../Game/Greview";
import RoutesDumix from "../dumix/routes/dumixRoutes";
import FunHome from "../HaveFun/FunHome";
import HaveFunRouter from "../HaveFun/routes/RouterHaveFun";
import HomeLabs from "../stevelabs/homeLabs";

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

                    <Route path="article" element={<Articulo/>}/>

                    <Route path="review" element={<Greview/>}/>

                    <Route path="dumix" element={<DumixHome/>}/>

                    <Route path="dumix/*" element={<RoutesDumix/>}/>

                    <Route path="havefun" element={<FunHome/>}/>

                    <Route path="havefun/*" element={<HaveFunRouter />} />

                    <Route path="stevelabs" element={<HomeLabs />} />

                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default Router;