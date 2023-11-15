import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CartComponent } from './pages/cart/cart.component';
import { AddPizzaPageComponent } from './pages/add-pizza-page/add-pizza-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'Cardapio',
    component: CardapioComponent
  },
  {
    path:'Login',
    component: LoginComponent
  },
  {
    path:'Sobre',
    component:AboutComponent
  },
  {
    path:'Perfil',
    component:ProfileComponent
  },
  {
    path:'Carrinho',
    component:CartComponent
  },
  {
    path:'Adicionar',
    component:AddPizzaPageComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
