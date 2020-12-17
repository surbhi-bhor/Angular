import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }
  myArr:string[] = ["Royal Rasoi","Tawa","Maharaja", "Pranaam", "Malvan tadka"];

  public getList(){
    return this.myArr;
  }
}
