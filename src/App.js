import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import BrowseRecipes from "./pages/BrowseRecipes";
import RecipeDetails from "./pages/RecipeDetails";
import SubmitReci from "./pages/SubmitReci";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BrowseRecipes" element={<BrowseRecipes />} />
          <Route path="/RecipeDetails/:id" element={<RecipeDetails />} />
          <Route path="/SubmitReci" element={<SubmitReci />} />
        </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
