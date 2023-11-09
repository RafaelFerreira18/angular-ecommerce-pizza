import { Component, Input } from '@angular/core';
import { PizzaModel } from 'src/app/models/PizzaModel';

@Component({
  selector: 'app-small-pizza-card',
  templateUrl: './small-pizza-card.component.html',
  styleUrls: ['./small-pizza-card.component.css']
})
export class SmallPizzaCardComponent {
  @Input() smallPizza: PizzaModel
  constructor(){
    this.smallPizza = {
      id:0,
      pizzaName:'',
      description:'',
      price:0
    }
  }
}
