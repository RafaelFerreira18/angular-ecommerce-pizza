import { Component, Input} from '@angular/core';
import { PizzaModel } from 'src/app/models/PizzaModel';
import { UserModel } from 'src/app/models/UserModel';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.css']
})
export class PizzaCardComponent {
  @Input() pizza: PizzaModel;
  constructor(private sharedService: SharedService){
    this.pizza = {
      id:0,
      name:'',
      description: '',
      price: 0
    }
  }
  public addToCart(){
    this.sharedService.sendClickEvent(this.pizza);
  }
}
