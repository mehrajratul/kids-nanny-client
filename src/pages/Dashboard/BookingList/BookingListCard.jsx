const BookingListCard = ({ booking }) => {
  if (booking.status) {
    booking.status;
  } else {
    booking.status = "Pending"
  }
  return (
    <section className="">
      <div className="card w-72 border-2">
        <div className="flex mt-6 ml-4 gap-4">
          <div className="">
            <figure>
              <img className="rounded-lg" src={booking.img} alt="ServiceImg" />
            </figure>
          </div>
          <div className="1/3"></div>
        </div>
        <div className="card-body">
          <div>
            <p>{booking.name}</p>
          </div>
          <div>
            <h2 className="card-title text-sm">Price : ${booking.price}</h2>
          </div>
          <h1>
            Status : {" "}<span className="text-orange-600 font-bold">{booking.status}</span>
            
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BookingListCard;
