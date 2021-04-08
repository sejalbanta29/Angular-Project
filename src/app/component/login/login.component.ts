import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any = {}
  
  constructor(private router:Router) { }


  ngOnInit(): void {}

  login(){
    localStorage.setItem("currusers",JSON.stringify({
      'username':this.model.username,
      'password': this.model.password,
  }));
    if(localStorage.getItem("reusers") === localStorage.getItem("currusers")){
      this.router.navigate(['/shop']);
      console.log(localStorage.getItem("reusers") === localStorage.getItem("currusers"));
      console.log(localStorage.getItem("currusers"));
      // console.log($('#username').val());
    }
    else{
      this.router.navigate(['/register']);
      console.log("hii");
      console.log(localStorage.getItem("reusers") == localStorage.getItem("currusers"));
      console.log(localStorage.getItem("currusers"));
    }
    }
  
  
  
}