import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private user: string | null;
  private pass: string | null;

  public loginSubject: Subject<boolean> = new Subject<boolean>();
  public login$: Observable<boolean> = this.loginSubject.asObservable();

  constructor(private router: Router) { 
    this.user = localStorage.getItem("user");
    this.pass = localStorage.getItem("pass");
    this.isLogged();
  }

  login(username: string, password: string): Observable<boolean> {
    if (username === 'master@lemoncode.net' && password === '12345678') {
      localStorage.setItem("user", username);
      localStorage.setItem("pass", password);
      return of(true).pipe( delay(2000) );
    } else {
      return of(false).pipe( delay(2000) );
    }
  }

  logout(): void {
    this.loginSubject.next(false);
    this.router.navigate(['/home']);
    localStorage.removeItem("user");
    localStorage.removeItem("pass");
  }

  isLogged(): boolean {
    if (this.user=="master@lemoncode.net" && this.pass=="12345678") {
      this.router.navigate(['/dashboard']);
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }

  getUsername(): string | null {
    return localStorage.getItem("user");
  }
}
