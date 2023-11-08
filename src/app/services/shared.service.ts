import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PizzaModel } from '../models/PizzaModel';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private pizza = new Subject<any>();
  private loggedIn = new Subject<Boolean>();
  private user = new Subject<UserModel>();

  sendClickEvent(pizza:PizzaModel){
    this.pizza.next(pizza);
  }

  getClickEvent(){
    return this.pizza.asObservable();
  }

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
