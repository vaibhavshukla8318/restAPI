const mongoose = require('mongoose');

const URL = process.env.MONGODB;
const MongoDbConnection = async () =>{
   try {
     await mongoose.connect(URL);
     console.log("Database connection successful");
   } catch (error) {
      console.log("Database connection failed: ", error);
   }
}

module.exports = MongoDbConnection;