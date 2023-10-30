import { Component } from '@angular/core';
import { PizzaModel } from 'src/app/models/PizzaModel';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
  pizzasArray: PizzaModel[] = [
    {
      id: 1,
      name: 'Calabresa',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      price: 69.69
    },
    {
      id: 2,
      name: 'Di Karlotta',
      description: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      price: 59.69
    },
    {
      id: 3,
      name: 'Filetto',
      description: 'cccccccccccccccccccccccccccccccccccccccccccccccc',
      price: 79.69
    },
    {
      id: 4,
      name: 'Pepperonni',
      description: 'dddddddddddddddddddddddddddddddddddddddddddddddddddd',
      price: 89.69
    },
  ]
}
