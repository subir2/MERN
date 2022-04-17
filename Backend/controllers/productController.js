const Product = require("../models/productModel");

//create Product-admin

exports.createProduct=async(req,res,next)=>{
    const product=await Product.create(req.body);
    console.log(product);
    res.status(201).json({
        success:true,
        product
    })
    
}


// Get All Product




exports.getAllProducts = async(req,res)=>{
    const products =await Product.find();

    res.status(200).json({
        success:true,
        products

    })


}

// Update Product -- Admin
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);
  
    if (!product) {
      return res.status(200).json({
        success: false,
        message:"Product NOt Found"
      })
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
  };
  

  // Delete Product-admin

exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHander("Product not found", 404));
    }
  
   
  
    await product.remove();
  
    res.status(200).json({
      success: true,
      message: "Product Delete Successfully",
    });
  };
  

  // Get Product Details
exports.getProductDetails = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHander("Product not found", 404));
    }
  
    res.status(200).json({
      success: true,
      product,
    });
  };
  