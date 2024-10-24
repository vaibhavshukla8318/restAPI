require('dotenv').config();
const express = require('express');
const app = express();
const productsRouter = require('./router/router.products')
const MongoDbConnection = require('./utils/db');


app.use('/api/products', productsRouter);

app.get('/', (req, res) =>{
  res.status(200).send("hi this is vaibhav shukla");
})

const PORT= 3000;

MongoDbConnection().then(()=>{
  app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
  })
})