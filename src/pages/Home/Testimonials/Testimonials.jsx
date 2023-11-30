import { useEffect, useState } from "react";
import Headlines from "../../../components/Headlines";
import TestimonialTable from "./TestimonialTable";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://kids-nanny-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <>
      <section>
        <Headlines
          subHeadline={"Testimonials"}
          headline={"What our clients say about us!!"}
        ></Headlines>
        <div className="overflow-x-auto md:mx-32">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th>Parents</th>
                <th>Comments</th>
                <th>Ratings</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <TestimonialTable
                  key={review._id}
                  review={review}
                ></TestimonialTable>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
