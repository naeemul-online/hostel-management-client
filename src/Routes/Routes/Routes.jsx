import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Meals from "../../Pages/Meals/Meals/Meals";
import UpcomingMeals from "../../Pages/UpcomingMeals/UpcomingMelas/UpcomingMeals";
import Login from "../../Pages/Authentication/Login";
import SignUp from "../../Pages/Authentication/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "meals",
        element: <Meals></Meals>,
      },
      {
        path: "upcomingMeals",
        element: <UpcomingMeals></UpcomingMeals>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
