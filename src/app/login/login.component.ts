import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

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

  constructor(private route: Router, private BasicAuth: AuthappService) { }

  ngOnInit(): void {
  }

  gestAuth = () : void => {
    console.log(this.userId);

    if(this.BasicAuth.autentica(this.userId, this.password)){
      this.route.navigate(['welcome', this.userId])
      this.autenticated = true;
    }else{
      this.autenticated = false;
    }
  }

}
