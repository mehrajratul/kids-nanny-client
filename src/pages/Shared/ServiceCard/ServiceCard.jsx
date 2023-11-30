import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useBookings from "../../../hooks/useBookings";
import Swal from "sweetalert2";
const ServiceCard = ({ service }) => {
  // console.log("service", service);
  const { _id, title, img, price, description, category } = service;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useBookings();

  const handleBooking = (servicePackage) => {
    console.log("service", servicePackage);
    if (user && user.email) {
      const bookingPackage = {
        bookingPackageId: _id,
        name: title,
        img,
        price,
        category,
        email: user.email,
        user: user.displayName,
      };
      axiosSecure.post("/bookings", bookingPackage).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${title} added to your Bookings`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "You must login to book this service",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#FF15D3",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="ServiceImg"
          className="rounded-xl w-3/4 hover:w-4/5"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}!</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button onClick={handleBooking} className="btn btn-secondary">
            Book Now ${price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
