import { Component} from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  model: NgbDateStruct;
  date: {year: number, month: number};


  images = [
    {img: 'https://picsum.photos/id/944/900/500', title:'Hello', label:'im a label'},
    {img: 'https://picsum.photos/id/1011/900/500', title:'Hello2', label:'im a label2'},
    {img: 'https://picsum.photos/id/984/900/500', title:'Hello3', label:'im a label3'}
  ]
  constructor(private calendar: NgbCalendar) { }
  selectToday() {
    this.model = this.calendar.getToday();
  }


}
