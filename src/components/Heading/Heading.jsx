import PropTypes from "prop-types"; // ES6

const Heading = ({ Heading }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">{Heading}</h2>
    </div>
  );
};
Heading.propTypes = {
  Heading: PropTypes.string,
};

export default Heading;
