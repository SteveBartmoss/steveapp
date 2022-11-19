import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/News";
import Almanac from "../pages/Almanac";
import Steve from "../pages/Steve";
import "../App.css";

function Router(){
    return(
        <BrowserRouter>
            <div>
                <nav>
                    <ul className="menu">
                        <li>
                            <Link className="iten" to="/">Home</Link>
                        </li>

                        <li>
                            <Link className="iten" to="/about">About</Link>
                        </li>

                        <li>
                            <Link className="iten" to="/news">News</Link>
                        </li>

                        <li>
                            <Link className="iten" to="/almanac">Almanac</Link>
                        </li>

                        <li>
                            <Link className="iten" to="/steve">Steve</Link>
                        </li>

                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                        
                    <Route path="/about" element={<About/>}/>

                    <Route path="/news" element={<News/>}/>

                    <Route path="/almanac" element={<Almanac/>}/>

                    <Route path="/steve" element={<Steve/>}/>

                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default Router;