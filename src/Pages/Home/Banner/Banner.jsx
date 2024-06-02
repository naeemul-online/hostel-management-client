import banner from "../../../assets/banner/banner.jpg";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to Hostel Management System
          </h1>
          <p className="mb-5">
            Manage your hostel meals and reviews effortlessly
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search for meals or features..." />
            <button className="btn btn-primary -mr-6">Search</button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Banner;
