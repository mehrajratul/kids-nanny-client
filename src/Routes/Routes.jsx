import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Book from "../pages/Dashboard/Book/Book";
import BookingList from "../pages/Dashboard/BookingList/BookingList";
import Review from "../pages/Dashboard/Review/Review";
import AllBookings from "../pages/Dashboard/AllBookings/AllBookings";
import NewService from "../pages/Dashboard/NewService/NewService";
import ManageServices from "../Layout/ManageServices/ManageServices";
import MakeAdmin from "../pages/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoutes from "./AdminRoutes";
import Payment from "../pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "book",
        element: <Book></Book>,
      },
      {
        path: "bookingList",
        element: <BookingList></BookingList>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "review",
        element: <Review></Review>,
      },
      {
        path: "allbookings",
        element: (
          <AdminRoutes>
            <AllBookings></AllBookings>
          </AdminRoutes>
        ),
      },
      {
        path: "addservice",
        element: (
          <AdminRoutes>
            <NewService></NewService>
          </AdminRoutes>
        ),
      },
      {
        path: "manage",
        element: (
          <AdminRoutes>
            <ManageServices></ManageServices>
          </AdminRoutes>
        ),
      },
      {
        path: "addNewAdmin",
        element: (
          <AdminRoutes>
            <MakeAdmin />
          </AdminRoutes>
        ),
      },
    ],
  },
]);
