import { Link, Outlet } from "react-router-dom";
import DashFooter from "../pages/Dashboard/DashFooter/DashFooter";
import { IoBagCheckOutline, IoHomeSharp } from "react-icons/io5";
import useAdmin from "../hooks/useAdmin";
import { FaCartArrowDown, FaShoppingCart } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import {
  MdBookmarkBorder,
  MdManageHistory,
  MdRateReview,
} from "react-icons/md";
const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col-3 items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-secondary btn-sm drawer-button lg:hidden"
          >
            {">"}
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-6 w-80 min-h-full bg-purple-200 ">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <Link to={"/dashboard/allbookings"}>
                    <FaCartArrowDown />
                    All Bookings
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard/addservice"}>
                    <IoIosAddCircle />
                    Add new service
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard/manage"}>
                    <MdManageHistory />
                    Manage Services
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard/addNewAdmin"}>
                    <IoPersonAdd />
                    Make Admin
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/dashboard/book"}>
                    <MdBookmarkBorder />
                    Book
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard/bookinglist"}>
                    <FaShoppingCart />
                    Booking List
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard/payment"}>
                    <IoBagCheckOutline />
                    Check Out
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard/review"}>
                    <MdRateReview />
                    Review
                  </Link>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <Link to={"/"}>
                <IoHomeSharp />
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <DashFooter></DashFooter>
    </>
  );
};

export default Dashboard;
