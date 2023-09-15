import React, { useState } from "react";

// import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function LoginCard() {
  const navigate = useNavigate();
  // console.log("location",location)
  const [loginemail, setLoginEmail] = useState("");
  const [loginpassword, setLoginPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();
  const onLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    login(loginemail, loginpassword)
      .then((resp) => {
        // console.log(resp);
        toast.success(
          "Login Success",
          { autoClose: 1500 },
          {
            position: toast.POSITION.TOP_RIGHT,
            className: "foo-bar",
          }
        );
        navigate("/")
      })
      // .then(() => navigate("/"))
      .catch((error) => {
        toast.error(
          error.message,
          { autoClose: 1500 },
          {
            position: toast.POSITION.TOP_CENTER,
            className: "foo-bar",
          }
        );
      })
      .finally(() => setIsSubmitting(false));
    // signInWithEmailAndPassword(auth, loginemail, loginpassword)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;

    //     navigate("/home");
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //   });
  };
  return (
    <>
      <ToastContainer />
      <div className="py-9">
        <form className="w-full max-w-md mx-auto    border pl-16 pr-16 pb-10 m-auto">
          <div className="text-3xl text-center my-10 font-bold">Sign In</div>
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
                //   value={signUpemail}
                onChange={(e) => setLoginEmail(e.target.value)}
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
                id="txtPassword"
                type="text"
                placeholder="******************"
                //   value={signUpPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={onLogin}
              >
                Sign In
              </button>
            </div>
          </div>

          <div className="mt-10 text-center text-sm text-gray-500">
            New user?
            <Link to={"/SignUp"}>
              <div
                href="/SignUp"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2"
              >
                Create an account
              </div>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginCard;
