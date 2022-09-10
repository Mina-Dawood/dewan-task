import { Component, Input } from '@angular/core';

@Component({
  selector: 'dewan-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  @Input() width!: number;
  @Input() height!: number;
  @Input() isWhite!: boolean;
}
