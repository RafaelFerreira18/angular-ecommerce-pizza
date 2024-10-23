import { Component } from '@angular/core';
import { map } from 'rxjs';
import { PizzaModel } from 'src/app/models/PizzaModel';
import { ImageProcessingService } from 'src/app/services/image-processing.service';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
