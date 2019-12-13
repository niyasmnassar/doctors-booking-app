import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }
  getCategories(){
    // return this.http.get('https://reqres.in/api/users')
    // http://localhost:3000/category
  }
}
