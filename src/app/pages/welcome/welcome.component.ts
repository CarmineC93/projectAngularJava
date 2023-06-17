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

  constructor(private route: ActivatedRoute, private salutiSrv  : SalutiDataService) {


  }

  ngOnInit(): void {
    this.user = this.route.snapshot.params['userId'];
  }

  getSaluti = () : void => console.log(this.salutiSrv.getSaluti());


}
