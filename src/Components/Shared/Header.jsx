import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="border border-pink-300 py-7">
        <img
          alt="imglogo"
          className="mx-auto "
          height={150}
          width={150}
          src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693476439/logo_zrpcg5.png"
        />
      </div>
      <div className="flex gap-7 justify-center py-5">
        <Link to={"/"}>
          <div className="text-[17px] text-[#8c8e91] hover:text-[#ea9b5f] cursor-pointer font-semibold transition-all delay-75">
            Home
          </div>
        </Link>
        <Link to={"/BrowseRecipes"}>
          <div className="text-[17px] text-[#8c8e91] hover:text-[#ea9b5f] cursor-pointer font-semibold transition-all delay-75">
            Browse Recipes
          </div>
        </Link>
        <Link to={"/RecipeDetails/id"}>
          <div className="text-[17px] text-[#8c8e91] hover:text-[#ea9b5f] cursor-pointer font-semibold transition-all delay-75">
            Submit Recipe
          </div>
        </Link>
        <div className="text-[17px] text-[#8c8e91] hover:text-[#ea9b5f] cursor-pointer font-semibold transition-all delay-75">
          Login
        </div>
      </div>
    </>
  );
}

export default Header;
