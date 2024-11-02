import { Component } from '@angular/core';
import { CategorySaptarshi } from '../../../../Models/categorysaptarshi';
import { CourseCategoryService } from '../../../../services/course-category.service';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrl: './viewcategory.component.scss'
})
export class ViewcategoryComponent {
  arrCategory:CategorySaptarshi[] = []
  category:CategorySaptarshi = new CategorySaptarshi(0,'');

  constructor(private categoryService:CourseCategoryService){
    this.arrCategory = this.categoryService.getAllCategories()
  }
}
