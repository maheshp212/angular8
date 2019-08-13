import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() users:any;

  @Output() sendIndex = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.users);
  }

  selectUser(i){
    this.sendIndex.emit(i);
  }

}
