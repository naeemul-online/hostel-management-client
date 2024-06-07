import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Meals from "../../Pages/Meals/Meals/Meals";
import UpcomingMeals from "../../Pages/UpcomingMeals/UpcomingMelas/UpcomingMeals";
import Login from "../../Pages/Authentication/Login";
import SignUp from "../../Pages/Authentication/SignUp";
import PrivateRoute from "./PrivateRoute";
import Private from "../../Pages/Private/Private";
import MealDetails from "../../Pages/MealDetails/MealDetails";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import Admin from "../../Pages/Dashborad/Admin/Admin";
import User from "../../Pages/Dashborad/User/User";
import RequestedMeal from "../../Pages/Dashborad/RequestedMeal/RequestedMeal";
import MyReviews from "../../Pages/Dashborad/MyReviews/MyReviews";
import PaymentHistory from "../../Pages/Dashborad/PaymentHistory/PaymentHistory";
import MyProfile from "../../Pages/Dashborad/MyProfile/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
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
        path: "meal/:id",
        element: <MealDetails></MealDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/meals/${params.id}`),
      },
      {
        path: "private",
        element: (
          <PrivateRoute>
            <Private></Private>
          </PrivateRoute>
        ),
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
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "admin",
        element: <Admin></Admin>,
      },
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "requestedMeal",
        element: <RequestedMeal></RequestedMeal>,
      },
      {
        path: "myReviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);
