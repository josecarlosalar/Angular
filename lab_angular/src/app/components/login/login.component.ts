import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  username:string;
  password:string;
  spinVisible = false;
  gologinSubscription: Subscription = new Subscription();
  

  constructor(private authService: AuthService, private router: Router) {
    this.username = '';
    this.password = '';
  }

  resetInput(){
    this.username = '';
    this.password = '';
  }
    
  login() {
    this.spinVisible=true;
    this.gologinSubscription = this.authService.login(this.username, this.password).subscribe((result) => {
     
      if (result) {
        this.spinVisible = false;
        this.authService.loginSubject.next(true);
        this.router.navigate(['/dashboard']);

      } else {
        console.log("Error de inicio de sesión");
        this.spinVisible = false;
      }
    });
  }


}
