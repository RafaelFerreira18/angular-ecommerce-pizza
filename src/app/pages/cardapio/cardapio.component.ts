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
      name: 'Margherita',
      description: 'Tomates grape, mussarela e manjericão ao pomodori pelati',
      price: 35.00
    },
    {
      id: 2,
      name: 'Calabrese',
      description: 'Calabresa defumada, mussarela e cebola ao pomodori pelati',
      price: 35.00
    },
    {
      id: 3,
      name: 'Portoghese',
      description: 'Presunto, mussarela, ovo, azeitona, cebola e ervilhas frescas ao pomodori pelati',
      price: 40.00
    },
    {
      id: 4,
      name: 'Arabiatta',
      description: 'Pepperoni, tomates grape, mussarela e manjericão ao pomodori pelati(levemente apimentado)',
      price: 40.00
    },
    {
      id: 5,
      name: 'Filetto',
      description: 'Filé bovino, tomates grape, mussarela e manjericão ao pomodori pelati',
      price: 40.00
    },
    {
      id: 6,
      name: 'Della Karlota',
      description: 'Lombo defumado, bacon, abacaxi flambado, mussarela e manjericão ao pomodori pelati',
      price: 45.00
    },
    {
      id: 7,
      name: 'Dello Klebs',
      description: 'Camarão rosa, alho poró e mussarela ao pomodori pelati',
      price: 45.00
    },
  ]
}
