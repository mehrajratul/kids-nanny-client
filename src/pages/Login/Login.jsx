import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  console.log("from", from);

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const result = await signIn(email, password);
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="mt-14">
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold">Log in</h1>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-secondary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <span className="text-center mb-6 -mt-4">
              New To Kids?{" "}
              <Link className="text-blue-600 font-bold" to={"/signup"}>
                {" "}
                Sign up
              </Link>
            </span>
          </div>
          <div className="text-center lg:text-left w-full p-10 hidden md:block lg:block">
            <img className="" src="https://i.ibb.co/Y0g9hvb/login.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
