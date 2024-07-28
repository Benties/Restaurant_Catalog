import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ items }) => {
  const { id } = useParams();
  const item = items.find(item => item.id.toString() === id);

  if (!item) {
    return <div className="text-center text-red-500">Item not found</div>;
  }

  return (
    <>
    <div className="container mx-auto p-4 flex flex-col md:flex-row md:space-x-8">
      <div className="md:w-1/2 mb-4 md:mb-0">
        {/* Placeholder for item image */}
        <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Image placeholder</span>
        </div>
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-2">{item.name}</h2>
        <p className="text-lg mb-4">{item.description}</p>
        <p className="text-xl font-semibold mb-2">${item.price}</p>
        <p className="text-md text-gray-600 mb-4">In stock: {item.stock}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="container mx-auto p-4 mt-8 border-t border-gray-300">
      <h3 className="text-2xl font-bold mb-4">Contact Us for More Information</h3>
      <p className="mb-4">For more details or to place an order, please reach out to us directly:</p>
      <p className="mb-4">
        <strong>Email:</strong> ericnfw888@gmail.com
      </p>
      <p className="mb-4">
        <strong>Phone:</strong> (917)-723-2810
      </p>
      <p className="mb-4">
        <strong>Address:</strong> 172 Stewart Ave, Brooklyn, NY 11237
      </p>
      <h4 className="text-xl font-semibold mb-2">Contact Form</h4>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
    </>
  );
};

export default ItemDetail;
