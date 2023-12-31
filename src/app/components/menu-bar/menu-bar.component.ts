import { Component, ElementRef, HostBinding, Input} from '@angular/core';
import { Subscription } from 'rxjs';
import { PizzaModel } from 'src/app/models/PizzaModel';
import { UserModel } from 'src/app/models/UserModel';
import { OrderService } from 'src/app/services/order.service';
import { SharedService } from 'src/app/services/shared.service';
import { UserServiceService } from 'src/app/services/user-service.service';
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
  userEventSubscription: Subscription;
  totalPrice:number = 0;
  loggedIn: Boolean = false;
  constructor(private sharedService:SharedService, private userService: UserServiceService, private orderService: OrderService){
    this.user ={
      name: '',
      password: '',
      email: '',
      cart:[],
      role: 'user'
    }
    this.pizzaEventSubscription=
    this.sharedService.getClickEvent().subscribe((pizza) =>{
      this.addToCart(pizza)
    })
    this.loginEventSubscription=
    this.userService.getLogin().subscribe((bool) =>{
      this.loggedIn = bool;
    })
    this.userEventSubscription=
    this.userService.getUser().subscribe((user) =>{
      this.user = user
    })
  }
  public deleteCart(){
    this.user.cart = []
    this.totalPrice = 0;
  }

  public addToCart(pizza:PizzaModel){
    this.user.cart.push(pizza)
    this.totalPrice += Number(pizza.price.toFixed(2))
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
    this.openAndCloseProfile();
    this.deleteCart();
    this.loggedIn = false
  }

  public goToCart(){
    var pizzaOrder = [

    ]
    for(var p of this.user.cart){
      var tmpObject = {
        pizza:{
          id:p.id,
          pizzaName: p.pizzaName,
          description: p.description,
          price: p.price,
          pizzaImage: p.pizzaImg
        }
      }
      pizzaOrder.push(tmpObject)
    }
    this.orderService.postOrder(pizzaOrder).subscribe();
  }

  public accountDetails(){
    this.userService.sendUser(this.user)
  }
}
