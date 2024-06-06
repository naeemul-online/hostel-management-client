import PropTypes from "prop-types"; // ES6
const ReviewCard = ({ review }) => {
//   console.log(review);
  return (
    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md ">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={review.userImg}
              className="object-cover w-12 h-12 rounded-full bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">{review.userName}</h4>
            <span className="text-xs text-gray-400">2 days ago</span>
          </div>       
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm text-gray-400">{review.review}</div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.object,
};

export default ReviewCard;
