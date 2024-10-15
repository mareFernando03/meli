import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div>Cargando...</div>;

  return (
    <Container>
      <img
        src={product.pictures[0].url}
        alt={product.title}
        style={{ width: "100%", maxHeight: "500px" }}
      />
      <Typography variant="h4" gutterBottom>
        {product.title}
      </Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        ${product.price}
      </Typography>
      <Typography variant="body1" paragraph>
        {product.description}
      </Typography>
      <Button component={Link} to="/home" variant="contained" color="primary">
        Volver a la búsqueda
      </Button>
    </Container>
  );
};

export default ProductDetail;
