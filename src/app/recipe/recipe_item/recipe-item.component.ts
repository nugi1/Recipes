import { Component, Input } from '@angular/core';
import { Recipe } from '../recipee';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss'
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;


  constructor(private router: Router, private service: RecipeService) { }
  
  ngOnInit() {
  
  }

  onClick(where: string, rec: Recipe){
    this.router.navigate(['/detailed'], { state: { data: rec } });
  }

  addFavourites(recipe: Recipe){
    this.service.addFavourites(recipe).subscribe(
      response => {
        console.log("Successfully added!")
      }, error => console.log(error)
    )
  }
}
