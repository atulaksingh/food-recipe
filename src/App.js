import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import BrowseRecipes from "./pages/BrowseRecipes";
import RecipeDetails from "./pages/RecipeDetails";
import SubmitReci from "./pages/SubmitReci";
import Local from "./pages/Local";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AuthContextProvider from "./AuthContext/AuthContext";
function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/BrowseRecipes" element={<BrowseRecipes />} />
            <Route path="/RecipeDetails/:id" element={<RecipeDetails />} />
            <Route path="/SubmitReci" element={<Local />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
