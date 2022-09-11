import { ReactiveFormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbToastModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { TranslateModule } from '@ngx-translate/core';
import { FilterPipe, GenericPipe, NumberToArrayPipe } from './pipes';
import { ChartsModule } from 'ng2-charts';
import {
  SkeletonLoaderComponent,
  SpinnerComponent,
  PaginationComponent,
  DeleteConfirmationComponent,
  ToastsContainerComponent,
} from './components';

const SHARED_COMPONENTS = [
  LoaderComponent,
  SpinnerComponent,
  SkeletonLoaderComponent,
  PaginationComponent,
  DeleteConfirmationComponent,
  ToastsContainerComponent,
];
const SHARED_PIPES = [FilterPipe, GenericPipe, NumberToArrayPipe];
const SHARED_MODULES = [
  TranslateModule,
  NgbPaginationModule,
  NgbToastModule,
  ChartsModule,
  CommonModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [...SHARED_COMPONENTS, ...SHARED_PIPES],
  imports: [...SHARED_MODULES],
  exports: [...SHARED_COMPONENTS, ...SHARED_PIPES, ...SHARED_MODULES],
})
export class SharedModule {}
