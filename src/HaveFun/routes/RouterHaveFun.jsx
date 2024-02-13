import React from "react";
import { Route, Routes } from "react-router-dom";
import GifApp from "../gifapp/gifMain";
import MarvelApp from "../marvel/marvelMain";
import YesOrNot from "../yesornot/YesOrNot";
import RickosoNavbar from "../rickoso/routes/rickosoNavBar";
import Characters from "../rickoso/pages/characters";
import { PokeMain } from "../pokeapp/pokeMain";
import Locations from "../rickoso/pages/locations";
import Episodes from "../rickoso/pages/episodes";
import RickosoApp from "../rickoso/pages/rickosoapp";
import PokeAppNavBar from "../pokeapp/routes/pokeappNavBar";
import Pokemons from "../pokeapp/pages/pokemons";
import PokeApp from "../pokeapp/pages/pokeapp";

function HaveFunRouter() {
    return (
        <>
            <Routes>

                <Route path="rickosoapp" element={<RickosoNavbar />}>
                    <Route index element={<RickosoApp />} />

                    <Route path="home" element={<RickosoApp />} />

                    <Route path="personajes" element={<Characters />} />

                    <Route path="locaciones" element={<Locations />} />

                    <Route path="episodios" element={<Episodes />} />

                </Route>

            </Routes>

            <Routes>
                <Route path="gifapp" element={<GifApp />} />
            </Routes>

            <Routes>
                <Route path="yesornotapp" element={<YesOrNot />} />
            </Routes>

            <Routes>
                <Route path="marvelapp" element={<MarvelApp />} />
            </Routes>

            <Routes>
                <Route path="pokeapp" element={<PokeAppNavBar />}>
                    <Route index element={<PokeApp />} />

                    <Route path="home" element={<PokeApp />} />

                    <Route path="pokemones" element={<Pokemons />} />
                </Route>
            </Routes>
        </>
    );
}

export default HaveFunRouter;