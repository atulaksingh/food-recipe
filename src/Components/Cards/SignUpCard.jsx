import React, { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext/AuthContext";
import { ToastContainer, toast } from "react-toastify";
function SignUpCard() {
  const navigate = useNavigate();

  const [signUpemail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
//onclick to signup btn calling onSubmit function 

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(false);

    //authentication for input value if black
    if (signUpemail.trim() === "" && signUpPassword === "") {
      return toast.error(
        "Please Enter a Valid Input",
        {
          position: toast.POSITION.TOP_CENTER,
          className: "foo-bar",
        },
        { autoClose: 1500 }
      );
    }
    setIsLoading(true);
    setIsSubmitting(true);
    setTimeout(() => {
      register(signUpemail, signUpPassword)
        .then((resp) => {
          setIsLoading(false);
          return navigate("/login");
          // console.log(resp);
        })
        .catch((error) => {
          setIsLoading(false);
          toast(
            error.message,
            { autoClose: 1500 },
            {
              position: toast.POSITION.TOP_CENTER,
              className: "foo-bar",
            }
          );
        })
        .finally(() => setIsSubmitting(false));
    }, 2000);
  };

  return (
    <>
      <ToastContainer />
      <div>
        <div className="my-6">
          <form className="w-full max-w-md mx-auto    border pl-16 pr-16 pb-16 m-auto">
            <div className="text-3xl text-center my-10 font-bold">SignUp</div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Email
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="email"
                  value={signUpemail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Password
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="password"
                  placeholder="******************"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={onSubmit}
                  disabled={isLoading}
                >
                   {isLoading ? "Sign Up..." : "Sign Up"}
                </button>
              </div>
            </div>
            <div className="mt-10 text-center text-sm text-gray-500 ">
              Have an account?
              <Link to={"/"}>
                <div
                  href="/login"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2"
                >
                  Log in
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpCard;
