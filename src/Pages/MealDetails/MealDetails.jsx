import { useParams } from "react-router-dom";
import useMeals from "../../hooks/useMeals";
import MealDetailCard from "../../components/MealDetailCard/MealDetailCard";

const MealDetails = () => {
  const [meals] = useMeals();
  const { id } = useParams();
  //   console.log("card id is", id);
  //   console.log(meals);

  const mealById = meals.filter((meal) => meal.id == id);

  return (
    <div>
      {mealById.map((meal) => (
        <MealDetailCard key={meal.id} meal={meal}></MealDetailCard>
      ))}
    </div>
  );
};

export default MealDetails;
