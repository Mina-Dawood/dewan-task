import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from '@app/shared/services';
import { PAGES_CONFIG } from '@app/shared/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private readonly router: Router) {}

  login(): Observable<boolean> {
    /** token of air table APIs */
    const token = 'keyP8mHl0YKIjnY8T';
    LocalStorageService.setToken(token);

    return of(true);
  }

  logout(): void {
    LocalStorageService.removeToken();
    this.router.navigate([PAGES_CONFIG.home.route]);
  }
}
