import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Error from "../Pages/Error";
import Services from "../Pages/Services";
import Login from "../Pages/Login/Login";
import SignIn from "../Pages/SignIn/SignIn";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Booking/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
       {
        path: '/services',
        element: <Services></Services>
        
       },
       {
        path: '/login',
        element: <Login></Login>
       },
       {
        path: '/signin',
        element: <SignIn></SignIn>
       },
       {
        path: '/checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
       },
       {
        path: '/bookings',
        element:<PrivateRoute> <Bookings></Bookings></PrivateRoute>
       }
      ]
    },
  ]);

export default router;