import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const NanniesSlide = ({ nanny }) => {
  //console.log(nanny);
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-20 mx-5 text-center">
      <figure>
        <img className="" src={nanny.img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{nanny.name}</h2>
        <p>{nanny.profession}</p>
        <div className="justify-center flex gap-4 mt-4">
          <FaFacebookSquare /> <FaTwitter /> <FaInstagramSquare />
        </div>
      </div>
    </div>
  );
};

export default NanniesSlide;
