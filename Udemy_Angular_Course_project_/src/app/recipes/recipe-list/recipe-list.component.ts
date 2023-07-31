import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

  //when we call new Recipe(), it is referring to the constructor we made for the Recipe model
  recipes: Recipe[] = [
    new Recipe('Spaghetti Carbonara',"a fancy kind of spaghetti", "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg"),
    new Recipe("Fish Tacos", "Tacos with salmon and tilpia", "https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg"),
    new Recipe("Baked Potato", "Its a potato", "https://www.seriouseats.com/thmb/HE1bLBW6b5ismmns-6ce3rzGldY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__10__20161004-baked-potato-vicky-wasik-10-7cfe107d3d6b4c7eb73aeb73c1246735.jpg")
  ];
}
//a model should be a blueprint for the objects we make (example we need a model for recipe and ingredient to know how they are formatted in our project)
// we would make the model by creating a class in a typescript file