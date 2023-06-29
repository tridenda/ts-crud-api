import { Product } from "../../models/product/product.model";

export interface IProductRepository {
  // createProduct
  createProduct(product: Product): Promise<void>;
  // deleteProduct
  deleteProduct(productId: number): Promise<void>;
  // updateProduct
  updateProduct(productId: number): Promise<void>;
  // findAllProducts
  findAllProducts(): Promise<Product[]>;
  // findProductById
  findProductById(productId: number): Promise<Product>;
}
