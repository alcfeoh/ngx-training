import { Component } from '@angular/core';
import {NavigationComponent} from './navigation/navigation.component';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [
        NavigationComponent,
        RouterOutlet
    ],
    templateUrl: "app.component.html"
})
export class AppComponent {
}
