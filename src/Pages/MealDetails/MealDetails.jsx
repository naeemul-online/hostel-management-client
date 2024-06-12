import { useParams } from "react-router-dom";
import useMeals from "../../hooks/useMeals";
import MealDetailCard from "../../components/MealDetailCard/MealDetailCard";

const MealDetails = () => {
  const [meals] = useMeals();
  const { id } = useParams();
  // console.log("card id is", id);
  //   console.log(meals);

  const mealById = meals.filter((meal) => meal._id == id);

  return (
    <div>
      {mealById.map((meal) => (
        <MealDetailCard key={meal._id} meal={meal}></MealDetailCard>
      ))}
    </div>
  );
};

export default MealDetails;
