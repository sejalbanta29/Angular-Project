import { Component, OnInit } from '@angular/core';
import{ ChatService } from'src/app/services/chat.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem=[
    // { id:1, productId: 1, productName:"test 1", qty:4, price: 100},
    // { id:2, productId: 3, productName:"test 2", qty:4, price: 800},
    // { id:3, productId: 4, productName:"test 3", qty:4, price: 300},
    // { id:4, productId: 2, productName:"test 4", qty:6, price: 200},
  ];

  cartTotal  =    0;
  constructor( private msg: ChatService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product:Product) =>{
      this.addProductToCart(product);
    })

  
  }

  addProductToCart(product:Product){

    let productExists= false;

    for(let item in this.cartItem){
      if(this.cartItem[item].productId== product.id){
        this.cartItem[item].qty++
        productExists=true
        break;
      }
    }
    if(!productExists){
      this.cartItem.push({
        productId:product.id,
        productName:product.name,
        qty:1,
        price:product.price,
  
      })
    }



  //   if(this.cartItem.length===0){
  //     this.cartItem.push({
  //       productId:product.id,
  //       productName:product.name,
  //       qty:1,
  //       price:product.price,
  
  //     })
  //   }
  //   else{
  //   for(let item in this.cartItem){
  //     if(this.cartItem[item].productId== product.id){
  //       this.cartItem[item].qty++;
  //       break;
  //     }else{
  //       this.cartItem.push({
  //         productId:product.id,
  //         productName:product.name,
  //         qty:1,
  //         price:product.price,
    
  //       })
  //     }
  //   }
  // }
    this.cartTotal=0;
    this.cartItem.forEach(item => {
      this.cartTotal+= (item.qty* item.price)
    })
  }

}
