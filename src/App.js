import {
  BrowserRouter,
  Route,
  Routes,
  Router,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
  redirect,
} from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import BrowseRecipes from "./pages/BrowseRecipes";
import RecipeDetails from "./pages/RecipeDetails";
import Local from "./pages/Local";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AuthContextProvider, { useAuth } from "./AuthContext/AuthContext";
import Profile from "./pages/Profile";
import { Children, useEffect } from "react";
function App(props) {
  const { currentUser } = useAuth();
  // const navigate = useNavigate();
  useEffect(() => {
    if ( !currentUser) {
      redirect("/login");
    }
  }, [])
  
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />

            <Route exact path="/" element={<ProtectedRoute />}>
              <Route exact path="/" element={<Home />} />
              <Route path="/BrowseRecipes" element={<BrowseRecipes />} />
              <Route path="/RecipeDetails/:id" element={<RecipeDetails />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
function ProtectedRoute(props) {
  
  const { currentUser } = useAuth();
  const location = useLocation();

  const { path } = props;
  console.log("path", props);
  // if (path === "/") {
  //   return currentUser ? (
  //     <Navigate to={location.pathname ?? "/home"} />
  //   ) : (
  //     <Outlet {...props} />
  //   );
  // }

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate
      to={{
        pathname: "/login",
        // state: { form: path },
      }}
    />
  );
}
// const PrivateRoute = () => {
//   const { currentUser } = useAuth(); // determine if authorized, from context or however you're doing it

//   // If authorized, return an outlet that will render child elements
//   // If not, return element that will navigate to login page
//   return currentUser ? <Outlet /> : <Navigate to="/" />
//   // currentUser === true ? <Outlet /> : <Navigate to="/" replace />;
//   // return (currentUser === true ? <Outlet /> : <Navigate to="/" />)
// };
