var express = require('express');
var router = express.Router();
const product_controllers=require('../controllers.js/productcontrollers')
//allproducts route
router.get('/all',product_controllers.allproducts);
//form to add a product
router.get('/addnewProduct')
//get all category  names
router.get('/category',)
//category form
router.get('/category/form')
//all product in category 
router.get('/category/:name')
//get a specified product in a category
router.get('/category/:name/:id')
//add a category
router.post('/category/newcategory')
//add new product
router.post('/newproduct')



module.exports = router;