import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalutiDataService } from 'src/app/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: string = "";
  title : string ="Access & Authentication";
  errorMessage : string = "";

  constructor(private route: ActivatedRoute, private salutiSrv  : SalutiDataService) {


  }

  ngOnInit(): void {
    this.user = this.route.snapshot.params['userId'];
  }

  saluti :string ="";

  getSaluti = () : void => {
    this.salutiSrv.getSaluti(this.user).subscribe(
      {next: this.handleResponse.bind(this),
      error: this.handleError.bind(this) }
    );
  }
handleResponse(response: Object){
  this.saluti = response.toString();
}

handleError(error: any){
  console.log(error);
  this.errorMessage = error.error.message;
}

}
