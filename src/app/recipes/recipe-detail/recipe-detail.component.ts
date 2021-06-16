import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { realpath } from 'fs';
import { RecipeService } from 'src/app/shared/recipe-service.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
   recipe : Recipe;
  constructor(public recipeService : RecipeService,private route:ActivatedRoute , private router : Router) { }
  id:number;
  ngOnInit() {
    // const id = this.route.snapshot.params['id'];

    this.route.params.subscribe((params:Params)=>{
      console.log('params--->',params);
      
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipeById(this.id);
    })
  }
  onAddToShopingList(){
    this.recipeService.addToShopingList(this.recipe.ingredient);
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});
    // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
  }
}
