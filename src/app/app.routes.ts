import { Router, Routes } from '@angular/router';
import { StoreViewComponent } from './store-view/store-view.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { LoginService } from './login/login.service';
import { inject } from '@angular/core';
import { LoginComponent } from './login/login.component';

const isLoggedIn = () => inject(LoginService).isUserLoggedIn() 
                          || inject(Router).parseUrl('login');
// Logical OR operator ||
// true || _____ => true
// false || something => something

export const routes: Routes = [
    { path: "", component: StoreViewComponent},
    { path: "cart", component: CartViewComponent},
    { 
        path: "checkout", 
        loadComponent: () => import("./checkout-view/checkout-view.component")
                               .then(c => c.CheckoutViewComponent), // Promise
        canActivate: [isLoggedIn]
    },
    { path: "login", component: LoginComponent}
];
