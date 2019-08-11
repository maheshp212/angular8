import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'b36';
  users: any = [
    {fname:'asdf', lname:'asdf', asdfasdf:56},
    {fname:'asdf1', lname:'asdf1', asdfasdf:34},
    {fname:'asdf2', lname:'asdf2', asdfasdf:456},
    {fname:'asdf3', lname:'asdf3', asdfasdf:5676},
    {fname:'asdf4', lname:'asdf4', asdfasdf:566},
    {fname:'kk', lname:'ll', asdfasdf:567},
  ]
}
