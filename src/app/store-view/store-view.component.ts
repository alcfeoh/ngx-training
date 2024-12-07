import { Component, inject } from '@angular/core';
import { JumbotronComponent } from "../jumbotron/jumbotron.component";
import { LicensePlateComponent } from "../license-plate/license-plate.component";
import { DialogComponent } from "../dialog/dialog.component";
import { AsyncPipe } from '@angular/common';
import { LicensePlateService } from '../license-plate.service';
import { HighlightDirective } from '../highlight.directive';
import { LicensePlate } from '../license-plate';
import { CartService } from '../cart.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-store-view',
  standalone: true,
  imports: [
    JumbotronComponent, 
    LicensePlateComponent, 
    DialogComponent,
    AsyncPipe,
    HighlightDirective
  ],
  templateUrl: './store-view.component.html',
  styleUrl: './store-view.component.css'
})
export class StoreViewComponent {
  
  count  = 0;

  licensePlates$ = inject(LicensePlateService).getList().pipe(
    tap(plates => this.count = plates.length)
  ); 
   
  cartService = inject(CartService);
  showDialog = false;

 addToCart(plate: LicensePlate): void {
   this.cartService.addToCart(plate);
   this.showDialog = true;
 }

}
