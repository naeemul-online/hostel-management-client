import Heading from "../../../components/Heading/Heading";
import MealCard from "../../../components/MealCard/MealCard";
import useMeals from "../../../hooks/useMeals";

const Meals = () => {
  const [meals] = useMeals();

  console.log(meals);
  return (
    <div>
      <Heading Heading="Meals"></Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <MealCard key={meal._id} meal={meal}></MealCard>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400"
        >
          Load more posts...
        </button>
      </div>
    </div>
  );
};

export default Meals;
