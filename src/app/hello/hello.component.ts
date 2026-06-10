import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hello',
  changeDetection: ChangeDetectionStrategy.Eager,
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
