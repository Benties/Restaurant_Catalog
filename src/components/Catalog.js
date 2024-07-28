import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import Pagination from './Pagination';

const Catalog = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default number of items per page

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(16); // Large screens
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(12); // Medium screens
      } else {
        setItemsPerPage(8); // Small screens
      }
    };

    // Set initial items per page based on current window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle search input changes
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  // Filter items based on the search query
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for an item..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentItems.map(item => (
          <Link key={item.id} to={`/item/${item.id}`}>
            <Item item={item} />
          </Link>
        ))}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredItems.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Catalog;
