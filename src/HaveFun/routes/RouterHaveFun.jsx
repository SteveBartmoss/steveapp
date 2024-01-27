import React from "react";
import { Route, Routes } from "react-router-dom";
import GifApp from "../gifapp/gifMain";
import RickosoApp from "../rickoso/rickosoMain";
import MarvelApp from "../marvel/marvelMain";
import YesOrNot from "../yesornot/YesOrNot";
import RickosoNavbar from "../rickoso/routes/rickosoNavBar";
import Characters from "../rickoso/pages/characters";
import { PokeMain } from "../pokeapp/pokeMain";
import Locations from "../rickoso/pages/locations";
import Episodes from "../rickoso/pages/episodes";

function HaveFunRouter(){
    return(
        <>
            <Routes>

                <Route path="rickosoapp" element={<RickosoNavbar/>}>
                    <Route index element={<RickosoApp />} />

                    <Route path="home" element={<RickosoApp />} />
                    
                    <Route path="personajes" element={<Characters />} />

                    <Route path="locaciones" element={<Locations />} />

                    <Route path="episodios" element={<Episodes />} />
                    
                </Route>
                
                
            </Routes>

            <Routes>
                <Route path="gifapp" element={<GifApp />}/>
            </Routes>

            <Routes>
                <Route path="yesornotapp" element={<YesOrNot />} />
            </Routes>

            <Routes>
                <Route path="marvelapp" element={<MarvelApp />}/>
            </Routes>

            <Routes>
                <Route path="pokeapp" element={<PokeMain />} />
            </Routes>
        </>
    );
}

export default HaveFunRouter;