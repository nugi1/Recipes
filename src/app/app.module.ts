import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignComponent } from './sign/sign.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SignServiceService } from './sign-service.service';
import { RecipeItemComponent } from './recipe/recipe_item/recipe-item.component';
import { AddRecipeComponent } from './forms/add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe/recipe_details/recipe-details.component';
import { ChangeRecipeComponent } from './change_recipe/change-recipe/change-recipe.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    HomeComponent,
    NavBarComponent,
    RecipeComponent,
    RecipeItemComponent,
    AddRecipeComponent,
    RecipeDetailsComponent,
    ChangeRecipeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SignServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }