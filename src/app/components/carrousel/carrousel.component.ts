import { Component, Input } from '@angular/core';
import { PizzaModel } from 'src/app/models/PizzaModel';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {
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
}
