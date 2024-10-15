import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        image={product.thumbnail}
        alt={product.title}
        sx={{ height: 200, objectFit: "contain", backgroundColor: "#f5f5f5" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h2" noWrap>
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          ${product.price}
        </Typography>
      </CardContent>
      <Box sx={{ padding: 2 }}>
        <Link
          to={`/product/${product.id}`}
          style={{ textDecoration: "none", color: "#3483fa" }}
        >
          Ver detalles
        </Link>
      </Box>
    </Card>
  );
};

export default ProductItem;
