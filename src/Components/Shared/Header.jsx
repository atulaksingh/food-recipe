import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext/AuthContext";
function Header() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  // console.log("user",user)
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <div className="border border-pink-300 py-7">
        <img
          alt="imglogo"
          className="mx-auto "
          height={150}
          width={150}
          src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1693476439/logo_zrpcg5.png"
        />
      </div>
      <div className="flex gap-7 justify-center py-5">
        {currentUser && (
          <Link to={"/home"}>
            <div className="text-[17px] text-[#8c8e91] hover:text-[#ea9b5f] cursor-pointer font-semibold transition-all delay-75">
              Home
            </div>
          </Link>
        )}
        {currentUser && (
          <Link to={"/BrowseRecipes"}>
            <div className="text-[17px] text-[#8c8e91] hover:text-[#ea9b5f] cursor-pointer font-semibold transition-all delay-75">
              Browse Recipes
            </div>
          </Link>
        )}
        {currentUser && (
          <Link to={"/SubmitReci/"}>
            <div className="text-[17px] text-[#8c8e91] hover:text-[#ea9b5f] cursor-pointer font-semibold transition-all delay-75">
              Submit Recipe
            </div>
          </Link>
        )}
        {currentUser && (
          <Link to={"/profile"}>
            <div className="text-[17px] text-[#8c8e91] hover:text-[#ea9b5f] cursor-pointer font-semibold transition-all delay-75">
              Profile
            </div>
          </Link>
        )}
        {currentUser && (
          <Link
            onClick={() => {
              handleLogout();
            }}
          >
            <div className="text-[17px] text-[#8c8e91] hover:text-[#ea9b5f] cursor-pointer font-semibold transition-all delay-75">
              Logout
            </div>
          </Link>
        )}
        {!currentUser && (
          <Link to={"/"}>
            <div className="text-[17px] text-[#8c8e91] hover:text-[#ea9b5f] cursor-pointer font-semibold transition-all delay-75">
              Login
            </div>
          </Link>
        )}
        {!currentUser && (
          <Link to={"/signup"}>
          <div className="text-[17px] text-[#8c8e91] hover:text-[#ea9b5f] cursor-pointer font-semibold transition-all delay-75">
            Register
          </div>
          </Link>
        )}
        {/* {isAuthenticated ? (
          <div    onClick={() => logout()} className="text-[17px] text-[#8c8e91] hover:text-[#ea9b5f] cursor-pointer font-semibold transition-all delay-75">
            Logout
          </div>
        ) : (
          <div
            onClick={() => loginWithRedirect()}
            className="text-[17px] text-[#8c8e91] hover:text-[#ea9b5f] cursor-pointer font-semibold transition-all delay-75"
          >
            Login
          </div>
        )} */}
        {/* <div class="flex items-center md:order-2">
      <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
      </button>
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ">Sign out</a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div> */}
      </div>
    </>
  );
}

export default Header;
