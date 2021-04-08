import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:any = {}

  constructor(private router:Router) {
    
   }

  ngOnInit(): void {
   
  }
  register(){
    localStorage.setItem("reusers",JSON.stringify({
      'username':this.model.username,
      'password': this.model.password,
    }));
    this.router.navigate(['/shop']);
    console.log(this.model);
    console.log(localStorage.getItem("reusers"));
  }
  

}