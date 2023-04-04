import {createBrowserRouter} from "react-router-dom";
import ProductList from "./pages/product/ProductList";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import App from "./App";
import NotFound from "./shared/NotFound";
import MovieInfo from "./pages/product/MovieInfo";
import Register from "./pages/register/Register"

export const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "",
                element: <ProductList/>,
            },
            {
                path: "/movie-info/:id",
                element: <MovieInfo/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/register",
                element: <Register/>,
            },
            {
                path: "*",
                element: <NotFound/>,
            },
        ]
    },
    
  ]);