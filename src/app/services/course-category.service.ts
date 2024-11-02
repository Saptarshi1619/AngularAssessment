import { Injectable } from '@angular/core';
import { CategorySaptarshi } from '../Models/categorysaptarshi';

@Injectable({
  providedIn: 'root'
})
export class CourseCategoryService {

  private categories: CategorySaptarshi[] = [
    {
      id: 1,
      description: 'Programming Languages',
    },
    {
      id: 2,
      description: 'Web Development',
    },
    {
      id: 3,
      description: 'Database Management',
    },
    {
      id: 4,
      description: 'Software Engineering',
    },
    {
      id: 5,
      description: 'Data Science',
    },
  ];

  constructor() { }

  getAllCategories(): CategorySaptarshi[] {
    return this.categories;
  }

  getCategoryById(id: number): CategorySaptarshi {
    let defaultCategory = new CategorySaptarshi(0, '');
    for (var i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        console.log(this.categories[i]);
        return this.categories[i];
      }
    }
    return defaultCategory;
  }

  addCategory(category: CategorySaptarshi): void {
    this.categories.push(category);
  }

  updateCategory(updatedCategory: CategorySaptarshi): void {
    const index = this.categories.findIndex(
      (category) => category.id === updatedCategory.id
    );
    if (index !== -1) {
      this.categories[index] = updatedCategory;
    }
  }

  deleteCategory(id: number): void {
    this.categories = this.categories.filter((category) => category.id !== id);
  }
}
