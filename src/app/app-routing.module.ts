import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAGES_CONFIG } from '@app/shared/constants';
import { AuthenticationGuard } from '@app/shared/guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: PAGES_CONFIG.home.name,
    pathMatch: 'full',
  },
  {
    path: PAGES_CONFIG.home.name,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: PAGES_CONFIG.majlis.name,
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import('./modules/majlis/majlis.module').then(
        (m) => m.MajlisModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
