import { EventEmitter, Injectable } from '@angular/core';
import { Ingredent } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShopingListService {
  ingrdientChanged = new EventEmitter<Ingredent[]>();
  private ingredent :Ingredent[] = [
  new Ingredent("Apples",5),
  new Ingredent("Tomato",10)
];
  constructor() { }
  getIngredient(){
    return [...this.ingredent];
  }
  addIngredient(ingredent:Ingredent){
    this.ingredent.push(ingredent);
    this.ingrdientChanged.emit([...this.ingredent]);
  }
  addIngredients(ingredent:Ingredent[]){
    this.ingredent.push(...ingredent);
    this.ingrdientChanged.emit(this.ingredent.slice());
  }
}
