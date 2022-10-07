import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';
  email = "Email Address";
  msg1 = "We'll never share your email with anyone else.";
  password = "Password";
  msg2 = "Check me out";
  submit = "Submit";
  currUrl = window.location.href;
}
