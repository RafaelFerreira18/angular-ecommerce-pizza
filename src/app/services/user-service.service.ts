import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private loggedIn = new Subject<Boolean>();
  private user = new Subject<UserModel>(); 
  sendLogin(loggedIn: boolean){
    this.loggedIn.next(loggedIn)
  }

  getLogin(){
    return this.loggedIn.asObservable();
  }

  sendUser(user: UserModel){
    this.user.next(user)
  }

  getUser(){
    return this.user.asObservable();
  }
}
