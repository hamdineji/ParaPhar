import { Component } from '@angular/core';
import { UserService } from 'app/services/user-service.service';

@Component({
    selector: 'signup-cmp',
    templateUrl: 'signup.component.html'
})

export class SignupComponent{
firstName : string;
lastName : string;
    age : number;
    titre : string; 
    adresse : string; 
    city : string; 
    country : string; 
    codePostal: number;
    email : string; 
    password : string;
    Mr : boolean = false;
    Mme : boolean = false;


    constructor(private userService : UserService){}

public signUp(){
  var  userToCreate = {
        firstName : this.firstName,
        lastName : this.lastName,
        age : this.age, 
        titre : this.Mr ? "Mr" : "Mme", 
        adresse : this.adresse, 
        city : this.city, 
        country : this.country, 
        codePostal: this.codePostal,
        email : this.email, 
        password : this.password
    } ;
    console.log("submitted" , userToCreate)
    this.userService.signUp(userToCreate).subscribe();
}

}
