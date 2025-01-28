import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HomeComponent } from "../../components/home/home.component";
import { CardapioComponent } from "../../components/cardapio/cardapio.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, CardapioComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
