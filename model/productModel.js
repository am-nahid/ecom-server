const Product = require('../schemas.js/storeDataSchema');
const allData = require('../storeApi/allData');
const searchFeatures = require('./searchClass')

const productAdd = async (req, res) => {
  try {
    const result = await Product.insertMany(allData);
    res.send(result); 
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).send({
      message: 'Internal server error',
      statusCode: 500,
    });
  }
};

const fetchAllProduct = async (req,res)=>{
  try{
    const result = await Product.find();
    res.send(result); 
  }catch(err){
    console.error('Error inserting data:', err);
    res.status(500).send({
      message: 'Internal server error',
      statusCode: 500,
    });
  }
}

const fetchProductBySC = async (req, res) => {
  const cat = req.params.cat;
  const search_category = req.params.search_category;

  try {
      const filtered = await Product.find({ category: cat });

      if (filtered.length > 0) {
          const filter_search = await Product.find({ search_category: search_category });

          if (filter_search.length > 0) {
              return res.send(filter_search);
          } else {
              return res.send(filtered);
          }
      } else {
          return res.status(404).send('No products found for the specified category.');
      }
  } catch (error) {
      console.error(error);
      return res.status(500).send('Something went wrong while fetching products.');
  }
}

const fetchProductByCat = async (req, res) => {
  const cat = req.params.cat;

  try {
      const filtered = await Product.find({ category: cat });

      if (filtered.length > 0) {
          return res.send(filtered);
      } else {
          return res.status(404).send('No products found for the specified category.');
      }
  } catch (error) {
      console.error(error);
      return res.status(500).send('Something went wrong while fetching products.');
  }
}

const search = async (req,res)=>{
  const data = req.query;
  const result =  new searchFeatures(Product.find(),data).search()
  const products =await result.query;
  return res.send(products)
}

module.exports = {productAdd, fetchProductBySC, fetchProductByCat, search, fetchAllProduct};