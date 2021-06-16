import { Component, OnInit } from '@angular/core';
import { Ingredent } from '../shared/ingredient.model';
import { ShopingListService } from '../shared/shoping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredent :Ingredent[];
  constructor(private slService: ShopingListService) { }

  ngOnInit() {
    this.ingredent = this.slService.getIngredient();
    this.slService.ingrdientChanged.subscribe((ingredent:Ingredent[])=>{
      this.ingredent = ingredent;
    })
  }
  // onIngredentAdded(ingredent:Ingredent){
  //   this.ingredent.push(ingredent);

  // }
}
