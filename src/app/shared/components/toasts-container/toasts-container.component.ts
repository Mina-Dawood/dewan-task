import { Component, TemplateRef } from '@angular/core';
import { ToastService } from '@app/shared/services';

@Component({
  selector: 'dewan-toasts',
  templateUrl: './toasts-container.component.html',
  styleUrls: ['./toasts-container.component.scss'],
  host: {
    class: 'toast-container position-fixed bottom-0 start-0 p-3',
    style: 'z-index: 1200',
  },
})
export class ToastsContainerComponent {
  constructor(public readonly toastService: ToastService) {}

  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
