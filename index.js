import { createRoot } from "react-dom/client";
import App from "./App"
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import CountryDetails from "./components/CountryDetails";

const root=createRoot(document.querySelector("#root"));

const router=createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {   key:1 ,
                path:"/" ,
                element: <Home />
            },
            { 
                key:2 ,   
                path:"/country/:name" ,
                element:<Contact />
            },
            {
                key:3 ,
                path:"/:country", 
                element:<  CountryDetails />
            }
        ]
    },
    {
        path:"/test",
        element:<h1>Test Success</h1>
    }
])

root.render(<RouterProvider router={router}/>)