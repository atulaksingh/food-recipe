import React from "react";
import { BiStopwatch } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa";
import RecipeCrad from "../Cards/RecipeCrad";
function LatestReci() {
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="text-[#F89223] text-[19px] font-medium text-center">
          Choose a Category
        </div>
        <div className="text-[50px] font-extrabold text-center">
          Recipe Categories
        </div>

        <div className="grid grid-cols-3 gap-10 mx-44 my-20">
        <RecipeCrad />
        <RecipeCrad />
        <RecipeCrad />
         
        </div>
        <div className="bg-orange-500 hover:bg-orange-600 transition-all ease-in-out duration-100 rounded-sm font-bold text-white p-4 w-fit cursor-pointer mx-auto">View All Recipe</div>
      </div>
    </>
  );
}

export default LatestReci;
