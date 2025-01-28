import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddPizzaPageComponent } from './pages/add-pizza-page/add-pizza-page.component';


export const routes: Routes = [
  {'path': '', 'component': HomePageComponent},
  {'path': 'addPizza', 'component': AddPizzaPageComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
