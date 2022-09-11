import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPieChartComponent } from './city-pie-chart.component';

describe('CityPieChartComponent', () => {
  let component: CityPieChartComponent;
  let fixture: ComponentFixture<CityPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityPieChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
