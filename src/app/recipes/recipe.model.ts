import { Ingredent } from "../shared/ingredient.model";

export class Recipe{
    public name : string;
    public description : string;
    public imagePath : string;
    public ingredient:Ingredent[];
    constructor(name: string, desc: string,imagePath: string,ingredient:Ingredent[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredient = ingredient;
    }
}