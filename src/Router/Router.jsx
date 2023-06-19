import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Login from "../Layout/Login";
import SighinUp from "../Layout/SighinUp";
import PrivetRoute from "./PrivetRoute";
import Addproducts from "../Pages/Addproducts/Addproducts";
  

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/shop",
          element: <PrivetRoute><Shop></Shop></PrivetRoute>,
          loader:()=>fetch(' https://eazybye-surver-shammi-riya.vercel.app/allProducts')
        },
        {
          path:'/addproducts',
          element:<Addproducts></Addproducts>
        }
      ],
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/sighinUp',
        element:<SighinUp></SighinUp>
    }
  ]);

export default router;