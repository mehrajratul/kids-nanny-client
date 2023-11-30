import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const BookingsTable = ({ bookings }) => {
  //console.log("all booking", bookings);

  const axiosSecure = useAxiosSecure();
  const [selectedStatus, setSelectedStatus] = useState("Status");
  const [dropdown, setDropdown] = useState(false);
  const statusOptions = ["Confirmed", "On Going", "Shipped"];

  useEffect(() => {
    if (bookings.status) {
      setSelectedStatus(bookings.status);
    }
  }, [bookings]);

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    closeDropdown();
    axiosSecure
      .patch(`/allbookings/status/${bookings._id}`, { status })
      .then((data) => {
        //console.log(data);
        if (data.modifiedCount) {
          alert("status updated");
        }
      });
  };

  const openDropdown = () => {
    setDropdown(true);
  };
  const closeDropdown = () => {
    setDropdown(false);
  };

  return (
    <tr className="text-center">
      <td>
        <div className="gap-3">
          <div>
            <div className="font-bold">{bookings.user}</div>
          </div>
        </div>
      </td>
      <td className="">{bookings.email}</td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={bookings.img} />
          </div>
        </div>
      </td>
      <th>${bookings.price}</th>
      <th
        className="dropdown dropdown-hover"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
        <h1 tabIndex={0} role="" className="">
          {selectedStatus}
        </h1>
        {dropdown && (
          <ul className="dropdown-content z-[1] menu bg-base-100 w-52">
            {statusOptions.map((status, index) => (
              <li key={index} onClick={() => handleStatusChange(status)}>
                <p>{status}</p>
              </li>
            ))}
          </ul>
        )}
      </th>
    </tr>
  );
};

export default BookingsTable;
