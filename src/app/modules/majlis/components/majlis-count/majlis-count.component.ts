import { Subject, takeUntil } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MajlisService } from '@app/shared/services';

@Component({
  selector: 'dewan-majlis-count',
  templateUrl: './majlis-count.component.html',
  styleUrls: ['./majlis-count.component.scss'],
})
export class MajlisCountComponent implements OnInit, OnDestroy {
  majlisCount: number = 0;

  private destroy$ = new Subject<void>();

  constructor(private readonly majlisService: MajlisService) {}

  ngOnInit(): void {
    this.majlisService
      .getListChangedSubject()
      .pipe(takeUntil(this.destroy$))
      .subscribe((list) => (this.majlisCount = list.length));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
