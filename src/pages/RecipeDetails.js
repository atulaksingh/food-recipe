import React, { useEffect, useState } from "react";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";
import { useParams } from "react-router-dom";
import { fetchOneData } from "../service";
import LoadingBar from "react-top-loading-bar";

function RecipeDetails() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(100);
  const [data, setData] = useState("");
  const slug = useParams().id;
  const ID = slug;
  useEffect(() => {
    fetchOneData(ID).then((response) => {
      setLoading(false);
      setData(response);
    });
  }, []);

  return (
    <>
      <div className="">
        <Header />
        <div className="container mx-auto">
          <div className="mx-5 2xl:px-40 py-10">
            {loading ? (
              <LoadingBar
                className="h-10"
                color="#f11946"
                height={5}
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
              />
            ) : (
              <>
                <div className="flex flex-col md:flex-row align-middle items-center justify-around mb-10">
                  {!data?.recipe?.label ? (
                    <div className="animate-pulse">
                      <div class="h-12 bg-slate-500 rounded col-span-1"></div>
                    </div>
                  ) : (
                    <h1 className="text-[18px] border-b-4 md:border-b-0 md:border-l-4 border-[#f89223] text-[#7d7f82] md:pl-10 my-7">
                      {data?.recipe?.label}
                    </h1>
                  )}

                  {!data?.recipe?.dishType ? (
                    <div className="animate-pulse">
                      <div class="h-12 bg-slate-500 rounded col-span-1"></div>
                    </div>
                  ) : (
                    <div className="text-[18px]  text-[#7d7f82] my-3">
                      Dish Type :{" "}
                      <span className="">{data?.recipe?.dishType}</span>
                    </div>
                  )}

                  {!data?.recipe?.mealType ? (
                    <div className="animate-pulse">
                      <div class="h-12 bg-slate-500 rounded col-span-1"></div>
                    </div>
                  ) : (
                    <div className="text-[18px]  text-[#7d7f82] my-3">
                      Dish Type :{" "}
                      <span className="">{data?.recipe?.mealType}</span>
                    </div>
                  )}
                </div>
                <div className=" grid md:grid-cols-2 gap-10">
                  <div>
                    <img
                      alt=""
                      className="bg-contain w-full max-w-xs mx-auto md:max-w-md rounded-full"
                      src={data?.recipe?.images?.SMALL?.url}
                    />
                  </div>

                  <div className="m-auto">
                    <div className="flex gap-10">
                      <div className="text-[22px] font-[600] text-[#2e2f31] mb-3">
                        Main Ingredients
                      </div>
                    </div>
                    <div className="block">
                      <div className="mt-2">
                        <div className="grid grid-cols-1 mx-auto">
                          {data?.recipe?.ingredients.map((item, index) => (
                            <div key={index}>
                              <ul className="list-outside list-disc  mx-5">
                                <li>{item.text}</li>
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RecipeDetails;
