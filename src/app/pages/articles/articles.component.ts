import { Component, OnInit } from '@angular/core';
import { IArticles } from '../../models/articles';
import { ArticlesService } from 'src/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: IArticles[] = [];

  constructor(private articlesService : ArticlesService) { }

  ngOnInit(): void {
    this.articles= this.articlesService.getArticles();
  }

}
