import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../login/login.service';
import { CurrencySwitcherComponent } from "../currency-switcher/currency-switcher.component";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, CurrencySwitcherComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  loginService = inject(LoginService);

}
