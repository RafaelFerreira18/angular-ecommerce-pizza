import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PizzaModel } from '../models/PizzaModel';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private pizza = new Subject<any>();

  sendClickEvent(pizza:PizzaModel){
    this.pizza.next(pizza);
  }

  getClickEvent(){
    return this.pizza.asObservable();
  }
}
