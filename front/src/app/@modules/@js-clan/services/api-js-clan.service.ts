import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const back = '.'; // 'http://localhost'

@Injectable({
  providedIn: 'root'
})
export class ApiJsClanService {

  constructor(
    private http: HttpClient
  ) { }

  voteForLessons = () => this.http.get(back + '/vote-for-lessons').toPromise();
}
