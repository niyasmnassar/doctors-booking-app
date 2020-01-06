import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }
  getCategories(){
    return this.http.get('https://heroku-doc-niyas.herokuapp.com/api/category')
  };
  getDoctors(category_id: string){
    return this.http.get('https://heroku-doc-niyas.herokuapp.com/api/doctors/department/' + category_id)
  }
  getDoctorProfiles(_id:string){
    return this.http.get('https://heroku-doc-niyas.herokuapp.com/api/doctors/profile/' + _id)
  }
}