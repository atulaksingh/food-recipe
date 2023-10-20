import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext/AuthContext";
function Header() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  // console.log("user",user)
  useEffect(() => {

  }, [])
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  
  return (
    <>
      <div className="border-b-2 border-t-2  border-pink-300 py-3 sm:py-7">
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
          <Link to={"/"}>
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
        {/* {currentUser && (
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
        )} */}
        {currentUser && (
          <Link
            onClick={() => {
              handleLogout();
            }}
          >
            <div className="text-[17px]  text-[#8c8e91] hover:text-[#ea9b5f] cursor-pointer font-semibold transition-all delay-75">
              Logout
            </div>
          </Link>
        )}
        {!currentUser && (
          <Link to={"/login"}>
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
      
      </div>
    </>
  );
}

export default Header;
