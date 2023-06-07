import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "";
  password: string = "";
  autenticated: boolean = true;
  errMsg: string = "Sorry, there is an error"
  okMsg: string = "Ok, you can enter"
  title : string ="Access & Authentication";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gestAuth = () : void => {
    console.log(this.userId);

    if(this.userId === "Carmine" && this.password === "pass"){
      this.route.navigate(['welcome', this.userId])
      this.autenticated = true;
    }else{
      this.autenticated = false;
    }
  }

}
