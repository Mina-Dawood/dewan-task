import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/shared/services';
import { PAGES_CONFIG } from '@app/shared/constants';

@Component({
  selector: 'dewan-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  /**
   * Method for simulate login and check if logged in successfully then navigate to majlis page
   */
  getStarted(): void {
    this.authenticationService.login().subscribe((loggedIn) => {
      if (loggedIn) {
        this.router.navigate([PAGES_CONFIG.majlis.route]);
      }
    });
  }
}
