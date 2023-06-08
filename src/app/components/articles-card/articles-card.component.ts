import { Component, Input, OnInit } from '@angular/core';
import { IArticles } from 'src/app/models/articles';

@Component({
  selector: 'app-articles-card',
  templateUrl: './articles-card.component.html',
  styleUrls: ['./articles-card.component.css']
})
export class ArticlesCardComponent implements OnInit {

  constructor() { }

  @Input()
  article: IArticles={
    id: 0,
    title: '',
    description: '',
    price: 0,
    active: true,
    date: new Date(),
    imageurl: '',
  }

  ngOnInit(): void {
  }

}
