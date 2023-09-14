import React from "react";
import { BiSolidMap } from "react-icons/bi";
import { AiFillMail, AiTwotonePhone } from "react-icons/ai";
function Footer() {
  return (
    <>
      <div className="bg-black py-20">
        <div className="grid grid-cols-3  mx-40">
          <div>
            <h1 className="text-[20px] font-semibold text-white mb-5">
              Subscribe
            </h1>
            <div className="text-[#B5B7BA] text-[16px] w-96 my-6">
              Register and get notified about all the news & updates before it
              gets too late.
            </div>
            <div className="flex gap-2">
              <input
                className="appearance-none block w-72  text-gray-500 border border-black rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-red-400"
                id="grid-first-name"
                type="text"
                placeholder="Email"
              />
              <button
                className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-[20px] font-semibold text-white mb-5">
              Subscribe
            </h1>
            <div className="text-[#B5B7BA] text-[16px]">Browse Recipes</div>
            <div className="text-[#B5B7BA] text-[16px]">Submit a Recipes</div>
            <div className="text-[#B5B7BA] text-[16px]">Our Chef</div>
            <div className="text-[#B5B7BA] text-[16px]">Latest News</div>
            <div className="text-[#B5B7BA] text-[16px]">Contact</div>
          </div>
          <div>
            <h1 className="text-[20px] font-semibold text-white mb-5">
              Contact
            </h1>
            <div className="flex align-bottom items-center gap-1">
              <div>
                <BiSolidMap size={20} color="#ff6900" />
              </div>
              <div className="text-[#B5B7BA] text-[16px]">
                787 Mark View Street, New Town, California
              </div>
            </div>
            <div className="flex align-bottom items-center gap-1">
              <div>
                <div>
                  <AiFillMail size={20} color="#ff6900" />
                </div>
              </div>
              <div className="text-[#B5B7BA] text-[16px]">
                needhelp@thatix.com
              </div>
            </div>

            <div className="flex align-bottom items-center gap-1">
              <div>
                <div>
                  <AiTwotonePhone size={20} color="#ff6900" />
                </div>
              </div>
              <div className="text-[#B5B7BA] text-[16px]">666 888 0000</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
