import React, { useEffect, useState } from "react";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";
import { useParams } from "react-router-dom";
import { fetchOneData } from "../service";

function RecipeDetails() {
  const [data, setData] = useState("");
  // console.log(data.recipe);
  const slug = useParams().id;
  const ID = slug;
  // console.log(ID);
  useEffect(() => {
    fetchOneData(ID).then((response) => {
      setData(response);
    });
  }, []);

  return (
    <>
      <div className="">
        <Header />
        <div className="container mx-auto">
          <div className="px-40 py-10">
            <h1 className="text-[18px] border-l-4 border-[#f89223] text-[#7d7f82] pl-10 my-7">
              {data?.recipe?.label}
            </h1>
            <img
              alt=""
              className="bg-contain w-3/6"
              src={data?.recipe?.images?.SMALL?.url}
            />

            <div className="">
              <div className="flex gap-10">
                <div className="text-[22px] font-[600] text-[#2e2f31] my-3">
                  Main Ingredients
                </div>
                <div className="text-[22px] font-[600] text-[#2e2f31] my-3">
                  Dish Type : <span className="text-gray-500">{data?.recipe?.dishType}</span>
                </div>
                <div className="text-[22px] font-[600] text-[#2e2f31] my-3">
                  Meal Type : <span className="text-gray-500">{data?.recipe?.mealType}</span>
                </div>
              </div>
              <div className="block">
                <div className="mt-2">
                  <div className="grid grid-cols-2">
                    {data?.recipe?.ingredients.map((item, index) => (
                      <div key={index}>
                        <label className="inline-flex items-center my-1 text-[#7d7f82]">
                          <input
                            type="checkbox"
                            className="w-5 h-5 text-green-600 border-0 rounded-md focus:ring-0"
                            id="cbox3"
                          />
                          <br />
                          <span className="ml-2">{item.text}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <div className="text-[22px] text-[#2e2f31] font-[600] my-3">
                Directions
              </div>
              <div className="flex gap-2 align-middle items-center">
                <div className="border-gray-600 bg-gray-500 text-white justify-center rounded-full flex align-middle items-center w-8 h-8  ">
                  7
                </div>
                <p className="text-[#7d7f82] text-[17px]">
                  Preheat the oven to 375 degrees F (190 degrees C).
                </p>
              </div> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RecipeDetails;
