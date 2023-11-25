import React from "react";
import { Route, Routes } from "react-router-dom";
import Rows from "../pages/rows";
import RouterRows from "./routerRows";
import Reviews from "../pages/rewiews";
import RouterReviews from "./routerReviews";

function ArticlesRouter(){
    return(
        <>
            <Routes>
                <Route path="rows" element={<Rows />} />

                <Route path="rows/*" element={<RouterRows />} />

                <Route path="reviews" element={<Reviews />} />

                <Route path="reviews/*" element={<RouterReviews />} />
                
            </Routes>
        </>
    );
}

export default ArticlesRouter;