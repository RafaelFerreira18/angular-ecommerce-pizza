import { Injectable } from '@angular/core';
import { PizzaModel } from '../models/PizzaModel';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/Api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzaBaseUrl = ''
  private allPizzaData : PizzaModel[] | any
  constructor(private http: HttpClient) { 
    this.pizzaBaseUrl = environment.pizzaApi
  }

  getAllPizzaData():Observable<PizzaModel[]>{
    this.allPizzaData = this.http.get<PizzaModel[]>(this.pizzaBaseUrl)
    return this.allPizzaData
  }

  postPizza(pizza: FormData){
    return this.http.post(this.pizzaBaseUrl, pizza)
  }
}
