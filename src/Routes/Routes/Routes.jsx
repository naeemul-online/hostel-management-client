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
import RequestedMeal from "../../Pages/Dashborad/RequestedMeal/RequestedMeal";
import MyReviews from "../../Pages/Dashborad/MyReviews/MyReviews";
import PaymentHistory from "../../Pages/Dashborad/PaymentHistory/PaymentHistory";
import MyProfile from "../../Pages/Dashborad/MyProfile/MyProfile";
import AdminProfile from "../../Pages/Dashborad/AdminProfile/AdminProfile";
import ManageUser from "../../Pages/Dashborad/ManageUser/ManageUser";
import AddMeal from "../../Pages/Dashborad/AddMeal/AddMeal";
import AllMeal from "../../Pages/Dashborad/AllMeal/AllMeal";
import AllReviews from "../../Pages/Dashborad/AllReviews/AllReviews";
import ServeMeals from "../../Pages/Dashborad/ServeMeals/ServeMeals";
import AdminRoute from "./AdminRoute";
import UpdateMeal from "../../Pages/Dashborad/UpdateMeal/UpdateMeal";

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
        // loader: ({ params }) =>
        //   fetch(
        //     `https://hostel-management-server-steel.vercel.app/meals/${params.id}`
        //   ),
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
        path: "adminProfile",
        element: (
          <AdminRoute>
            <AdminProfile></AdminProfile>
          </AdminRoute>
        ),
      },
      {
        path: "manageUser",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
      {
        path: "addMeal",
        element: (
          <AdminRoute>
            <AddMeal></AddMeal>
          </AdminRoute>
        ),
      },
      {
        path: "allMeals",
        element: (
          <AdminRoute>
            <AllMeal></AllMeal>
          </AdminRoute>
        ),
      },
      {
        path: "allMeals/:id",
        element: (
          <AdminRoute>
            <UpdateMeal></UpdateMeal>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/meals/${params.id}`),
      },
      {
        path: "serveMeals",
        element: (
          <AdminRoute>
            <ServeMeals></ServeMeals>
          </AdminRoute>
        ),
      },
      {
        path: "upcomingMeals",
        element: <UpcomingMeals></UpcomingMeals>,
      },
      {
        path: "allReviews",
        element: (
          <AdminRoute>
            <AllReviews></AllReviews>
          </AdminRoute>
        ),
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
