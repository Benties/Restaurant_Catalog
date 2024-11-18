import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Catalog from './components/Catalog';
import ItemDetail from './components/ItemDetail';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // eager load first apge then cache
    // use cache when avaliable
    // lazy load the rest
    // Fetch the inventory data (for simplicity, we use local data here)
    fetch(process.env.PUBLIC_URL + '/inventory.json')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching inventory:', error));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container flex-grow p-4 mx-auto">
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
