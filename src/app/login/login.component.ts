import {Component, inject} from '@angular/core';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private loginService = inject(LoginService);

  login(username: string, password: string): void {
    this.loginService.login(username, password)
      .subscribe(() => console.log('Successfully logged in'));
  }

}
