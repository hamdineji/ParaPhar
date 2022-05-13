import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { RouteInfo } from 'app/sidebar/sidebar.component';
@Injectable({
  providedIn: 'root'
})
export class UserService {

 public routes :RouteInfo[];
  constructor(private http :HttpClient ) { }

  // this is a function to create a user
public signUp(userToCreate){
  return this.http.post(environment.baseUrl+"users",{
   firstName : userToCreate.firstName,
    lastName : userToCreate.lastName,
    age : userToCreate.age, 
    titre : "Mr", 
    adresse : userToCreate.adresse, 
    city : userToCreate.city, 
    country : userToCreate.country, 
    codePostal: userToCreate.codePostal,
    email : userToCreate.email, 
    password : userToCreate.password
  })
}
public signIn (email , password){
  return this.http.post(environment.baseUrl+"users/signIn", {email, password} , {responseType: 'json'});
}
}
