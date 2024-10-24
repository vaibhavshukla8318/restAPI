const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price:{
    type:Number,
    required:[true, "price must be provided"]
  },
  featured:{
    type: Boolean,
    default: false
  },
  rating:{
    type:Number,
    default: 4.9
  },
  createdAt:{
    type: Date,
    default: Date.now()
  },
  company:{
    type: String,
    enum:{
      values: ['google', 'facebook', 'apple', 'twitter', 'instagram'],
      message: '{VALUE} is not a valid company'
    }
  }
  
})

const product = mongoose.model("Product", productSchema);
module.exports = product;