import { Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})


export class MenuBarComponent {
  smallPizzaCard!: ElementRef;
  openDropdown: boolean = false;
  openCart: boolean = false;
  constructor(){}
  public deleteCart(){
    var answer = prompt("Quer apagar todo o carrinho? Digite sim ou não")
    if(answer == "sim"){
      var smallPizzaCard = document.getElementsByClassName("small-pizza-card")
      var arr = [].slice.call(smallPizzaCard);
      arr.forEach(function(item,index){
        smallPizzaCard.item(index)!.innerHTML = "";
      })
    }
  }
}
