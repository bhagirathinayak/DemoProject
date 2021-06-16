import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredent } from 'src/app/shared/ingredient.model';
import { ShopingListService } from 'src/app/shared/shoping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
 @ViewChild('nameInput',{static:false}) nameInputRef:ElementRef;
 @ViewChild('amountInput',{static:false}) amountInputRef:ElementRef;
//  @Output() ingredentAdded = new EventEmitter<Ingredent>();
  constructor(private slService: ShopingListService) { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmt = this.amountInputRef.nativeElement.value;
    const newIngredent = new Ingredent(ingName,ingAmt);
    // this.ingredentAdded.emit(newIngredent);
    this.slService.addIngredient(newIngredent);
  }
}
