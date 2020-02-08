import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  @Input() users;
  @Output() sendUserIndex = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getuser(index){
    this.sendUserIndex.emit(index);
  }
}
