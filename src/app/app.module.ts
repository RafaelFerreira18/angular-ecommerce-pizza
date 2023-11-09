import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { PizzaCardComponent } from './components/pizza-card/pizza-card.component';
import { SmallPizzaCardComponent } from './components/menu-bar/small-pizza-card/small-pizza-card.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CartComponent } from './pages/cart/cart.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { CouponsComponent } from './pages/coupons/coupons.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    CardapioComponent,
    PizzaCardComponent,
    SmallPizzaCardComponent,
    LoginComponent,
    LoginFormComponent,
    AboutComponent,
    ProfileComponent,
    CartComponent,
    FooterBarComponent,
    CouponsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
