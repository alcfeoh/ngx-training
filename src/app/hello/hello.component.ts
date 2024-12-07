import {Component, Input} from '@angular/core';

@Component({
  selector: 'hello',
  standalone: true,
  template: `
    <div>
      <h2>Hello {{firstName}} {{name}}</h2>
    </div>
  `
})
export class HelloComponent {

  @Input()
  name: string;

  @Input()
  firstName = "John";

  constructor() {
    this.name = 'Angular';
  }

}
