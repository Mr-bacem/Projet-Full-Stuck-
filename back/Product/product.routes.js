const express = require("express");
const router = express.Router();

const {createProduct, getAllProduct ,getProductByTiltle,getProductByCategorie,updateProductById,deleteProductById}
= require("./product.controller") 
  ;



router.post("/",createProduct);

router.get("/", getAllProduct);
// router.get("/id", getProductByTiltle);
router.get("/type", getProductByCategorie);
router.put("/:id",updateProductById);
router.delete('/:id', deleteProductById);

module.exports = router;
