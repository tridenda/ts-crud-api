import { Product } from "../../models/product/product.model";
import { Rating } from "../../models/product/rating.model";
import { IProductRepository } from "./product.interface";

export class ProductRepository implements IProductRepository {
  public async createProduct(product: Product): Promise<void> {
    try {
      await Product.create(
        {
          title: product.title,
          price: product.price,
          description: product.description,
          image: product.image,
          rating: {
            rate: product.rating.rate,
            count: product.rating.count,
          },
        },
        { include: [{ model: Rating }] }
      );
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  deleteProduct(productId: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  updateProduct(productId: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  findAllProducts(): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }

  findProductById(productId: number): Promise<Product> {
    throw new Error("Method not implemented.");
  }
}
