import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategorySaptarshi } from '../../../Models/categorysaptarshi';
import { CourseCategoryService } from '../../../services/course-category.service';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrl: './updatecategory.component.scss'
})
export class UpdatecategoryComponent {
  categoryForm: FormGroup;
  submitted!: true;
  arrCategory: CategorySaptarshi[] = []
  category:CategorySaptarshi = new CategorySaptarshi(0,'')
  idUpdated:number = 0;

  constructor(private formBuilder:FormBuilder, private categoryService:CourseCategoryService){
    this.arrCategory = this.categoryService.getAllCategories()
    this.categoryForm = this.formBuilder.group({
      id:[0],
      description:['']
    })
  }

  onSubmit(){
    this.submitted = true;
    let id = this.categoryForm.value.id;
    let description = this.categoryForm.value.name;

    if(id && description){
      this.category = new CategorySaptarshi(this.idUpdated, description)
      this.categoryService.updateCategory(this.category);
    }
  }

  onChangeType(evt:any){
    console.log(evt.target.value);
    var idObtained = evt.target.value;
    this.idUpdated = parseInt(idObtained.split(':')[0].trim());
    console.log(this.idUpdated);
    this.category = this.categoryService.getCategoryById(this.idUpdated);
    this.categoryForm.get('id')?.setValue(this.category.id)
    this.categoryForm.get('description')?.setValue(this.category.description)
  }
}
