import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mahesh-table',
  templateUrl: './mahesh-table.component.html',
  styleUrls: ['./mahesh-table.component.scss']
})
export class MaheshTableComponent implements OnInit {
  @Input() headers:any = [];
  @Input() data:any = [];

  constructor() { }

  ngOnInit() {
  }

}
