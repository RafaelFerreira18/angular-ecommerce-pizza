import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { PizzaModel } from 'src/app/models/PizzaModel';
import { ImageProcessingService } from 'src/app/services/image-processing.service';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
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
