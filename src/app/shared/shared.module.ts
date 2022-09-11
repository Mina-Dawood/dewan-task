import {
  NgbPaginationModule,
  NgbToastModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ButtonComponent } from './components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { FilterPipe, GenericPipe, NumberToArrayPipe } from './pipes';
import { ChartsModule } from 'ng2-charts';
import {
  SkeletonLoaderComponent,
  SpinnerComponent,
  PaginationComponent,
} from './components';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { ToastsContainerComponent } from './components/toasts-container/toasts-container.component';

const SHARED_COMPONENTS = [
  LoaderComponent,
  ButtonComponent,
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
];

@NgModule({
  declarations: [...SHARED_COMPONENTS, ...SHARED_PIPES],
  imports: [CommonModule, ...SHARED_MODULES],
  exports: [...SHARED_COMPONENTS, ...SHARED_PIPES, ...SHARED_MODULES],
})
export class SharedModule {}
