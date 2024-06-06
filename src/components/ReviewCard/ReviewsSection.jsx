import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "./ReviewCard";
import Heading from "../Heading/Heading";

const ReviewsSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [reviews, refetch] = useReviews();

  const handleReviewBtn = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    if (user && user.email) {
      const reviewMeal = {
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
            title: `Wow! your reviews saved`,
            showConfirmButton: false,
            timer: 1500,
          });
          
          refetch();
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
    <div className="mt-8">
         <Heading Heading="Review" />       
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
      <h2 className="text-center mt-4">Students Reviews({reviews.length})</h2>
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
