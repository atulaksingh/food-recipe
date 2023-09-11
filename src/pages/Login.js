import React from "react";

import LoginCard from "../Components/Cards/LoginCard";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";

function Login() {
  return (
    <>
      <div className="">
        <Header />
        <LoginCard />
        <Footer />
      </div>
    </>
  );
}

export default Login;
