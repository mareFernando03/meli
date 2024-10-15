import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";

const AppRoutes = () => {
  const [products, setProducts] = useState([]);

  const handleSearch = (query, category) => {
    let url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
    if (category) {
      url += `&category=${category}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => setProducts(data.results));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <SearchBar onSearch={handleSearch} />
            <ProductList products={products} />
          </>
        } />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;