import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/UserModel';
import { SharedService } from 'src/app/services/shared.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  email = new FormControl('', Validators.required)
  password = new FormControl('', Validators.required)
  formLogin = this.loginFormBuilder.group({
    email: this.email,
    password: this.password
  });
  formRegister = this.registerFormBuilder.group({
    name: '',
    email:'',
    password:'',
  })
  loggedIn: boolean = false
  register: boolean = true
  user: UserModel = {
    name: '',
    email: '',
    password: '',
    cart: [],
    role: 'user'
  };
  private users:UserModel[] = []
  constructor(
    private loginFormBuilder: FormBuilder,
    private registerFormBuilder: FormBuilder,
    private sharedService: SharedService,
    private userService: UserServiceService,
    private _router: Router,
  ){}
  ngOnInit(): void {
    this.getAllUserData();
  }

  changeToRegister(){
    this.register =! this.register
  }

  

  getAllUserData(){
    this.userService.getAllUserData().subscribe({
      next:(res) => this.users = res
    })
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
    var userToRegister = {
      id: 0,
      name: String(this.formRegister.value.name),
      email: String(this.formRegister.value.email),
      password: String(this.formRegister.value.password)
    }
    this.userService.registerUser(userToRegister).subscribe(() =>{
      console.warn(userToRegister)
      this.changeToRegister()
    })
  }
}