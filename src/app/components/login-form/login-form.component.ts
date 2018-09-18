import { Component, OnInit } from '@angular/core';
import { FirebaseLService } from '../../services/firebase-l.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  constructor(
    public fb: FirebaseLService
  ) { }

  ngOnInit() {
    console.log('login form worcks');
  }

  login(){
    this.fb.signIn(
      this.form.get('email').value,
      this.form.get('password').value
      )
  }

}
