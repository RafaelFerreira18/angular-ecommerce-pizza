import { Component, OnInit } from '@angular/core';
import { PizzaModel } from 'src/app/models/PizzaModel';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit{
  pizzasArray: PizzaModel[] = []

  constructor(private pizzaService:PizzaService){}
  ngOnInit(): void {
    this.getAllPizzaData();
  }
  getAllPizzaData(){
    this.pizzaService.getAllPizzaData().subscribe({
      next:(res) => this.pizzasArray = res
    })
  }
  
}
