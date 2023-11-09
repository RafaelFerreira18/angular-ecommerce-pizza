import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PizzaModel } from 'src/app/models/PizzaModel';
import { UserModel } from 'src/app/models/UserModel';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  private userEventSubscription: Subscription;
  public cart:PizzaModel[] = [];
  constructor(private userService:UserServiceService){
    this.userEventSubscription = 
    this.userService.getCart().subscribe((cart) =>{
      this.cart = cart;
    })
  }
}
