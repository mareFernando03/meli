import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const ProductItem = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          ${product.price}
        </Typography>
        <Button
          component={Link}
          to={`/product/${product.id}`}
          variant="contained"
          size="small"
          sx={{ marginTop: 1 }}
        >
          Ver detalles
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
