import { Component, Input } from '@angular/core';
import { PizzaModel } from 'src/app/models/PizzaModel';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.css']
})
export class PizzaCardComponent {
  @Input() pizza: PizzaModel;
  constructor(){
    this.pizza = {
      id:0,
      name:'',
      description: '',
      price: 0
    }
  }
}
