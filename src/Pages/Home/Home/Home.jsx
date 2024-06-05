import AboutUs from "../AboutUs/AboutUs";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import MealsByCategory from "../MealsByCategory/MealsByCategory";
import MembershipSection from "../MembershipSection/MembershipSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>      
      <MealsByCategory></MealsByCategory>
      <MembershipSection></MembershipSection>
      <AboutUs></AboutUs>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
