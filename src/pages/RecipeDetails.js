import React from "react";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";

function RecipeDetails() {
  return (
    <>
      <div className="">
        <Header />
        <div className="container mx-auto">
          <div className="px-40 py-10">
            <h1 className="text-[18px] border-l-4 border-[#f89223] text-[#7d7f82] pl-10">
              A handful of simple ingredients typify the fresh, vibrant flavors
              of Greek cooking.
            </h1>
            <img
              alt=""
              className=""
              height={800}
              width={800}
              src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693820180/greek-gyros-on-a-pita-bread-PNSV8HL_ip7miz.jpg"
            />

            <div className="">
              <div className="text-[22px] font-[600] text-[#2e2f31] my-3">
                Main Ingredients
              </div>
              <div class="block">
                <div class="mt-2">
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="w-5 h-5 text-green-600 border-0 rounded-md focus:ring-0"
                    />
                    <span class="ml-2">Success checkbox</span>
                  </label>
                </div>
              </div>
              <div class="block">
                <div class="mt-2">
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="w-5 h-5 text-green-600 border-0 rounded-md focus:ring-0"
                    />
                    <span class="ml-2">Success checkbox</span>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[22px] text-[#2e2f31] font-[600] my-3">
                Directions
              </div>
              <div className="flex gap-2 align-middle items-center">
                <div className="border-gray-600 bg-gray-500 text-white justify-center rounded-full flex align-middle items-center w-8 h-8  ">1</div>
                <p className="text-[#7d7f82] text-[17px]">
                  Preheat the oven to 375 degrees F (190 degrees C).
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RecipeDetails;
