import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipee';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent implements OnInit{
  recipes!: Recipe[]; 
  @ViewChild('search') searchTerm?: ElementRef;

  constructor(private rec_service: RecipeService){}

  ngOnInit(){
    this.getRecipes()
  }

  getRecipes(){
    this.rec_service.getRecipes().subscribe(
      (data: Recipe[]) => {
        this.recipes = data;
        console.log(data)
      },
      error => {
        console.log(error);
      }
    )
  }

  
  getFavourites(){
    this.rec_service.getFavourites().subscribe(
      (data: Recipe[]) => {
        this.recipes = data;
        console.log(data)
      },
      error => {
        console.log(error);
      }
    );
  }

  onSearch(){
    let name = this.searchTerm?.nativeElement.value;
    this.recipes = this.recipes.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
  }

  onReset(){
    this.getRecipes();
  }
}
