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
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import BrowseRecipes from "./pages/BrowseRecipes";
import RecipeDetails from "./pages/RecipeDetails";
import Local from "./pages/Local";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AuthContextProvider, { useAuth } from "./AuthContext/AuthContext";
import Profile from "./pages/Profile";
import { Children, useEffect, useState } from "react";
import { auth } from "./firebase";
function App(props) {
  const { currentUser } = useAuth();
  console.log("ggff",currentUser)

  const [auth, setAuth] = useState(false);
  // console.log("auth",auth)
  // const navigate = useNavigate();
  // function ProtectedRoute(props) {
  //   const { currentUser } = useAuth();
  //   // const location = useLocation();
  //   if( !currentUser ) {
  //     return <Navigate to={"/login"} />;
  //   }
  //   return <Outlet />;
  // }
  useEffect(() => {
    // setAuth(currentUser);
    // ProtectedRoute()
    // return currentUser? setAuth(true):false
      // if(! currentUser ) {
      //    return setAuth(true);
      //  }
        //  return <Outlet />;
      
// ProtectedRoute()

  }, []);

  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ProtectedRoute />}>
              <Route exact path="/" element={<Home />} />
              <Route path="/BrowseRecipes" element={<BrowseRecipes />} />
              <Route path="/RecipeDetails/:id" element={<RecipeDetails />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route
              path="/login"
              element={
                <PublicRoute>
                <Login />
                 </PublicRoute>
              }
            />
            <Route
              path="signup"
              element={
                <PublicRoute>
                <SignUp />
                </PublicRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
function ProtectedRoute(props) {
  const { currentUser } = useAuth();
  // const location = useLocation();
  if (!currentUser) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet  />;
  // const { path } = props;
  // console.log("path", props);
  // if (path === "/") {
  //   return currentUser ? (
  //     <Navigate to={location.pathname ?? "/home"} />
  //   ) : (
  //     <Outlet {...props} />
  //   );
  // }

  // return !currentUser ? (
  //   <Navigate
  //     to={{
  //       pathname: "/login",
  //       // state: { form: path },
  //     }}
  //   />
  // ) : (
  //   <Outlet {...props} />
  // );
}
// const PrivateRoute = () => {
//   const { currentUser } = useAuth(); // determine if authorized, from context or however you're doing it

//   // If authorized, return an outlet that will render child elements
//   // If not, return element that will navigate to login page
//   return currentUser ? <Outlet /> : <Navigate to="/" />
//   // currentUser === true ? <Outlet /> : <Navigate to="/" replace />;
//   // return (currentUser === true ? <Outlet /> : <Navigate to="/" />)
// };

const PublicRoute = ({ children }) => {
  //  const location = useLocation();
  //  console.log("loc",location)
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/" /> : children;
};

