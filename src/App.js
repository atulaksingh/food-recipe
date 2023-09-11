import {
  BrowserRouter,
  Route,
  Routes,
  Router,
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
import { Children } from "react";
function App(props) {
  const { currentUser } = useAuth();
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route exact path="/home" element={<ProtectedRoute />}> */}
            {/* <ProtectedRoute> */}
            <ProtectedRoute exact path="/home" element={<Home />} />
            {/* </ProtectedRoute> */}
            {/* </Route> */}
            {/* <Route exact path="/BrowseRecipes" element={<ProtectedRoute />}> */}
            <Route
              path="/BrowseRecipes"
              element={
                <ProtectedRoute>
                  <BrowseRecipes />
                </ProtectedRoute>
              }
            />
            <Route exact path="/RecipeDetails/:id" element={<ProtectedRoute />}>
              <Route path="/RecipeDetails/:id" element={<RecipeDetails />} />
            </Route>
            <Route
              path="/SubmitReci"
              element={
                <ProtectedRoute>
                  <Local />
                </ProtectedRoute>
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route exact path="/profile" element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/" element={<Login />} />

          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
function ProtectedRoute(props) {
  const { currentUser } = useAuth();
  // const { navigate } = useNavigate;
  console.log("props", props);
  const { path } = props;
  console.log("path", path);
  return currentUser ? (
    <Route {...props} />
  ) : (
    <Router
      to={{
        pathname: "/",
        state: { form: path },
      }}
    />
  );
}

// const ProtectedRoute = ({ Children }) => {
//   const { currentUser } = useAuth();
//   if (!currentUser) {
//     return <Navigate to={"/"} />;
//   }
//   return Children;
// };
