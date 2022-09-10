import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ButtonComponent } from './components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { FilterPipe } from './pipes/filter.pipe';
import { SkeletonLoaderComponent, SpinnerComponent } from './components';
import { PaginationModule } from 'ngx-bootstrap/pagination';

const SHARED_COMPONENTS = [
  LoaderComponent,
  ButtonComponent,
  SpinnerComponent,
  SkeletonLoaderComponent,
];
const SHARED_PIPES = [FilterPipe];
const SHARED_MODULES = [TranslateModule, PaginationModule];

@NgModule({
  declarations: [...SHARED_COMPONENTS, ...SHARED_PIPES],
  imports: [CommonModule, ...SHARED_MODULES],
  exports: [...SHARED_COMPONENTS, ...SHARED_PIPES, ...SHARED_MODULES],
})
export class SharedModule {}
