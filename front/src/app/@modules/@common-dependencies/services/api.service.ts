import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  test(){
    return this.http.get('https://api.github.com/users').toPromise()
  }

  register = (userData) => this.http.post('http://localhost:3000/register', userData, httpOptions).toPromise()
}