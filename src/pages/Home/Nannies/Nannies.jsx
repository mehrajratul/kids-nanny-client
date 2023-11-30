// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useState } from "react";
import { useEffect } from "react";
import NanniesSlide from "./NanniesSlide";
import Headlines from "../../../components/Headlines";

const Nannies = () => {
  const [nannies, setNannies] = useState([]);
  useEffect(() => {
    fetch("https://kids-nanny-server.vercel.app/nannies")
      .then((res) => res.json())
      .then((data) => {
        setNannies(data);
      });
  }, []);
  // console.log(nannies);
  return (
    <>
      <Headlines
        subHeadline={"Meet our"}
        headline={"Profetional Nannies"}
      ></Headlines>
      <div className="hidden md:block lg:block">
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="">
            {nannies.map((nanny) => (
              <SwiperSlide key={nanny._id}>
                <NanniesSlide nanny={nanny}></NanniesSlide>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <div className="md:hidden lg:hidden ml-6">
        <Swiper
          spaceBetween={100}
          slidesPerView={1.2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="">
            {nannies.map((nanny) => (
              <SwiperSlide key={nanny._id}>
                <NanniesSlide nanny={nanny}></NanniesSlide>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Nannies;
