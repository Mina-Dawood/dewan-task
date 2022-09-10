import { Majlis } from '@app/shared/interfaces';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MajlisService } from '@app/shared/services';

@Component({
  selector: 'dewan-majlis',
  templateUrl: './majlis.component.html',
  styleUrls: ['./majlis.component.scss']
})
export class MajlisComponent implements OnInit {
  majlisList$!: Observable<Majlis[]>;

  constructor(private readonly majlisService: MajlisService) { }

  ngOnInit(): void {
    this.majlisList$ = this.majlisService.getItems();
  }

}
