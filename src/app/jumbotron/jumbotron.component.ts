import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  standalone: true,
  styleUrls: ['./jumbotron.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JumbotronComponent {

  title = input.required<string>();

  description = input("");

}
