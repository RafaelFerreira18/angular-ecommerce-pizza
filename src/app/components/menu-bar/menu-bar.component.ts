import { Component, ElementRef, HostBinding, Input} from '@angular/core';
import { Subscription } from 'rxjs';
import { PizzaModel } from 'src/app/models/PizzaModel';
import { UserModel } from 'src/app/models/UserModel';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})


export class MenuBarComponent {
  @Input() user: UserModel;
  openDropdown: boolean = false;
  openCart: boolean = false;
  openProfile: boolean = false;
  pizzaEventSubscription:Subscription;
  loginEventSubscription:Subscription;
  totalPrice:number = 0;
  loggedIn: Boolean = false;
  constructor(private sharedService:SharedService){
    this.user ={
      name: 'Rafael',
      password: '',
      email: '',
      cart:[]
    }
    this.pizzaEventSubscription=
    this.sharedService.getClickEvent().subscribe((pizza) =>{
      this.addToCart(pizza)
    })
    this.loginEventSubscription=
    this.sharedService.getLogin().subscribe((bool) =>{
      this.loggedIn = bool;
    })
  }
  public deleteCart(){
    this.user.cart = []
    this.totalPrice = 0;
  }

  public addToCart(pizza:PizzaModel){
    this.user.cart.push(pizza)
    this.totalPrice += Number(pizza.price.toPrecision())
  }
  public openAndCloseCart(){
    if(this.openProfile == true){
      this.openProfile = false;
    }
    this.openCart=!this.openCart;
  }

  public openAndCloseProfile(){
    if(this.openCart == true){
      this.openCart = false;
    }
    this.openProfile=!this.openProfile;
  }

  public logOff(){
    this.loggedIn = false
  }

}
