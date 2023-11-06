import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PizzaModel } from '../models/PizzaModel';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private pizza = new Subject<any>();
  private loggedIn = new Subject<Boolean>();

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


}
