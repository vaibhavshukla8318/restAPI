const Product = require('../models/model.products');

const getAllProducts = async (req, res)=>{
  try {
   const products = await Product.find();
   res.status(200).json({ products, length: products.length } );
  } catch (error) {
     console.log(error);
  }
}


// Serching, filtering, pagination etc. these are use req.query method (http://localhost:3000/api/products?company=apple)
// for more than one query use use &(ampersand); (http://localhost:3000/api/products?company=apple&name=watch)

const getProductsByQuery = async (req, res)=>{
   try {
      const {company, name, featured, sort, select} = req.query;
      const queryObject = {};
      
      if(company){
         queryObject.company = company;
      }

      if(featured){
         queryObject.featured = featured;
      }

      if(name){
         queryObject.name = {$regex:name, $options: "i"}; 
      }

      let apiData = Product.find(queryObject);

      // sort

      if(sort){
         let spaceRemeove = sort.replace(",", " ")
         apiData = apiData.sort(spaceRemeove);
      }

      // select
      if(select){
         let spaceRemeove = select.split(",").join(" ");
         apiData = apiData.select(spaceRemeove);
      }


      // pagination

      let page = Number(req.query.page) || 1;
      let limit = Number(req.query.limit) || 3;

      let skip = (page - 1) * limit;

      apiData = apiData.skip(skip).limit(limit);


      const products = await Product.find(apiData);
      res.status(200).json( {products, length: products.length} );
   } catch (error) {
      console.log(error);
   }
}




module.exports = {getAllProducts, getProductsByQuery};