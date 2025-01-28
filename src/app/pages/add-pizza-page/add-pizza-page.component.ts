import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddNewPizzaComponent } from '../../components/add-new-pizza/add-new-pizza.component';

@Component({
  selector: 'app-add-pizza-page',
  standalone: true,
  imports: [CommonModule, AddNewPizzaComponent],
  templateUrl: './add-pizza-page.component.html',
  styleUrls: ['./add-pizza-page.component.css']
})
export class AddPizzaPageComponent {
  
}
