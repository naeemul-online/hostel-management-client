import Heading from "../../../components/Heading/Heading";

const Testimonials = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Heading Heading="What Our Students Say"></Heading>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              The Hostel Management System has made my life so much easier. I
              can easily book meals and manage my schedule. Highly recommended!
            </p>
            <p className="font-bold text-orange-500">- John Doe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              A fantastic platform that helps me keep track of my meals and
              gives me the convenience I need as a student.
            </p>
            <p className="font-bold text-orange-500">- Jane Smith</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              Great user experience and very intuitive. Its made hostel life
              much more manageable.
            </p>
            <p className="font-bold text-orange-500">- Mark Wilson</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
