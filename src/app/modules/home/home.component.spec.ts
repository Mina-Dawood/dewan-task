import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PAGES_CONFIG } from '@app/shared/constants';
import { AuthenticationServiceMock, RouterMock } from '@app/shared/mocks';
import { AuthenticationService } from '@app/shared/services';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [TranslateModule.forRoot()],
      providers: [
        { provide: Router, useClass: RouterMock },
        { provide: AuthenticationService, useClass: AuthenticationServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login when getStarted mothod invoked', inject(
    [AuthenticationService],
    (authenticationService: AuthenticationService) => {
      const loginSpyOn = spyOn(authenticationService, 'login').and.returnValue(
        of(true)
      );
      component.getStarted();
      expect(loginSpyOn).toHaveBeenCalled();
    }
  ));

  it('should navigate when getStarted mothod invoked', inject(
    [AuthenticationService, Router],
    (authenticationService: AuthenticationService, router: Router) => {
      spyOn(authenticationService, 'login').and.returnValue(of(true));
      const navigateSpy = spyOn(router, 'navigate');
      component.getStarted();
      expect(navigateSpy).toHaveBeenCalledWith([PAGES_CONFIG.majlis.route]);
    }
  ));
});
