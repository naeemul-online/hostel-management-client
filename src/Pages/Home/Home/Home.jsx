import AboutUs from "../AboutUs/AboutUs";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import MealsByCategory from "../MealsByCategory/MealsByCategory";

const Home = () => {
  const sampleMeals = [
    // Breakfast Meals
    {
      id: 1,
      title: "Pancakes",
      category: "Breakfast",
      image: "https://i.ibb.co/Y2XCF6H/Pancakes.jpg",
      description: "Delicious pancakes with syrup",
      price: 5.99,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Omelette",
      category: "Breakfast",
      image: "https://i.ibb.co/tJPvdkM/Omelette.jpg",
      description: "Fluffy omelette with cheese and vegetables",
      price: 6.99,
      rating: 4.0,
    },
    {
      id: 3,
      title: "French Toast",
      category: "Breakfast",
      image: "https://i.ibb.co/cCMmnwn/French-Toast.jpg",
      description: "Golden French toast with a hint of cinnamon",
      price: 4.99,
      rating: 4.2,
    },
    // Lunch Meals
    {
      id: 4,
      title: "Caesar Salad",
      category: "Lunch",
      image: "https://i.ibb.co/r01f5Kx/Caesar-Salad.jpg",
      description: "Crisp romaine lettuce with Caesar dressing",
      price: 7.99,
      rating: 4.3,
    },
    {
      id: 5,
      title: "Grilled Chicken Sandwich",
      category: "Lunch",
      image: "https://i.ibb.co/pXzxQH1/Grilled-Chicken-Sandwich.jpg",
      description: "Juicy grilled chicken sandwich with lettuce and tomato",
      price: 8.99,
      rating: 4.6,
    },
    {
      id: 6,
      title: "Veggie Wrap",
      category: "Lunch",
      image: "https://i.ibb.co/pQm0d1D/Veggie-Wrap.jpg",
      description: "Fresh veggie wrap with hummus and sprouts",
      price: 6.49,
      rating: 4.1,
    },
    // Dinner Meals
    {
      id: 7,
      title: "Spaghetti Bolognese",
      category: "Dinner",
      image: "https://i.ibb.co/s6Xq2MF/Spaghetti-Bolognese.jpg",
      description: "Classic spaghetti with rich Bolognese sauce",
      price: 11.99,
      rating: 4.7,
    },
    {
      id: 8,
      title: "Grilled Salmon",
      category: "Dinner",
      image: "https://i.ibb.co/7jfmz09/Grilled-Salmon.jpg",
      description: "Tender grilled salmon with lemon butter",
      price: 14.99,
      rating: 4.8,
    },
    {
      id: 9,
      title: "Beef Tacos",
      category: "Dinner",
      image: "https://i.ibb.co/3WqqxsT/Beef-Tacos.jpg",
      description: "Spicy beef tacos with salsa and guacamole",
      price: 9.99,
      rating: 4.4,
    },
  ];
  return (
    <div>
      <Banner></Banner>
      <MealsByCategory meals={sampleMeals}></MealsByCategory>
      <AboutUs></AboutUs>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
