import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMajlisComponent } from './add-majlis.component';

describe('AddMajlisComponent', () => {
  let component: AddMajlisComponent;
  let fixture: ComponentFixture<AddMajlisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMajlisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMajlisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
