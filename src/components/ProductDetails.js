import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/categories/electronics/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{product.name}</Typography>
        <Typography>Price: ${product.price}</Typography>
        <Typography>Rating: {product.rating}</Typography>
        <Typography>Discount: {product.discount}%</Typography>
        <Typography>Availability: {product.availability || 'Available'}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
