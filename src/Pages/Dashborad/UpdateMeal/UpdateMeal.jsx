import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateMeal = () => {
  const { user } = useAuth();
  const {
    _id,
    category,
    price,
    title,
    description,
    ingredients,
    reviews,
    rating,
    postTime,
    likes,
    image,
  } = useLoaderData();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
    console.log(errors);
  const onSubmit = async (data) => {
    console.log("clicked");
    console.log(data);
    // image upload nad then get url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const mealsItem = {
        name: user?.displayName,
        email: user?.email,
        category: data.category,
        price: parseFloat(data.price),
        title: data.title,
        description: data.description,
        ingredients: data.ingredients,
        reviews: data.reviews,
        rating: data.rating,
        postTime: data.postTime,
        likes: data.likes,
        image: res.data.data.display_url,
      };
      console.log(mealsItem);
      const menuRes = await axiosSecure.patch(`/meals/:${_id}`, mealsItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show popup

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} has been updated`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
    console.log(res.data);
  };
  return (
    <div className="container px-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">User Name</span>
          </div>
          <input
            disabled
            type="text"
            defaultValue={user?.displayName}
            className="input input-bordered w-full "
          />
        </label>
        {/* Admin Email */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Admin Email</span>
          </div>
          <input
            disabled
            type="text"
            defaultValue={user?.email}
            className="input input-bordered w-full "
          />
        </label>

        {/* Title */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Meal Title</span>
          </div>
          <input
            type="text"
            defaultValue={title}
            className="input input-bordered w-full "
            {...register("title", { required: true })}
          />
        </label>

        {/* Ingredients */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Ingredients</span>
          </div>
          <input
            type="text"
            defaultValue={ingredients}
            className="input input-bordered w-full "
            {...register("ingredients", { required: true })}
          />
        </label>

        {/* category  */}

        <div className="lg:flex flex-none justify-center items-center gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Select a category</span>
            </div>
            <select
              defaultValue={category}
              className="select select-bordered w-full"
              {...register("category", { required: true })}
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
          </label>

          {/* Price */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="text"
              defaultValue={price}
              className="input input-bordered w-full "
              {...register("price", { required: true })}
            />
          </label>

          {/* Rating */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Rating</span>
            </div>
            <input
              type="text"
              defaultValue={rating}
              placeholder="Rating"
              className="input input-bordered w-full "
              {...register("rating", { required: true })}
            />
          </label>
          {/* Post Time */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Post Time</span>
            </div>
            <input
              type="date"
              defaultValue={postTime}
              placeholder="Post Time"
              className="input input-bordered w-full "
              {...register("postTime", { required: true })}
            />
          </label>
          {/* Likes */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Likes</span>
            </div>
            <input
              type="number"
              defaultValue={likes}
              className="input input-bordered w-full "
              {...register("likes", { required: true })}
            />
          </label>
        </div>
        {/* Reviews */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Reviews</span>
          </div>
          <input
            type="text"
            defaultValue={reviews}
            className="input input-bordered w-full "
            {...register("reviews", { required: true })}
          />
        </label>
        {/* description */}
        <label className="form-control">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Description"
            defaultValue={description}
            {...register("description", { required: true })}
          ></textarea>
        </label>

        <div className="from-control w-full my-6 ">
          <input
            type="file"
            className="file-input w-full max-w-xs "
            {...register("image", { required: true })}
          />
        </div>

        <input
          type="submit"
          value="Update"
          defaultValue={image}
          className="btn bg-orange-500 hover:bg-orange-600"
        ></input>
      </form>
    </div>
  );
};

export default UpdateMeal;
