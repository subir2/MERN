const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncError= require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
//create Product-admin

exports.createProduct=catchAsyncError(async(req,res,next)=>{
    const product=await Product.create(req.body);
    console.log(product);
    res.status(201).json({
        success:true,
        product
    })
    
});


// Get All Product




exports.getAllProducts =catchAsyncError( async(req,res)=>{

  const apiFeature = new ApiFeatures(Product.find(), req.query).search()
    
    let products = await apiFeature.query;

    res.status(200).json({
        success:true,
        products

    })


});

// Update Product -- Admin
exports.updateProduct = catchAsyncError( async (req, res, next) => {
    let product = await Product.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHander("Product not found", 404));
    }

 
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
  
    res.status(200).json({
      success: true,
      product,
    });
  });
  

  // Delete Product-admin

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHander("Product not found", 404));
    }
  
   
  
    await product.remove();
  
    res.status(200).json({
      success: true,
      message: "Product Delete Successfully",
    });
  });
  

  // Get Product Details
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHander("Product not found", 404));
    }
  
    res.status(200).json({
      success: true,
      product,
    });
  });
  