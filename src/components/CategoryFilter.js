import React, { useState, useEffect } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const CategoryFilter = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel>Categoría</InputLabel>
      <Select
        label="Categoría"
        onChange={(e) => onCategoryChange(e.target.value)}
        defaultValue=""
      >
        <MenuItem value="">Todas las categorías</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategoryFilter;
