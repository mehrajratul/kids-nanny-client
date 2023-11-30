import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_token = import.meta.env.VITE_IMG_token;
//console.log("img token",img_token);
const NewService = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const imgLink = `https://api.imgbb.com/1/upload?key=${img_token}`;
  const onSubmit = (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append(`image`, data.img[0]);

    fetch(imgLink, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { title, price, description } = data;
          const newService = {
            title,
            img: imgURL,
            price: parseFloat(price),
            //not sending category because category is not shown on the UI.
            category: "Child Care",
            description,
          };
          // console.log(newService);
          axiosSecure.post("/services", newService).then((response) => {
            const insertedId = response.data.insertedId;
            console.log(insertedId);
            if (insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "New Service added",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full px-10 my-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Service Name</span>
          </label>
          <input
            type="text"
            placeholder="Service Name"
            {...register("title", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-4 my-4">
          <div className="form-control w-2/3">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              placeholder="Enter Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Img</span>
              </label>
              <input
                type="file"
                {...register("img", { required: true })}
                className="file-input file-input-bordered w-full"
              />
            </div>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Description"
          ></textarea>
        </div>
        <input
          className="btn btn-secondary btn-sm mt-4"
          type="submit"
          value="Add Service"
        />
      </form>
    </div>
  );
};

export default NewService;
