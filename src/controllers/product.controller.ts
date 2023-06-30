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
      newProduct.category = req.body.category;
      newProduct.image = req.body.image;

      newRating.rate = req.body.rating.rate ? req.body.rating.rate : 0;
      newRating.count = req.body.rating.count ? req.body.rating.count : 0;
      newProduct.rating = newRating;

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
  public async deleteProduct(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      await new ProductRepository().deleteProduct(id);

      res.status(201).json({
        status: "Success",
        message: "Successfully delete product",
      });
    } catch (error: any) {
      res.status(501).json({
        status: "Failed",
        message: error.message,
      });
    }
  }
  // updateProduct
  // findAllProducts
  // findProductById
  // findAllCategories
}

export default new ProductController();
