import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SalutiDataService {

  constructor() { }

  getSaluti = () : string => "Saluti"
}