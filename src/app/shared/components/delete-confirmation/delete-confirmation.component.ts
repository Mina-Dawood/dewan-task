import {
  Component,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dewan-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss'],
})
export class DeleteConfirmationComponent {
  @ViewChild('contentTemp') contentTemp!: TemplateRef<string>;

  @Input() title!: string;
  @Input() description!: string;
  @Input() isLoading!: boolean;
  @Output() deleteClick = new EventEmitter();
  @Output() closeClick = new EventEmitter();

  constructor(private readonly modal: NgbModal) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.modal.open(this.contentTemp, {
        keyboard: false,
        backdrop: 'static',
      });
    }, 0);
  }

  close(): void {
    this.modal.dismissAll();
    this.closeClick.emit();
  }
}
