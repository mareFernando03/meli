import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import { TextField, Button, Box } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    onSearch(query, category);
  };

  return (
    <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
      <TextField
        label="Buscar productos..."
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
      />
      <CategoryFilter onCategoryChange={setCategory} />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Buscar
      </Button>
    </Box>
  );
};

export default SearchBar;
