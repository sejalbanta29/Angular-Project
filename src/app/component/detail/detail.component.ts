import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService} from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  productList:Product[] = [];
  receivedId: number;
  product;
  constructor(private productService:ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
    this.receivedId = +this.activatedRoute.snapshot.params['id'];
    this.product = this.productList.find(el => el.id === this.receivedId);
    console.log(this.product);
  }

}