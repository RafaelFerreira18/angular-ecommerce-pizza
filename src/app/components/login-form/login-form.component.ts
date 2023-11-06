import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Login } from 'src/app/formModel/login';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{
  users = [
    {
        email:'rafa123@gmail.com',
        password:'123'
    },
    {
        email:'luisa123@gmail.com',
        password:'1234'
    },
    {
        email:'bob123@gmail.com',
        password:'12345'
    },
]
  formLogin = this.formBuilder.group({
    email: '',
    password: ''
  });
  loggedIn: boolean = false

  constructor(
    private formBuilder: FormBuilder, 
    private sharedService: SharedService,
    private _router: Router,
  ){}

  onSubmit(){
    for(var u of this.users){
      if(u.email == this.formLogin.value.email && u.password == this.formLogin.value.password){
        this.loggedIn = true
        this.sharedService.sendLogin(this.loggedIn)
        this._router.navigate([''])
        break;
      }
      else{
        console.log('not found!')
      }
    }
  }
}
