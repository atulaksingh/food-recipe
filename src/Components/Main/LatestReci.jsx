import React from "react";
import RecipeCrad from "../Cards/RecipeCrad";
import { Link } from "react-router-dom";
const loadingData = new Array(20).fill(1);
function LatestReci(props) {
  const Data = props.foodData.hits;
  const Loading = props.load;
  return (
    <>
      <div className="container  py-10">
        <div className="grid lg:grid-cols-3 gap-10 mx-5 sm:mx-20 lg:mx-0 xl:mx-44 my-20">
          {Loading
            ? loadingData.map((item, index) => {
                return (
                  <div key={index} className="">
                    <div className="">
                      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                        <div className="lg:h-48 bg-slate-200 md:h-36 w-full object-cover object-center"></div>
                        <div className="px-10 py-3">
                          <div className="bg-slate-200 rounded-full w-2/3 animate-pulse h-3  mb-2"></div>
                          <div className="w-full rounded-full mb-4 h-6 animate-pulse bg-slate-200"></div>

                          <div className="animate-pulse flex space-x-4 align-middle items-center">
                            <div className="rounded-full bg-slate-200 h-10 w-14"></div>
                            <div className="h-5 bg-slate-200 rounded  w-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center flex-wrap border-t ">
                          <div className="bg-slate-200 h-4 py-5 animate-pulse  w-32 inline-flex items-center md:mb-2 lg:mb-0"></div>
                          <span className="bg-slate-200 w-32   h-4 animate-pulse   inline-flex items-center ml-auto leading-none text-sm  py-5"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : Data &&
              Data.map((item, index) => (
                <Link
                  key={index}
                  to={`/RecipeDetails/${item.recipe.uri.substring(51)}`}
                  className="cursor-pointer"
                >
                  <RecipeCrad
                    img={item.recipe.images.SMALL.url}
                    alt={item.recipe.label}
                    title={item.recipe.label}
                    time={item.recipe.totalTime}
                    label={item.recipe.mealType}
                  />
                </Link>
              ))}
        </div>
        <div className="bg-orange-500 hover:bg-orange-600 transition-all ease-in-out duration-100 rounded-sm font-bold text-white p-4 w-fit cursor-pointer mx-auto">
          View All Recipe
        </div>
      </div>
    </>
  );
}

export default LatestReci;
