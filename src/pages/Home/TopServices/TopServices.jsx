import { NavLink } from "react-router-dom";
import Headlines from "../../../components/Headlines";
import useServices from "../../../hooks/useServices";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";

const TopServices = () => {
  const [services] = useServices();
  const topServices = services
    .filter((service) => service.category === "Enrichment")
    .slice(0, 3);
  // console.log(topServices);
  return (
    <section>
      <Headlines subHeadline={"Our Top Services"}></Headlines>
      <div className="grid lg:md:grid-cols-3 gap-4 ml-5">
        {topServices.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex flex-col items-center mt-6">
        <button className="btn btn-secondary">
          <NavLink to={"services"}>All Services</NavLink>
        </button>
      </div>
    </section>
  );
};

export default TopServices;
