import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dewan-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonText!: string;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
}
