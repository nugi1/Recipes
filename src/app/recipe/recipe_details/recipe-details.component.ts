import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent {
  recipe?: Recipe;

  constructor(private service: RecipeService, private router: Router){

  }

  ngOnInit(){
    this.getRecipe();
  }

  getRecipe(){
    this.recipe = history.state.data;
  }

  onDelete(id: string){
    console.log(id);
    this.service.delRecipe(id).subscribe(response => 
      {
        console.log("Deleted successfully!");
      }, error => console.log(error));
  }

  onEdit(rec: Recipe){
    this.router.navigate(['/change'], { state: { data: rec } });
  }

}
