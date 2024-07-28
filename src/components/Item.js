import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => (
  <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-200 w-full h-80 flex flex-col">
    <div className="w-full h-48 bg-gray-200 mb-4 flex items-center justify-center">
      <span className="text-gray-500">Image placeholder</span>
    </div>
    <div className="flex-grow">
      <h2 className="text-lg font-bold mb-2">{item.name}</h2>
      <p className="text-sm text-gray-700 mb-2">{item.description}</p>
    </div>
    <div>
      <p className="text-lg font-semibold mb-2">${item.price}</p>
      <p className="text-sm text-gray-500">In stock: {item.stock}</p>
    </div>
  </div>
);

export default Item;
