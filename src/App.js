import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Login from "./pages/Login";
import LoadingBar from 'react-top-loading-bar'
import SignUp from "./pages/SignUp";
import AuthContextProvider, { useAuth } from "./AuthContext/AuthContext";
import {  useState } from "react";
import BrowseRecipes from "./pages/BrowseRecipes";
function App(props) {


  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ProtectedRoute />}>
              <Route exact path="/" element={<Home />} />
              <Route path="/BrowseRecipes" element={<BrowseRecipes />} />
              <Route path="/RecipeDetails/:id" element={<RecipeDetails />} />
              {/* <Route path="/profile" element={<Profile />} /> */}
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
  const [progress, setProgress] = useState(100)
  const { currentUser,isLoading } = useAuth();

  if(isLoading){
    return    <LoadingBar className="h-10" color="#f11946" height={5} progress={progress} onLoaderFinished={() => setProgress(0)} />
    
  }
  if (!isLoading && !currentUser) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet  />;

}


const PublicRoute = ({ children }) => {

  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/" /> : children;
};

