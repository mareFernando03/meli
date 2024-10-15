import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    onSearch(query, category);
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Buscar productos..." 
      />
      <CategoryFilter onCategoryChange={setCategory} />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;