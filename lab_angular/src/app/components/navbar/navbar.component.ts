import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  isLoggin = false;
  username: string | null = null;
  logAccess: Subscription = new Subscription();

  constructor(private authService: AuthService){
    this.logAccess = this.authService.login$.subscribe((loggedIn: boolean) => {
      this.isLoggin = loggedIn; 
      this.username=this.authService.getUsername();
    });
    
    if (this.authService.isLogged()){
      this.isLoggin=true;
      this.username=this.authService.getUsername();
    }
  }

  ngOnDestroy() {
    this.logAccess.unsubscribe();
    console.log("desuscrito");
  }

  logout() {
    this.authService.logout();
  }
}
