import React, { useEffect, useState } from "react";
import LatestReci from "./LatestReci";
import { fetchData } from "../../service";
const ImageData = [
  {
    id: "1",
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1693807794/istockphoto-807031028-2048x2048_1_fvirpc.jpg",
    alt: "Burger",
  },
  {
    id: "2",
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1693807356/istockphoto-855749956-2048x2048_1_tw2hrj.jpg",
    alt: "fish",
  },
  {
    id: "3",
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1693543390/baked-chicken-breast-9C4F43W-omrrd2rhfvg4fdu0ak0dak66tq4dtitz01xfn44eqo_ccktab.jpg",
    alt: "chicken",
  },
  {
    id: "4",
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1693807514/istockphoto-1077980738-2048x2048_1_d2maec.jpg",
    alt: "paneer",
  },
  {
    id: "5",
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1693807647/istockphoto-1133727757-2048x2048_1_cci3b0.jpg",
    alt: "pizza",
  },
];
function RecipeCateg() {
  const [data, setData] = useState("second");
  const [loading, setloading] = useState(true);
  const recipeClick = (dataaa) => {
    setloading(true);
    // console.log("gg", dataaa);
    fetchData(dataaa).then((response) => {
      setData(response);
      // console.log(response);
      setloading(false);
    });
  };
  useEffect(() => {
    recipeClick();
  }, []);
  return (
    <>
      <div className="container mx-auto py-10 sm:py-20 text-center">
        <div className="text-[#F89223] text-[19px] font-medium ">
          Choose a Category
        </div>
        <div className="text-3xl sm:text-[50px] font-extrabold py-5">Recipe Categories</div>
        <div className="">
          <div className="flex sm:flex-row flex-wrap sm:flex-nowrap justify-center gap-3 sm:gap-5 lg:gap-10 sm:px-10">
            {ImageData.map((item, index) => (
              <img
                key={index}
                alt={item.alt}
                className="rounded-full h-16 sm:h-28 md::h-32 lg:h-44 cursor-pointer hover:rotate-[5deg] transition duration-500 ease-in-out hover:opacity-60 my-2 sm:my-5 "
                src={item.img}
                onClick={() => recipeClick(item.alt)}
              />
            ))}
          </div>

          <LatestReci foodData={data} load={loading} />
        </div>
      </div>
    </>
  );
}

export default RecipeCateg;
