require('dotenv').config();
const MongoDbConnection = require('./utils/db');
const Product = require('./models/model.products');
const productJson = require('./products.json');

const Start = async () =>{
  try {
     await MongoDbConnection();
     await Product.deleteMany();
     await Product.create(productJson);
     console.log("Products created successfully");
  } catch (error) {
    console.log("Error in products.js file", error)
  }
}

Start();
