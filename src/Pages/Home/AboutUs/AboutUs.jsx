import aboutUs from "../../../assets/banner/about-us.jpg"
import Heading from "../../../components/Heading/Heading";

const AboutUs = () => {
    return (
        <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <Heading Heading='About Us'></Heading>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2">
              <img src={aboutUs} alt="About Us" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg text-gray-700">
                Our Hostel Management System aims to provide students with a seamless experience in managing their hostel life. From booking meals to reviewing services, our platform is designed to meet all your needs efficiently.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                Our team is dedicated to ensuring that you have a comfortable and convenient stay at your hostel. Join us and explore the best way to manage your hostel life.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AboutUs;