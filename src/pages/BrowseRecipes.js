import React, { useEffect, useState } from "react";
import Header from "../Components/Shared/Header";
import RecipeCrad from "../Components/Cards/RecipeCrad";
import { fetchData } from "../service";
import { Link } from "react-router-dom";
const loadingData = new Array(20).fill(1);
function BrowseRecipes() {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [query, setQuery] = useState("pasta");
  const [data, setData] = useState("");
  const [loading, setloading] = useState(true);

  const searchrecipe = (searchQ) => {
    setloading(true);
    fetchData(searchQ).then((response) => {
      setData(response);
      setloading(false);
    });
  };

  useEffect(() => {
    fetchData(query).then((response) => {
      setData(response);
      setloading(false);
      //   console.log(data)
    });
  }, []);

  return (
    <>
      <Header />

      <div className="mx-44">
        <div className="py-10 flex justify-center gap-4 ">
          <input
            className="appearance-none block  w-96 bg-gray-30000 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
            id="grid-password"
            type="search"
            placeholder="Find a Recip..."
            onChange={(e) => setSearchedTerm(e.target.value)}
            value={searchedTerm}
          />
          <button
            className="flex-shrink-0 bg-orange-500 hover:bg-orange-700 border-orange-500 hover:border-orange-700 text-sm border-4 text-white py-0 px-4 rounded"
            type="button"
            onClick={() => searchrecipe(searchedTerm)}
          >
            Search
          </button>
        </div>
        <div className="grid grid-cols-3 gap-10 mx-44 my-20">
          {loading
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
            : data &&
              data?.hits?.map((item, index) => (
                <div key={index}>
                  <Link
                    to={`/RecipeDetails/${item.recipe.uri.substring(51)}`}
                    className="cursor-pointer"
                  >
                    <RecipeCrad
                      img={item.recipe.images.SMALL.url}
                      alt={item.recipe.label}
                      title={item.recipe.label}
                    />
                    </Link>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default BrowseRecipes;
