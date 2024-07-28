import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Catalog from './components/Catalog';
import ItemDetail from './components/ItemDetail';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch the inventory data (for simplicity, we use local data here)
    fetch('/inventory.json')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching inventory:', error));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto p-4 flex-grow">
        <Routes>
          <Route path="/" element={<Catalog items={items} />} />
          <Route path="/item/:id" element={<ItemDetail items={items} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
