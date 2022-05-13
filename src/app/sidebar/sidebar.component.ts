import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user-service.service';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES=[
    // { title: 'Gros électroménager'},
    // { title: 'Pétit électroménager'},
    // { title: 'TV Image Son', },
    // { title: 'Smartphones, objets connectés' },
    { path: '/dashboard',     title: 'Acceuil',         icon:'nc-bank',       class: '' },
    { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    constructor(private userService : UserService){}
    ngOnInit() {
        console.log("sideBarRoutes" , this.userService.routes)
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
