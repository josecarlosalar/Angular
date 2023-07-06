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

  username='';
  password='';
  spinVisible = false;
  gologinSubscription: Subscription = new Subscription();
  

  constructor(private authService: AuthService, private router: Router) {
    
  }

  resetInput(){
    this.username = '';
    this.password = '';
  }

  upsateSpinVisible(state:boolean){
    this.spinVisible=state;
  }

  loginOk(){
    this.authService.loginSubject.next(true);
    this.router.navigate(['/dashboard']);
  }
    
  login() {
    this.upsateSpinVisible(true);
    this.gologinSubscription = this.authService.login(this.username, this.password).subscribe((result) => {
     
      if (result) {
        this.upsateSpinVisible(false);
        this.loginOk();

      } else {
        this.upsateSpinVisible(false);
        console.log("Error de inicio de sesión");
      }
    });
  }
}
