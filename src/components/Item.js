const Item = ({ item }) => {
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return `${description.substring(0, maxLength)}...`;
    }
    return description;
  };

  return (
    <div className="flex flex-col w-full h-full p-4 transition-shadow duration-200 border rounded-lg hover:shadow-lg">
      {/* Fixed size for image placeholder */}
      <div className="flex items-center justify-center w-full h-48 mb-4 bg-gray-200">
        <span className="text-gray-500">Image placeholder</span>
      </div>
      <div className="flex-grow">
        <h2 className="mb-2 text-lg font-bold">{item.name}</h2>
        <p className="mb-2 text-sm text-gray-700">
          {truncateDescription(item.description, 100)}
        </p>
      </div>
      <div>
        {/* Uncomment if needed */}
        {/* <p className="mb-2 text-lg font-semibold">${item.price}</p> */}
        {/* <p className="text-sm text-gray-500">In stock: {item.stock}</p> */}
      </div>
    </div>
  );
};

export default Item;
