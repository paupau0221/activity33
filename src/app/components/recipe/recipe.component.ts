import { Component } from '@angular/core';
import {Recipe} from '../../models/library.mode';
import { RecipeService } from '../../services/library.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  recipeList:  Recipe[] = [];

  constructor(private libraryService: RecipeService) {}

  ngOnInit(): void {
    this.recipeList = this.libraryService.getRecipe();
  }
}
