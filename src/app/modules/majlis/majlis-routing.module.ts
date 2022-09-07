import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MajlisComponent } from './majlis.component';

const routes: Routes = [
  {
    path: '',
    component: MajlisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MajlisRoutingModule {}
