import { Link } from "react-router-dom";
import logo from "/logo.png";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth()
  // console.log(user);
  const handleLogout = () => {
    logOut();
    toast.success("Log Out Successfully");
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/meals">Meals</Link>
      </li>
      <li>
        <Link to="/upcomingMeals">Upcoming Meals</Link>
      </li>
      <li>
        <Link to="/private">Private Routes</Link>
      </li>
      <button className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="badge badge-xs  bg-orange-500 hover:bg-orange-600 indicator-item"></span>
        </div>
      </button>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>

        <Link to="/" className="flex items-center justify-center ">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={logo} />
          </div>
          <span className="md:text-xl hidden md:block md:font-bold">
            Hostel Management
          </span>
        </Link>
      </div>
      <div className="navbar-center justify-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : `https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg`
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <p>{user?.displayName ? user.displayName : "User"}</p>
              </li>
              <li>
                <Link to='dashboard'>Dashboard</Link>
              </li>
              <li className="btn btn-primary  bg-orange-500 hover:bg-orange-600  mt-1" onClick={handleLogout}>
                Logout
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="px-1">
            <button className="btn bg-orange-500 hover:bg-orange-600">Join Us</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
