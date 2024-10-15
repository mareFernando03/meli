import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) return <div>Cargando...</div>;

    return (
        <div>
            <img src={product.pictures[0].url} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <Link to="/">Volver a la búsqueda</Link>
        </div>
    );
};

export default ProductDetail;