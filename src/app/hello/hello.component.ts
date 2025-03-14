import {Component} from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: `
    <div>
      <h2>Hello {{name}}</h2>
    </div>
  `
})
export class HelloComponent {

  name: string;

  constructor() {
    this.name = 'Angular';
  }

}
