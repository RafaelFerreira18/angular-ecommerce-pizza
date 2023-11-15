import { Injectable } from '@angular/core';
import { OrderModel } from '../models/OrderModel';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/Api';
import { Observable } from 'rxjs';
import { PizzaModel } from '../models/PizzaModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderBaseUrl = ''
  private order : OrderModel | any
  constructor(private http: HttpClient) { 
    this.orderBaseUrl = environment.orderApi
  }

  getOrder(id:Number):Observable<OrderModel>{
    this.order = this.http.get<OrderModel>(this.orderBaseUrl)
    console.log(this.order)
    return this.order                        
  }

  postOrder(cart: any){
    return this.http.post(this.orderBaseUrl, cart)
  }
}
