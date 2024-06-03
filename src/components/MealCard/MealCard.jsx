import PropTypes from "prop-types"; // ES6
// src/components/MealCard.js
import React from 'react';

const MealCard = ({ meal }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={meal.image} alt={meal.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{meal.title}</h3>
        <p className="text-gray-600">{meal.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-900 font-bold">${meal.price}</span>
          <span className="text-yellow-500 font-bold">{meal.rating} ★</span>
        </div>
        <button className="mt-4 text-white bg-orange-500 hover:bg-orange-600 rounded-md px-3 py-1">Details</button>
      </div>
    </div>
  );
};

export default MealCard;

MealCard.propTypes = {
  meal: PropTypes.object,
};
