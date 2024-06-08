import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const Login = () => {
  //   const [disable, setDisable] = useState(true);
  // const { signIn } = useContext(AuthContext);
  const { signIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log("location of state", location.state);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    signIn(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        toast.success("login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);

        // ..
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Log In | Hostel Management</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Our Hostel Management System aims to provide students with a
            seamless experience in managing their hostel life. From booking
            meals to reviewing services, our platform is designed to meet all
            your needs efficiently.
          </p>
        </div>
        <div className="card shrink-0 w-full lg:1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="name"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-600">Email is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="name"
                type="password"
                placeholder="Password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-600">Password is required</p>
              )}
            </div>

            <div className="form-control mt-6">
              {/* TODO: apply enable */}
              <input
                type="submit"
                value="login"
                disabled={false}
                className="btn btn-primary"
              />
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            <p className="px-3 text-sm dark:text-gray-600">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          </div>
          <div>
            <SocialLogin></SocialLogin>
          </div>
          <div className="pb-4">
            <p className="text-xs text-center sm:px-6 dark:text-gray-600">
              Dont have an account?
              <Link
                to="/signUp"
                rel="noopener noreferrer"
                className="underline dark:text-gray-800 text-primary"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
