import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import SearchPage from "./SearchPage";
import Recipe from "./Recipe";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function Pages() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<SearchPage />} />
        <Route path="/showrep/:id" element={<showRep123 />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
