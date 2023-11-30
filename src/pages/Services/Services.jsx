import Headlines from "../../components/Headlines";
import useServices from "../../hooks/useServices";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";

const Services = () => {
  const [services] = useServices();
  return (
      <section className="mb-10">
          <Headlines
              subHeadline={"Our Services"}
              headline={"Here You can browse all our services"}
          ></Headlines>
      <div className="grid lg:md:grid-cols-3 gap-6 ml-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
