import { Injectable } from '@angular/core';
import { Product } from '../models/product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[] = [
    new Product(1, 'Product1','This is product description',900,'https://pngimg.com/uploads/book/book_PNG2109.png'),
    new Product(2, 'Product2','This is Angular Book ',500,'https://images-na.ssl-images-amazon.com/images/I/718rCk+pGeL.jpg'),
    new Product(3, 'Product3','This is Rubix Cube',177,"https://i.ytimg.com/vi/IqdV8crqSYM/maxresdefault.jpg"),
  ]
  constructor() { }

  getProducts():Product[] {
    return this.products
  }
}