import React from "react";

function RecipeCateg() {
  return (
    <>
      <div className="container mx-auto py-20 text-center">
        <div className="text-[#F89223] text-[19px] font-medium ">
          Choose a Category
        </div>
        <div className="text-[50px] font-extrabold py-5">Recipe Categories</div>
        <div>
          <div className="flex justify-center gap-10">
            <img
              alt="imgLogo"
              className="rounded-full h-44 cursor-pointer hover:rotate-[5deg] transition duration-500 ease-in-out hover:opacity-60 my-5"
              src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693543397/appetizer-bruschetta-with-tuna-and-tomatoes-LKA5ZYU-omrs5yczemz943vxo1dqw9tztvscarh3mzggf5azkw_ezljrd.jpg"
            />{" "}
            <img
              alt="imgLogo"
              className="rounded-full h-44 cursor-pointer hover:rotate-[5deg] transition duration-500 ease-in-out hover:opacity-60 my-5"
              src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693543393/beef-steak-tomahawk-S3JHQLN-omrts6h2r6ooajb7o7fsckvwj4sv3smiz698m6z25c_mytyec.jpg"
            />
            <img
              alt="imgLogo"
              className="rounded-full h-44 cursor-pointer hover:rotate-[5deg] transition duration-500 ease-in-out hover:opacity-60 my-5"
              src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693543390/baked-chicken-breast-9C4F43W-omrrd2rhfvg4fdu0ak0dak66tq4dtitz01xfn44eqo_ccktab.jpg"
            />
            <img
              alt="imgLogo"
              className="rounded-full h-44 cursor-pointer hover:rotate-[5deg] transition duration-500 ease-in-out hover:opacity-60 my-5"
              src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693543388/cooked-vegetables-according-to-chinese-recipe-PN2GKUB-omrff2jgxcsv5cfw86lk4kjvmzkfiaqk7pxv13p38g_c5ifw8.jpg"
            />
            <img
              alt="imgLogo"
              className="rounded-full h-44 cursor-pointer hover:rotate-[5deg] transition duration-500 ease-in-out hover:opacity-60 my-5"
              src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693543387/pecan-pie-tart-in-baking-dish-traditional-festive-9WMXQ3Z-omrtq2c5dlsg64dt0sj08m3kex84sb89opewqs3y5c_p0olqf.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeCateg;
