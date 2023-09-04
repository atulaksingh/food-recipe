import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import BrowseRecipes from "./pages/BrowseRecipes";
import RecipeCateg from "./Components/Main/RecipeCateg";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BrowseRecipes" element={<BrowseRecipes />} />
          <Route path="/RecipeDetails" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
