import Swal from "sweetalert2";
import Heading from "../../../components/Heading/Heading";
import useMeals from "../../../hooks/useMeals";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const AllMeal = () => {
  const [meals, refetch] = useMeals();
  // console.log(meals);
  const axiosSecure = useAxiosSecure();

  // const handleMealUpdate = (id) => {
  //   console.log("update id", id);
  // };

  const handleDeleteMeal = (id) => {
    console.log("delete id", id);
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
        axiosSecure.delete(`meals/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deleteCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <Heading Heading="All Meals"></Heading>
      <h2>Total Meals: {meals.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Title</th>
              <th>Likes</th>
              <th>Reviews</th>
              <th>Distributor Name</th>
              <th>Update</th>
              <th>Delete</th>
              <th>View Meal</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {meals.map((meal, index) => (
              <tr key={meal._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="font-bold">{meal.title}</div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="">{meal.likes}</div>
                  </div>
                </td>
                <td>{meal.reviews}</td>
                <td>
                  <td>{meal.name}</td>
                </td>
                <td>
                  <Link
                    to={`${meal._id}`}
                    className="btn btn-ghost bg-green-400 btn-xs"
                  >
                    Update
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteMeal(meal._id)}
                    className="btn btn-ghost bg-red-600 btn-xs"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost bg-red-400 btn-xs">
                    View Meal
                  </button>
                </td>
                <td>{meal.distributor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMeal;
