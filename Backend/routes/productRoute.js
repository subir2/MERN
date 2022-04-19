const express = require("express");
const { getAllProducts, createProduct,updateProduct,getProductDetails,deleteProduct } = require("../controllers/productController");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/products").get(isAuthenticatedUser,authorizeRoles("admin"),getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);


module.exports = router;