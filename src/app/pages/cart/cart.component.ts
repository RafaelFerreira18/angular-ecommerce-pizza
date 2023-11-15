import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PizzaModel } from 'src/app/models/PizzaModel';
import { UserModel } from 'src/app/models/UserModel';
import { OrderService } from 'src/app/services/order.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public cart:PizzaModel[] = [];
  constructor(private orderService: OrderService){
    console.log(this.orderService.getOrder(1).subscribe());
  }
}