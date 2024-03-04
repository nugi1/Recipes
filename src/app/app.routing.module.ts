import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignComponent } from './sign/sign.component';
import { HomeComponent } from './home/home.component';
import { RecipeDetailsComponent } from './recipe/recipe_details/recipe-details.component';
import { AddRecipeComponent } from './forms/add-recipe/add-recipe.component';
import { ChangeRecipeComponent } from './change_recipe/change-recipe/change-recipe.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'sign', component: SignComponent},
    {path: 'add', component: AddRecipeComponent},
    {path: 'detailed', component: RecipeDetailsComponent},
    {path: 'change', component: ChangeRecipeComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}