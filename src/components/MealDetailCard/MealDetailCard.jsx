import PropTypes from "prop-types"; // ES6
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Heading from "../Heading/Heading";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ReviewCard from "../ReviewCard/ReviewCard";
import useLikes from "../../hooks/useLikes";

const MealDetailCard = ({ meal }) => {
  const { user } = useAuth();
  const [like, refetch] = useLikes();
  // console.log(like.length)
  const { title, image, description } = meal;
  const [likeCount, setLikeCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const handleLikeBtn = () => {
    if (user && user.email) {
      const likedMeal = {
        mealTitle: title,
        mealImg: image,
        userEmail: user.email,
        userName: user.displayName,
        userImg: user.photoURL,
        likeCount: likeCount,
      };
      console.log(likedMeal);

      axiosSecure
        .post("/likes", likedMeal)
        .then((res) => {
          console.log(res.data);
          setLikeCount(likeCount + 1);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Wow! You liked ${title}`,
              showConfirmButton: false,
              timer: 1500,
            });
            // refetch the card
            refetch();
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            Swal.fire({
              title: `Already! You liked ${title}`,
              text: "Thank you",
              icon: "warning",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              title: "Error",
              text: "Something went wrong",
              icon: "error",
              confirmButtonColor: "#d33",
            });
          }
        });
    } else {
      Swal.fire({
        title: "You are not logged in?",
        text: "Please log in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  const handleReviewBtn = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    if (user && user.email) {
      const reviewMeal = {
        mealTitle: title,
        mealImg: image,
        userEmail: user.email,
        userName: user.displayName,
        userImg: user.photoURL,
        review,
      };
      console.log(reviewMeal);
      axiosSecure.post("/reviews", reviewMeal).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Wow! your ${title} reviews saved`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in?",
        text: "Please log in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <section className="">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12"
        >
          <img
            src={image}
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
            <p>{description}</p>
            <button
              onClick={handleLikeBtn}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
            >
              Like <span>{like.length}</span>
            </button>
            <button className="mt-4 ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Request Meal
            </button>
            <div className="mt-8">
              <form onSubmit={handleReviewBtn} className="mt-4">
                <textarea
                  name="review"
                  className="w-full p-2 border rounded"
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
        <Heading Heading="Review" />
        {/* Review card */}
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Reviews will gose here */}
          <ReviewCard></ReviewCard>
        </div>
      </div>
    </section>
  );
};

MealDetailCard.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default MealDetailCard;
