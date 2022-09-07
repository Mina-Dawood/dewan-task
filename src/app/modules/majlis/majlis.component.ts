import { Component, OnInit } from '@angular/core';
import { MajlisService } from '@app/shared/services';

@Component({
  selector: 'dewan-majlis',
  templateUrl: './majlis.component.html',
  styleUrls: ['./majlis.component.scss']
})
export class MajlisComponent implements OnInit {

  constructor(private readonly majlisService: MajlisService) { }

  ngOnInit(): void {
    this.majlisService.getItems().subscribe(console.log)
  }

}
