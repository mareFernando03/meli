import React, { useState, useEffect } from 'react';

const CategoryFilter = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <select onChange={(e) => onCategoryChange(e.target.value)}>
      <option value="">Todas las categorías</option>
      {categories.map(category => (
        <option key={category.id} value={category.id}>{category.name}</option>
      ))}
    </select>
  );
};

export default CategoryFilter;