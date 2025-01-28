import { Component, Input } from '@angular/core';
import { PizzaModel } from '../../models/PizzaModel';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-card-pizza',
  standalone: true,
  imports: [],
  templateUrl: './card-pizza.component.html',
  styleUrl: './card-pizza.component.css'
})
export class CardPizzaComponent {
  @Input() pizza: PizzaModel;
  constructor(private sharedService: SharedService){
    this.pizza = {
      id:0,
      pizzaName:'',
      description: '',
      price: 0,
      pizzaImg: {
        file: new File(["foo"], "foo.txt", {
          type: "text/plain",
        }),
        url: 'undefined'
      }
    }
  }
  public addToCart(){
    this.sharedService.sendClickEvent(this.pizza);
  }
}
