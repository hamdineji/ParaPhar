import { Component } from '@angular/core';
import { UserService } from 'app/services/user-service.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Auth } from 'app/auth.model';

@Component({
    selector: 'signin-cmp',
    templateUrl: 'signin.component.html'
})

export class SigninComponent{

    email : string; 
    password : string;



    constructor(private userService : UserService , private router : Router){}

public signIn(){
    localStorage.setItem("token", "nullll");
    this.userService.signIn(this.email , this.password).subscribe((value : any)=>{
        console.log("token" ,typeof value)
        localStorage.setItem("token", value.token);
        if(value.token){
           if(value.role =="admin"){
            this.userService.routes=[
                { path: '/dashboard',     title: 'Acceuil',         icon:'nc-bank',       class: '' },
                { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
                { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
                { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
                { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
                { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
                { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
                { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
            ];
           }
            else {
                this.userService.routes=[
                    { path: '/dashboard',     title: 'Acceuil',         icon:'nc-bank',       class: '' },
                    { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
                    { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
                    // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
                    // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
                    // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
                    // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
                    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
                ];
            }
            this.router.navigate(["dashboard"])
        }
    });
}

}
