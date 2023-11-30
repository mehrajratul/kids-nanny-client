import { useEffect, useState } from "react";
import BookingsTable from "./BookingsTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import Headlines from "../../../components/Headlines";

const AllBookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const fetchAllBookings = async () => {
      try {
        const res = await axiosSecure.get("/allbookings");
        //console.log(res.data);
        setAllBookings(res.data);
      } catch (err) {
        console.error("error loading all bookings", err);
      }
    };
    fetchAllBookings();
  }, [axiosSecure]);
  return (
    <>
      <Helmet>
        <title>Kids Nanny || All Bookings</title>
      </Helmet>
      <div className="w-2/3 my-8">
        <Headlines subHeadline={"All User Bookings"}></Headlines>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Service</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allBookings.map((bookings) => (
              <BookingsTable
                key={bookings._id}
                bookings={bookings}
              ></BookingsTable>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllBookings;
