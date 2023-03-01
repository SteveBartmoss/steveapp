import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar=()=>{
    return(
            <div className="menu">

            <li>
                <NavLink className={({isActive})=>`iten ${isActive ? 'active':''}`}to="home">Home</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=>`iten ${isActive ? 'active':''}`}to="about">About</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=>`iten ${isActive ? 'active':''}`}to="news">News</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=>`iten ${isActive ? 'active':''}`}to="almanac">Almanac</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=>`iten ${isActive ? 'active':''}`}to="steve">Steve</NavLink>
            </li>
            
            </div> 
    );
}