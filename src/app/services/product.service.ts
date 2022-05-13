import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http :HttpClient) { }

  createProduct( name  , file ,description ,price , valable){
    return this.http.post(environment.baseUrl+"products",{
      name : name,
       price : price,
       description : description, 
       picture : file, 
       valable : valable, 
     })
  }
  getAllProducts(){
    return this.http.get(environment.baseUrl+"products");
  }
}
