import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PizzaModel } from '../../models/PizzaModel';
import { SharedService } from '../../services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  cart: PizzaModel[] = [];
  pizzaEventSubscription: Subscription;
  isCartDropdownOpen = false;

  constructor(private sharedService:SharedService){
    this.pizzaEventSubscription=
    this.sharedService.getClickEvent().subscribe((pizza) =>{
      this.addToCart(pizza)
    })
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleCartDropdown() {
    this.isCartDropdownOpen = !this.isCartDropdownOpen;
  }

  removeFromCart(item: any) {
    const index = this.cart.indexOf(item);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  addToCart(pizza: PizzaModel){
    this.cart.push(pizza);
  }
}
