const Headlines = ({ subHeadline, headline }) => {
  return (
    <div className="mx-auto text-center my-10 w-3/4 font-bold">
      <p className="text-[#FF4880] italic text-3xl">{subHeadline}</p>
      <h2 className="text-[#393D72] italic text-5xl py-2 uppercase">{headline}</h2>
    </div>
  );
};

export default Headlines;
