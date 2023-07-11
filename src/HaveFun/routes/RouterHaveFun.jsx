import React from "react";
import { Route, Routes } from "react-router-dom";
import GifApp from "../gifapp/gifMain";
import RickosoApp from "../rickoso/rickosoMain";
import MarvelApp from "../marvel/marvelMain";
import YesOrNot from "../yesornot/YesOrNot";
import RickosoNavbar from "../rickoso/routes/rickosoNavBar";
import Characters from "../rickoso/pages/characters";

function HaveFunRouter(){
    return(
        <>
            <Routes>

                <Route path="rickosoapp" element={<RickosoNavbar/>}>
                    <Route index element={<Characters/>} />
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
        </>
    );
}

export default HaveFunRouter;