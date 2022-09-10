import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dewan-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() pageSize!: number;
  @Input() totalItems!: number;
  @Output() pageChange = new EventEmitter<number>();
}
