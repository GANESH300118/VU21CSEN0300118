const express = require('express');
const productsRoutes = require('./routes/products');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', productsRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
