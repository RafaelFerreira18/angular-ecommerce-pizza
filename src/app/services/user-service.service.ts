import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserModel } from '../models/UserModel';
import { PizzaModel } from '../models/PizzaModel';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/Api';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private loggedIn = new Subject<Boolean>();
  private user = new Subject<UserModel>();
  private cart = new Subject<PizzaModel[]>
  private userBaseUrl = '';
  private allUserData: UserModel[] | any;
  private userData: UserModel | any;
  constructor(private http: HttpClient){
    this.userBaseUrl = environment.userApi
  }
  sendLogin(loggedIn: boolean){
    this.loggedIn.next(loggedIn)
  }

  getLogin(){
    return this.loggedIn.asObservable();
  }

  sendUser(user: UserModel){
    this.user.next(user)
  }

  getUser(){
    return this.user.asObservable();
  }

  getUserData(userId: Number): Observable<UserModel>{
    this.userData = this.http.get<UserModel>(`${this.userBaseUrl}/${userId}`)
    return this.userData
  }

  getAllUserData():Observable<UserModel[]>{
    this.allUserData = this.http.get<UserModel[]>(this.userBaseUrl)
    return this.allUserData
  }

  registerUser(user:any){
    return this.http.post(this.userBaseUrl, user)
  }
}
