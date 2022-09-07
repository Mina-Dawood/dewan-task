import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajlisComponent } from './majlis.component';

describe('MajlisComponent', () => {
  let component: MajlisComponent;
  let fixture: ComponentFixture<MajlisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajlisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajlisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
