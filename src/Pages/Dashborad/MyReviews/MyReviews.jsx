import Swal from "sweetalert2";
import useReviews from "../../../hooks/useReviews";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyReviews = () => {
  const [reviews, refetch] = useReviews();
  const axiosSecure = useAxiosSecure()
//   console.log(reviews);
  const handleDeleteReview = (id) => {
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
        axiosSecure.delete(`reviews/${id}`)
        .then(res => {
            res
            Swal.fire({
                title: "Deleted!",
                text: `Your review has been deleted.`,
                icon: "success",
              });
            refetch()
        })
      }
    });
  };
  return (
    <div>
      <h2>My Reviews</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Meal Title</th>
              <th>Likes</th>
              <th>Review</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>View Meal</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {reviews.map((review, index) => (
              <tr key={review._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{review.mealTitle}</div>
                    </div>
                  </div>
                </td>
                <td>liked</td>
                <td>{review.review}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Edit</button>
                </th>
                <th >
                  <button
                    onClick={()=>handleDeleteReview(review._id)}
                    className="btn btn-ghost bg-red-400 btn-xs"
                  >
                    Delete
                  </button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">View Meal</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
