import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CardPizzaComponent } from "../card-pizza/card-pizza.component";
import { map } from 'rxjs';
import { PizzaModel } from '../../models/PizzaModel';
import { ImageProcessingService } from '../../services/image-processing.service';
import { PizzaService } from '../../services/pizza.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CardPizzaComponent, CommonModule],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css'
})
export class CardapioComponent implements OnInit{
  pizzasArray: PizzaModel[] = []

  constructor(private pizzaService:PizzaService, private imageProcessingService: ImageProcessingService){}
  ngOnInit(): void {
    this.getAllPizzaData();
  }
  
  getAllPizzaData(){
    this.pizzaService.getAllPizzaData()
    .pipe(
      map((x: PizzaModel[], i) => x.map((pizza: PizzaModel) => this.imageProcessingService.createImage(pizza)))
    )
    .subscribe({
      next:(res) => {
        this.pizzasArray = res
        console.log(res)
      }
    })
  }
}
