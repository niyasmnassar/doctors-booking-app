import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }
  getCategories(){
    return this.http.get('https://my-json-server.typicode.com/niyasmnassar/bookingDoctor/category')
  };
  getDoctors(category_id: string){
    return this.http.get('https://my-json-server.typicode.com/niyasmnassar/bookingDoctor/department/' + category_id)
  }
  getDoctorProfiles(_id:string){
    return this.http.get('https://my-json-server.typicode.com/niyasmnassar/bookingDoctor/profile/' + _id)
  }
}