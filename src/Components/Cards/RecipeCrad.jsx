import React from "react";
import { BiStopwatch } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

function RecipeCrad(props) {

  return (
    <>
      <div  className="hover:shadow-lg transition-all ease-in-out duration-100">
        <div  className="border border-gray-200 rounded-md">
          <img alt="img" className="h-64 w-full rounded-t-md" src={props.img} />
          <div>
            <div className="mx-10">
              <div className="text-[22px] text-start font-medium my-3 hover:text-orange-500 cursor-pointer line-clamp-1 overflow-clip">
                {props.title}
              </div>
              <div className="text-start text-[15px] leading-5 w-72">
                A handful of simple ingredients typify the fresh, vibrant
                flavors of Greek cooking.
              </div>
              <div className="flex align-middle items-center gap-1 py-5">
                <img
                  alt="img"
                  className="rounded-full h-10"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693298229/testi_2_bedv6k.jpg"
                />{" "}
                <span className="text-gray-500">by</span>
                <div className="text-black font-semibold">Jane Doe</div>
              </div>
            </div>

            <div className=" border-t border-gray-200 flex align-middle items-center justify-around text-gray-500 font-medium">
              <div className="p-4 flex align-middle items-center gap-1 ">
                <div>
                  <FaRegFolderOpen color="green" />
                </div>
                <span className="cursor-pointer hover:text-red-400">
                 {props.label}
                </span>
              </div>
              <div className="p-4 flex align-middle items-center gap-1  border-l">
                <div>
                  <BiStopwatch color="green" />
                </div>
                <span>{props.time} Min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeCrad;
