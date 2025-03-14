import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {CurrencySwitcherComponent} from '../currency-switcher/currency-switcher.component';

@Component({
    selector: 'app-navigation',
    imports: [
        RouterLink,
        CurrencySwitcherComponent
    ],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
