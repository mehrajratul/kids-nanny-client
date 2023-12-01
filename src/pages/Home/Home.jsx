import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Testimonials from "./Testimonials/Testimonials";
import Nannies from "./Nannies/Nannies";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>{"Kid's Nanny || Home"}</title>
      </Helmet>
      <Banner></Banner>
      <Services></Services>
      <Testimonials></Testimonials>
      <Nannies></Nannies>
      <About></About>
    </div>
  );
};

export default Home;
