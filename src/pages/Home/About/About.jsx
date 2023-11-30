import Headlines from "../../../components/Headlines";
import img from "../../../assets/about-us.jpg";

const About = () => {
  return (
    <section className="">
      <div className="">
        <Headlines
          subHeadline={"About Us"}
          headline={"Welcome To Kid's Nanny."}
        ></Headlines>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img}
            className="max-w-md rounded-lg shadow-2xl border-8 border-gray-50"
          />
          <div>
            <p className="py-4">
              {
                "Welcome to Kids Nanny, your child's home away from home in dhaka?At Kids Nanny, we are dedicated to providing a secure, loving environment where every child's unique journey is celebrated. Our passionate caregivers, holistic learning approach, and unwavering commitment to safety create a warm and inspiring space for your child to explore, learn, and grow. Join the Kids Nanny family, where each day is an adventure, and we nurture the individuality of every child. Discover why Kids Nanny is more thanjust a daycare – it's a place where curiosity thrives, creativity flourishes, and a strong foundation for future success is built."
              }
            </p>
            <h1 className="text-[#393D72] text-3xl font-bold">
              Giving Love For Child
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
