import { Injectable } from '@angular/core';
import { IArticles } from 'src/app/models/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articles: IArticles[] = [
    {  id: 1, title: 'Penne rigate', description: 'pasta rigata',price: 1.20,
      active: true,date: new Date(),imageurl: 'assets/images/prodotti/1.jpg'},
      {  id: 2, title: 'Penne lisce', description: 'pasta liscia',price: 1.50,
      active: true,date: new Date(),imageurl: 'assets/images/prodotti/1.jpg'}
    ]

  constructor() { }

  getArticles = () : IArticles[] => this.articles;

  getArticlesByCode = (id : number) : IArticles => {
    const index = this.articles.findIndex(articles => articles.id === id);
    return this.articles[index];
  }
}
