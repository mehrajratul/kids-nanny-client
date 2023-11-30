import Headlines from "../../../components/Headlines";
import useBookings from "../../../hooks/useBookings";
import BookingListCard from "./BookingListCard";

const BookingList = () => {
  const [bookings] = useBookings();
  const total = bookings.reduce((sum, booking) => booking.price + sum, 0);
  const totalCost = parseFloat(total.toFixed(2));
  // console.log("bookings", bookings);
  return (
    <section className="">
      <div className="w-full">
        <Headlines
          subHeadline={"you can find all your bookings here"}
        ></Headlines>
      </div>
      <div className="flex gap-28">
        <div className="text-center text-2xl font-bold mt-8">
          <h1 className="">Your bookings : {bookings.length}</h1>
        </div>
        <div className="text-center text-2xl font-bold mt-8">
          <p>Total : ${totalCost}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-6 mb-8 mt-6">
        {bookings.map((booking) => (
          <BookingListCard
            key={booking._id}
            booking={booking}
          ></BookingListCard>
        ))}
      </div>
    </section>
  );
};

export default BookingList;
