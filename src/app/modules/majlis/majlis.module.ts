import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';

import { MajlisRoutingModule } from './majlis-routing.module';
import { MajlisComponent } from './majlis.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MajlisListComponent } from './components/majlis-list/majlis-list.component';
import { AddMajlisComponent } from './components/add-majlis/add-majlis.component';
import { StatusBarChartComponent } from './components/status-bar-chart/status-bar-chart.component';
import { CityPieChartComponent } from './components/city-pie-chart/city-pie-chart.component';
import { MajlisCountComponent } from './components/majlis-count/majlis-count.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MajlisComponent,
    HeaderComponent,
    DashboardComponent,
    MajlisListComponent,
    AddMajlisComponent,
    StatusBarChartComponent,
    CityPieChartComponent,
    MajlisCountComponent,
  ],
  imports: [SharedModule, MajlisRoutingModule, FormsModule],
})
export class MajlisModule {}
