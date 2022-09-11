import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MajlisRoutingModule } from './majlis-routing.module';
import { MajlisComponent } from './majlis.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MajlisListComponent } from './components/majlis-list/majlis-list.component';
import { AddMajlisComponent } from './components/add-majlis/add-majlis.component';
import { StatusBarChartComponent } from './components/status-bar-chart/status-bar-chart.component';

@NgModule({
  declarations: [
    MajlisComponent,
    HeaderComponent,
    DashboardComponent,
    MajlisListComponent,
    AddMajlisComponent,
    StatusBarChartComponent,
  ],
  imports: [CommonModule, SharedModule, MajlisRoutingModule],
})
export class MajlisModule {}
