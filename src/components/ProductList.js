import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import Filters from './Filters';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/categories/electronics/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <Filters products={products} setFilteredProducts={setFilteredProducts} />
      <Grid container spacing={2}>
        {filteredProducts.map(product => (
          <Grid item key={product.id} xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography>Price: ${product.price}</Typography>
                <Typography>Rating: {product.rating}</Typography>
                <Typography>Discount: {product.discount}%</Typography>
                <Typography>Availability: {product.availability || 'Available'}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
