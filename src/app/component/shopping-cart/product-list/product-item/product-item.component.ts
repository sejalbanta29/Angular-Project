import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

import { Router} from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem : Product;

  constructor(private msg: ChatService, private router:Router) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    if(localStorage.getItem("currusers")!=null){
      console.log(localStorage.getItem("currusers"))
    this.msg.sendMsg(this.productItem);
    }
    else{
      alert("You are not log-in")
      this.router.navigate(['/register']);
    }
  }

}