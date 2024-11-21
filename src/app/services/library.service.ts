import { Injectable } from '@angular/core';
import { Recipe } from '../models/library.mode';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipeList: Recipe[] = [
    {
      name: 'Main Course: Perfect Turkey',
      price: '250',
      star: '★★★☆☆',
      image:'https://www.allrecipes.com/thmb/c5iSN0MOyFyrYqdwNJbknf25a84=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/43655-perfect-turkey-ddmfs-4x3-0716-210f5dfcdc964a78b40fbf2d8572bf5b.jpg',
    },
    {
      name: 'Main Course: The Best Turkey Gravy',
      price: '300',
      star: '★★★★☆',
      image: 'https://www.allrecipes.com/thmb/2GNSdIPvJotrkCOgecUuBz5sDUs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/215325-the-best-turkey-gravy-070-3x2-LSH-fc4dc5cb9511431b9dc3344011983154.jpg',
    },
    {
      name: 'Sides: Holiday Dressing',
      price: '150',
      star: '★☆☆☆☆',
      image: 'https://www.allrecipes.com/thmb/qnVlFJhRJFRkGpLuYMZkd8PLhFA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Holiday-Dressing-by-MrsFisher0729-4e10ba64d81f41d49b0324298197db99.jpg',
    },
    {
      name: 'Sides: Spinach Pomegranate Salad',
      price: '250',
      star: '★★☆☆☆',
      image:'https://www.allrecipes.com/thmb/U5aTCOLDj5BRw0DItkk1Lj9LQI0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/127167-Spinach-Pomegranate-Salad-DDMFS-3x4-a4c6b5062a704821a8ad378ddd71a890.jpg',

    },
    {
      name: '\n' +
        'of 12\n' +
        'Appetizer: Sweet, Salty, Spicy Party Nuts',
      price: '150',
      star: '★★★☆☆',
      image: 'https://www.allrecipes.com/thmb/7St2j7BcOMkAxcwMjDwIISV2ap8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-230159-sweet-salty-spicy-party-nuts-DDMFS-4x3-beauty-f9f5a9b5da754f4da878dd9916b6be36.jpg',
    },


  ];

  getRecipe() {
    return this.recipeList;
  }
}
