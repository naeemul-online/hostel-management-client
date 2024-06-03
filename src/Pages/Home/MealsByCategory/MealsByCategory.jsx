import PropTypes from "prop-types"; // ES6

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MealCard from "../../../components/MealCard/MealCard";

const MealsByCategory = ({ meals }) => {
  const categories = ["Breakfast", "Lunch", "Dinner", "All Meals"];

  const filterMealsByCategory = (category) => {
    if (category === "All Meals") {
      return meals;
    }
    return meals.filter((meal) => meal.category === category);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Meals by Category</h2>
      <Tabs>
        <TabList className="flex justify-center mb-6">
          {categories.map((category, index) => (
            <Tab key={index} className="px-4 py-2 cursor-pointer border-b">
              {category}
            </Tab>
          ))}
        </TabList>

        {categories.map((category, index) => (
          <TabPanel key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filterMealsByCategory(category).map((meal) => (
                // <MealCard key={meal.id} meal={meal} />
                <MealCard key={meal.id} meal={meal}></MealCard>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default MealsByCategory;

MealsByCategory.propTypes = {
  meals: PropTypes.array,
};
