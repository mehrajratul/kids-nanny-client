import { loadStripe } from "@stripe/stripe-js";
import useBookings from "../../../hooks/useBookings";
import Headlines from "../../../components/Headlines";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

//pk = publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);
const Payment = () => {
  const [bookings] = useBookings();
  const total = bookings.reduce((sum, service) => sum + service.price, 0);
  const price = parseFloat(total.toFixed(2)) * 100;
  return (
    <div className="w-full">
      <Headlines subHeadline={"Enter your card here"}></Headlines>
      <Elements stripe={stripePromise}>
        <CheckOutForm bookings={bookings} price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
