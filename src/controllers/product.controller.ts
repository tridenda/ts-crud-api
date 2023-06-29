import { Request, Response } from "express";
import { Product } from "../models/product/product.model";
import { Rating } from "../models/product/rating.model";
import { ProductRepository } from "../repositories/product/product.repository";

class ProductController {
  // addProduct
  public async addProduct(req: Request, res: Response) {
    try {
      const newProduct = new Product();
      const newRating = new Rating();

      newProduct.title = req.body.title;
      newProduct.price = req.body.price;
      newProduct.description = req.body.description;
      newProduct.image = req.body.image;

      newRating.rate = req.body.rating.rate ? req.body.rating.rate : 0;
      newRating.count = req.body.rating.count ? req.body.rating.count : 0;
      newProduct.rating = newRating;

      // console.log(req.body);
      console.log(newProduct);

      await new ProductRepository().createProduct(newProduct);

      res.status(201).json({
        status: "Success",
        message: "Successfully added new product!",
      });
    } catch (error: any) {
      res.status(501).json({
        status: "Failed",
        message: error.message,
      });
    }
  }

  // deleteProduct
  // updateProduct
  // findAllProducts
  // findProductById
  // findAllCategories
}

export default new ProductController();
