import { Component } from '@angular/core';
import { RecipeService } from '../../recipe/recipe.service';
import { Recipe } from '../../recipe/recipee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss'
})
export class AddRecipeComponent {
  recipe!: Recipe;
  recipeForm!: FormGroup;
  name = '';
  description = '';
  ingredient_1 = '';
  ingredient_2 = '';
  ingredient_3 = '';
  ingredient_4 = '';
  ingredient_5 = '';
  ingredient_6 = '';
  rule = '';
  url = '';

  constructor(private recipes: RecipeService, private fb: FormBuilder, private router: Router){}


  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      name: ['', [Validators.required]], // You may use pattern validator for specific format
      description: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(100)]],
      ingredient_1: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      ingredient_2: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      ingredient_3: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      ingredient_4: ['', [Validators.minLength(4), Validators.maxLength(15)]],
      ingredient_5: ['', [Validators.minLength(4), Validators.maxLength(15)]],
      ingredient_6: ['', [Validators.minLength(4), Validators.maxLength(15)]],
      rule: ['', [Validators.required, Validators.maxLength(300)]],
      url: ['', []]
    });
  }


  onSubmit(){
    const formData = this.recipeForm.value;

    const recipeData: Recipe = {
      id: '-1',
      name: formData.name,
      description: formData.description,
      ingredients: [formData.ingredient_1, formData.ingredient_2, formData.ingredient_3, formData.ingredient_4, formData.ingredient_5, formData.ingredient_6],
      rule: formData.rule,
      url: formData.url
    };

    console.log(recipeData);

    // Now you can pass recipeData to your service for posting
    this.recipes.postRecipe(recipeData).subscribe((response: any )=> {
      console.log("Posted successfullt")
      this.router.navigate(['/home'])
    }, (error : any) => console.log(error));
  }

  
}
