import { Component, OnInit } from '@angular/core';
import { IArticles } from '../../models/articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: IArticles[] = [
    {id : 1, description: 'prova', title: 'prova', price : 5.00 , active : true, date : new Date()},
    {id : 2, description: 'prova2', title: 'prova2', price : 5.00,  active : true, date : new Date()},
    {id : 3, description: 'prova3', title: 'prova3', price : 5.00, active : true, date : new Date()},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
