import { Component, Input } from '@angular/core';

@Component({
  selector: 'dewan-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent {
  @Input() extraCssClasses!: string;
}
