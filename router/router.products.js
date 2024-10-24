const express = require("express");
const router = express.Router();
const getProduct = require('../controllers/controller.products')

router.route("/").get(getProduct.getAllProducts);
router.route("/query").get(getProduct.getProductsByQuery )

module.exports = router;