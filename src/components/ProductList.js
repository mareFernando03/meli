import React, { useState } from "react";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { Grid, Container, Box } from "@mui/material";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const handleSearch = (query, category) => {
    let url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
    if (category) {
      url += `&category=${category}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data.results));
  };

  return (
    <Container>
      <Box sx={{ marginTop: 5 }}>
        <SearchBar onSearch={handleSearch} />
        <Grid container spacing={3} sx={{ marginTop: 3 }}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductList;
