import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajlisCountComponent } from './majlis-count.component';

describe('MajlisCountComponent', () => {
  let component: MajlisCountComponent;
  let fixture: ComponentFixture<MajlisCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajlisCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajlisCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
