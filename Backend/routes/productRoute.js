const express = require("express");
const { getAllProducts,createProduct,updateProduct,getProductDetails,deleteProduct, createProductReview, getProductReviews, deleteReview } = require("../controllers/productController");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/products").get(getAllProducts);
router
  .route("/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);
router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);


module.exports = router;