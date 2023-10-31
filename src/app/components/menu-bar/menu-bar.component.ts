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
  clickEventsubscription:Subscription;
  totalPrice:number = 0;
  constructor(private sharedService:SharedService){
    this.user ={
      cart:[]
    }
    this.clickEventsubscription=
    this.sharedService.getClickEvent().subscribe((pizza) =>{
      this.addToCart(pizza)
    })
  }
  public deleteCart(){
    var answer = prompt("Quer apagar todo o carrinho? Digite sim ou não")
    if(answer == "sim"){
      this.user.cart = []
    }
  }

  public addToCart(pizza:PizzaModel){
    this.user.cart.push(pizza)
    this.totalPrice += pizza.price
  }
  public openAndCloseCart(){
    this.openCart=!this.openCart;
  }
}
