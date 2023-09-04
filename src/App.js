import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import BrowseRecipes from "./pages/BrowseRecipes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BrowseRecipes" element={<BrowseRecipes />} />
        </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
