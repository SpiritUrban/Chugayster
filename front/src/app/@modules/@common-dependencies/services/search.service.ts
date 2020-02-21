import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from "rxjs";
import { filter, map } from 'rxjs/operators';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators'; 
import { query } from '@angular/animations';
//how import observable and map
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl: string = 'http://localhost:3000/search';//localhost 3000
  queryUrl: string = '?search=';//

  constructor(private http: HttpClient) { }

  search(terms: Observable<string>) {
    return terms.pipe( // received value per click
      debounceTime(400), //delay time
      distinctUntilChanged(),
      switchMap(term => this.searchEntries(term))
    )
    
    
  }

  searchEntries(term) {
    console.log(term)
    return this.http
        .get(this.baseUrl + this.queryUrl + term)
        //.map(res => res.json());
  }
}
