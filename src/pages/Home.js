import React from "react";
import Footer from "../Components/Shared/Footer";
import RecipeCateg from "../Components/Main/RecipeCateg";
import Owl from "../Components/Cards/Owl";
import Header from "../Components/Shared/Header";

function Home() {


  return (
    <>
      <div>
      
        <Header />
        <Owl />
        <RecipeCateg />
        <Footer />
      </div>
    </>
  );
}

export default Home;
