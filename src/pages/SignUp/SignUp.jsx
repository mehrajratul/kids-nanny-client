//import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(name).then(() => {
          //console.log("user updated");
          const savedUser = { name: name, email: email };
          // fetch(`https://kids-nanny-server.vercel.app/users`, {
          //   method: "POST",
          //   headers: {
          //     "content-type": "application/json",
          //   },
          //   body: JSON.stringify(savedUser),
          // })
          //   .then((res) => res.json())
          axiosSecure
            .post("/users", savedUser)
            .then((response) => {
              if (response.data.insertedId) {
                form.reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "New user added",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            })
            .catch((error) => {
              console.error("Error creating user on the server:", error);
            });
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Helmet>
        <title>Kids Nanny || Signup</title>
      </Helmet>
      <section className="mt-14">
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold">Sign Up</h1>
        </div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name here"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-secondary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <span className="text-center mb-6 -mt-4">
                New To Kids?{" "}
                <Link className="text-blue-600 font-bold" to={"/login"}>
                  {" "}
                  Login
                </Link>
              </span>
            </div>
            <div className="text-center lg:text-left w-full p-10 hidden md:block lg:block">
              <img
                className=""
                src="https://i.ibb.co/rv56BLh/signup.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
