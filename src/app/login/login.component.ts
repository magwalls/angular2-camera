import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public appService: AppService) { }

  login() {
    console.log('loggin in');
    this.appService.user = 'nyanvändare';
  }

  ngOnInit() {
  }

}
