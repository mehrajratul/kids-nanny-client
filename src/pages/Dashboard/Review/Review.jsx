import Swal from "sweetalert2";

const Review = () => {
  const handleAddReview = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const details = form.details.value;

    const newReview = { name, rating, details };

    // console.log(newReview);

    fetch("https://kids-nanny-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your review has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="w-full px-10">
      <h1 className="text-center text-3xl font-bold mt-8">Leave a comment</h1>
      <form onSubmit={handleAddReview} className="mt-6 mb-6">
        <div className="form-control w-full">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-4 my-4">
          <div className="form-control w-full">
            <input
              type="number"
              placeholder="How much did you like our service"
              name="rating"
              max={5}
              min={1}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control">
          <textarea
            className="textarea textarea-bordered h-24"
            name="details"
            placeholder="Comment"
          ></textarea>
        </div>
        <input
          className="btn btn-secondary btn-sm mt-4"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default Review;
