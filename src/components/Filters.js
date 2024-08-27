import React, { useState } from 'react';
import { TextField, Button, MenuItem } from '@mui/material';

const Filters = ({ products, setFilteredProducts }) => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [category, setCategory] = useState('electronics');

  const handleFilter = () => {
    const filtered = products.filter(product =>
      product.price >= priceRange.min &&
      product.price <= priceRange.max &&
      product.category === category
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <TextField
        label="Min Price"
        type="number"
        value={priceRange.min}
        onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
      />
      <TextField
        label="Max Price"
        type="number"
        value={priceRange.max}
        onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
      />
      <TextField
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        select
      >
        <MenuItem value="electronics">Electronics</MenuItem>
        {/* Add more categories as needed */}
      </TextField>
      <Button onClick={handleFilter}>Filter</Button>
    </div>
  );
};

export default Filters;
