import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const TestimonialTable = ({ review }) => {
  const { name, details, rating } = review;
  return (
    <tr>
      <td>
        <div className="items-center">
          <div className="font-bold">{name}</div>
        </div>
      </td>
      <td>
        <span className="text-xs">{details}</span>
      </td>
      <td>
        <Rating style={{ maxWidth: 130 }} value={rating} readOnly></Rating>
      </td>
    </tr>
  );
};

export default TestimonialTable;
