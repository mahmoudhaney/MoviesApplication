import {createBrowserRouter} from "react-router-dom";
import ProductList from "./pages/product/ProductList";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import App from "./App";
import NotFound from "./shared/NotFound";

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
                path: "*",
                element: <NotFound/>,
            },
        ]
    },
    
  ]);