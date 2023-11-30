import { Link } from "react-router-dom";
import img from "../../../assets/banner-img.jpg";
import { IoReturnDownForward } from "react-icons/io5";
const Banner = () => {
  return (
    <div className="w-full relative">
      <img className="w-full h-[500px]" src={img} alt="" />
      <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#2b2929b6] to-[#15151500]">
        <div className="text-white space-y-7 pl-28">
          <h1 className="text-6xl font-bold">
            Best Education
            <br /> Partner For Child
          </h1>
          <p>
            Must explain to you how all this mistaken idea of denouncing <br />
            pleasure and praising pain was born and I will give you complete
          </p>
          <button className="btn btn-secondary btn-lg">
            <Link to={"/services"}>
              Get Started
              <br />
              <IoReturnDownForward />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
