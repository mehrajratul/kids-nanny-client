import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useServices from "../../hooks/useServices";
import { FaTrashAlt } from "react-icons/fa";

const ManageServices = () => {
  const [services, , refetch] = useServices();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (service) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`services/${service._id}`).then((res) => {
          //console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${service.title} has been deleted.`,
              icon: "success",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
      }
    });
  };
  return (
    <div className="w-full p-8 my-8">
      <table className="table text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {services.map((service, index) => (
            <tr key={service._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="ml-4 w-12 h-12">
                      <img src={service.img} />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <div className="font-bold">{service.title}</div>
                </div>
              </td>
              <td>{service.category}</td>
              <td>${service.price}</td>
              <th>
                <button
                  onClick={() => handleDelete(service)}
                  className="btn btn-outline btn-md"
                >
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageServices;
