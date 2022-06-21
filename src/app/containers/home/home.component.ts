import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  login: any = {
    username : '',
    password : ''
  }
  submited = false
  ngOnInit(): void {
  }

  logginform(loginForm: any ) {
    console.log(this.login)
    this.submited = true
    if(loginForm.invalid) {
          return;
    }
  }
}
