import React,{useEffect,useState} from "react";
import Footer from "../Components/Shared/Footer";
import LatestReci from "../Components/Main/LatestReci";
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
        <LatestReci />
        <Footer />
      </div>
    </>
  );
}

export default Home;
