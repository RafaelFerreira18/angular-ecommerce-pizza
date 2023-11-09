import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/UserModel';
import { SharedService } from 'src/app/services/shared.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{
  users = [
    {
        name:'Rafael',
        email:'rafa123@gmail.com',
        password:'123'
    },
    {
        name:'Luisa',
        email:'luisa123@gmail.com',
        password:'1234'
    },
    {
        name:'Bob',
        email:'bob123@gmail.com',
        password:'12345'
    },
]
  formLogin = this.loginFormBuilder.group({
    email: '',
    password: ''
  });
  formRegister = this.registerFormBuilder.group({
    email:'',
    password:''
  })
  loggedIn: boolean = false
  register: boolean = true
  user: UserModel = {
    name: '',
    email: '',
    password: '',
    cart: []
  };

  constructor(
    private loginFormBuilder: FormBuilder,
    private registerFormBuilder: FormBuilder,
    private sharedService: SharedService,
    private userService: UserServiceService,
    private _router: Router,
  ){}

  changeToRegister(){
    this.register =! this.register
  }

  onSubmitLogin(){
    for(var u of this.users){
      if(u.email == this.formLogin.value.email && u.password == this.formLogin.value.password){
        this.loggedIn = true
        this.userService.sendLogin(this.loggedIn)
        this.user.name = u.name
        this.user.email = u.email
        this.user.password = u.password
        this.userService.sendUser(this.user)
        this._router.navigate([''])
        break;
      }
      else{
        console.log('not found!')
      }
    }
  }
  onSubmitRegister(){
    var registeringUser = {
      name: '',
      email: String(this.formRegister.value.email),
      password: String(this.formRegister.value.password)
    }
    this.users.push(registeringUser)
  }
}