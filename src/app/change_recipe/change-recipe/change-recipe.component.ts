import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from '../../recipe/recipe.service';
import { Recipe } from '../../recipe/recipee';

@Component({
  selector: 'app-change-recipe',
  templateUrl: './change-recipe.component.html',
  styleUrl: './change-recipe.component.scss'
})
export class ChangeRecipeComponent implements OnInit{
  recipe!: Recipe; // Define your Recipe model/interface
  recipeForm!: FormGroup;

  constructor(private router: Router, private recipeService: RecipeService, private fb: FormBuilder) { }

  ngOnInit(){
    this.getRecipe();
    let ingredient_4 = ''
    let ingredient_5 = ''
    let ingredient_6 = ''

    if(this.recipe.ingredients[3]){
      ingredient_4 = this.recipe.ingredients[3];
    }

    if(this.recipe.ingredients[4]){
      ingredient_5 = this.recipe.ingredients[4];
    }

    if(this.recipe.ingredients[5]){
      ingredient_6 = this.recipe.ingredients[5];
    }

    this.recipeForm = this.fb.group({
      name: [this.recipe.name, [Validators.required]], // You may use pattern validator for specific format
      description: [this.recipe.description, [Validators.required, Validators.minLength(50), Validators.maxLength(100)]],
      ingredient_1: [this.recipe.ingredients[0], [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      ingredient_2: [this.recipe.ingredients[1], [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      ingredient_3: [this.recipe.ingredients[2], [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      ingredient_4: [ingredient_4, [Validators.minLength(4), Validators.maxLength(15)]],
      ingredient_5: [ingredient_5, [Validators.minLength(4), Validators.maxLength(15)]],
      ingredient_6: [ingredient_6, [Validators.minLength(4), Validators.maxLength(15)]],
      rule: [this.recipe.rule, [Validators.required, Validators.maxLength(300)]],
      url: [this.recipe.url, []]
    });
  }


  getRecipe(){
      this.recipe = history.state.data;
  }

  updateRecipe(recipe: Recipe) {
    console.log(recipe);
    this.recipeService.updateRecipe(recipe).subscribe(
      () => {
        console.log('Recipe updated successfully');
        // Optionally, navigate the user to a different page or update the UI
        this.router.navigate(['/home']);
      },
      (error : any) => {
        console.log(error);
      }
    );
  }

  onSubmit(){
    const formData = this.recipeForm.value;

    const recipeData: Recipe = {
      id: this.recipe.id,
      name: formData.name,
      description: formData.description,
      ingredients: [formData.ingredient_1, formData.ingredient_2, formData.ingredient_3, formData.ingredient_4, formData.ingredient_5, formData.ingredient_6],
      rule: formData.rule,
      url: formData.url
    };

    this.updateRecipe(recipeData);
  }
}
