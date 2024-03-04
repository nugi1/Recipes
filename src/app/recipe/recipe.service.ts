import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Recipe } from './recipee';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/recipes'

  constructor(private http: HttpClient) { }

  getRecipes(){
    return this.http.get<any>(this.apiUrl); 
  }


  postRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, recipe);
  }


  delRecipe(id: string){
    return this.http.delete<Recipe>(this.apiUrl + '/' + id);
  }


  updateRecipe(recipe: Recipe): Observable<Recipe> {
    const url = `${this.apiUrl}/${recipe.id}`; 
    return this.http.put<Recipe>(url, recipe);
  }

  addFavourites(recipe: Recipe): Observable<Recipe>{
    const url = "http://localhost:3000/favourites";
    return this.http.post<Recipe>(url, recipe);
  }

  getFavourites(){
    const url = "http://localhost:3000/favourites";
    return this.http.get<Recipe[]>(url);
  }

}
