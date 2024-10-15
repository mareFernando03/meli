import {
    Button,
    Card,
    CardContent,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import React, { useEffect, useState } from "react";
  import { Carousel } from "react-responsive-carousel";
  import "react-responsive-carousel/lib/styles/carousel.min.css";
  import { Link, useParams } from "react-router-dom";
  
  const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [description, setDescription] = useState("");
  
    useEffect(() => {
      fetch(`https://api.mercadolibre.com/items/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
  
      fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then((response) => response.json())
        .then((data) => setDescription(data.plain_text));
    }, [id]);
  
    if (!product) return <div>Cargando...</div>;
  
    return (
      <Container>
        <Card sx={{ marginTop: 5 }}>
          <Carousel
            showThumbs={false}
            dynamicHeight={true}
            showArrows={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <Button
                  onClick={onClickHandler}
                  title={label}
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    top: "calc(50% - 15px)",
                    width: 30,
                    height: 30,
                    backgroundColor: "#3483fa",
                    color: "#fff",
                    borderRadius: "50%",
                    left: 15,
                  }}
                >
                  {"<"}
                </Button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <Button
                  onClick={onClickHandler}
                  title={label}
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    top: "calc(50% - 15px)",
                    width: 30,
                    height: 30,
                    backgroundColor: "#3483fa",
                    color: "#fff",
                    borderRadius: "50%",
                    right: 15,
                  }}
                >
                  {">"}
                </Button>
              )
            }
          >
            {product.pictures.slice(0, 6).map((picture) => (
              <div key={picture.id}>
                <img
                  src={picture.url}
                  alt={product.title}
                  style={{ height: 400, objectFit: "contain" }}
                />
              </div>
            ))}
          </Carousel>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              ${product.price}
            </Typography>
            <Typography variant="body1" paragraph>
              {description}
            </Typography>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Detalles del Producto</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Atributo</TableCell>
                        <TableCell>Valor</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {product.attributes.map((attribute) => (
                        <TableRow key={attribute.id}>
                          <TableCell>{attribute.name}</TableCell>
                          <TableCell>{attribute.value_name}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Box sx={{ textAlign: "center", marginTop: 2 }}>
              <Button
                component={Link}
                to="/home"
                variant="contained"
                color="primary"
              >
                Volver a la búsqueda
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    );
  };
  
  export default ProductDetail;