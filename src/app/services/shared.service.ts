import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PizzaModel } from '../models/PizzaModel';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private subject = new Subject<any>();

  sendClickEvent(pizza:PizzaModel){
    this.subject.next(pizza);
  }

  getClickEvent(){
    return this.subject.asObservable();
  }
}
