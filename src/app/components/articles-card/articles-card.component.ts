import { Component, Input, OnInit, Output } from '@angular/core';
import { IArticles } from 'src/app/models/articles';
// import { EventEmitter } from 'stream';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-articles-card',
  templateUrl: './articles-card.component.html',
  styleUrls: ['./articles-card.component.css']
})
export class ArticlesCardComponent implements OnInit {

  constructor() { }

  @Input()
  article: IArticles={
    id: "",
    title: '',
    description: '',
    price: 0,
    active: true,
    date: new Date(),
    imageurl: '',
  }

  ngOnInit(): void {
  }

  @Output()
  delete = new EventEmitter();

  @Output()
  edit = new EventEmitter();

  editArt = () => this.edit.emit(this.article.id);

  deleteArt = () => this.delete.emit(this.article.id);
}
