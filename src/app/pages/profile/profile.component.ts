import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/UserModel';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user:UserModel = {
    name: '',
    email: '',
    password: '',
    cart: [],
    role: 'user'
  };
  constructor(private userService:UserServiceService){}

  ngOnInit(): void{
    this.getUserData(1)
  }
  getUserData(id:Number){
    this.userService.getUserData(id).subscribe({
      next:(res) =>{
        this.user = {
          name: res.name,
          email: res.email,
          password: res.password,
          cart: [],
          role: 'user'
        }
      }
    })
  }
}
