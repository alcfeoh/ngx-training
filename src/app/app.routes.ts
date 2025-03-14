import {Routes} from '@angular/router';
import {StoreViewComponent} from './store-view/store-view.component';
import {CheckoutViewComponent} from './checkout-view/checkout-view.component';

export const routes: Routes = [
  {path: "", component: StoreViewComponent},
  {path: "cart", loadComponent: () =>
      import("./cart-view/cart-view.component").then(c => c.CartViewComponent)},
  {path: "checkout", component: CheckoutViewComponent},
  {path: "admin", loadChildren: () =>
      import('./admin/admin.module').then(m => m.AdminModule)},

];
