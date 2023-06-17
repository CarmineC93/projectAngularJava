import { Component, OnInit } from '@angular/core';
import { IArticles } from 'src/app/models/articles';
import { ArticlesService } from 'src/services/articles.service';


@Component({
  selector: 'app-grid-articles',
  templateUrl: './grid-articles.component.html',
  styleUrls: ['./grid-articles.component.css']
})
export class GridArticlesComponent implements OnInit {


  articles$: IArticles[] = [];

  constructor(private articlesService : ArticlesService) { }

  ngOnInit(): void {

    this.articles$ = this.articlesService.getArticles();
    console.log(this.articlesService);

  }

  handleEdit = (id : string) => {

  }


  handleDelete = (id : string) => {
    this.articles$.splice(this.articles$.findIndex(x => x.id === id), 1);
  }

}
