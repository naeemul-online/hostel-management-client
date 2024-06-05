import useAuth from "../../hooks/useAuth";
import Heading from "../Heading/Heading";
import { useNavigate } from "react-router-dom";

const MealDetailCard = ({ meal }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLikeBtn = () => {
    if (user && user.email) {
        // TODO:
    } else {
      navigate("/login");
    }
  };
  return (
    <section key={meal.id} className="">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12"
        >
          <img
            src={meal.image}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {meal.title}
            </h3>
            <span className="text-xs text-gray-400">
              Post Time: February 19, 2021
            </span>
            <p>{meal.description}</p>
            <button
              onClick={handleLikeBtn}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2  rounded"
            >
              Like <span>0</span>
            </button>

            <button className="mt-4 ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Request Meal
            </button>

            <div className="mt-8">
              <form className="mt-4">
                <textarea
                  className="w-full ro p-2 border rounded"
                  placeholder="Write your review here"
                ></textarea>
                <button
                  type="submit"
                  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </a>

        <Heading Heading="Review"></Heading>

        {/* Review card */}

        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://source.unsplash.com/100x100/?portrait"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Leroy Jenkins</h4>
                  <span className="text-xs text-gray-400">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-gray-400">
              <p>
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
                finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
                mauris cursus venenatis. Maecenas gravida urna vitae accumsan
                feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealDetailCard;
