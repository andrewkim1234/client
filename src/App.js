import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Single from "./pages/Single"
import Write from "./pages/Write"
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import "./style.scss"

const Layout = () => {
  return(
    <>
    <NavigationBar/>
    <Outlet/>
    <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
    {
      path: "/",
      element: <Home/>
    },

    {
      path: "/post/:id",
      element: <Single/>
    },

    {
      path: "/write",
      element: <Write/>
    },
    ]
  },

  {
    path: "/register",
    element: <Register/>,
  },

  {
    path: "/login",
    element: <Login/>,
  },

]);

function App() {
  return (
    <div className="app">
      <div className="container"></div>
      <RouterProvider router={router}/>
    </div>
  );
}


export default App;