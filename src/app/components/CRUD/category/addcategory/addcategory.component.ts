import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategorySaptarshi } from '../../../../Models/categorysaptarshi';
import { CourseCategoryService } from '../../../../services/course-category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrl: './addcategory.component.scss'
})
export class AddcategoryComponent implements OnInit{
  categoryForm: FormGroup;
  submitted = true;
  arrCategory: CategorySaptarshi[] = []
  category = new CategorySaptarshi(0,'')

  constructor(private formbuilder:FormBuilder, private categoryservice:CourseCategoryService){
    //this.arrCategory = this.categoryservice.getAllCategories();
    this.categoryservice.getAllCategory().subscribe(data=>{
      this.arrCategory = data
    })
    this.categoryForm = this.formbuilder.group({
      Id:[0],
      description:['']
    });
  }
  ngOnInit(): void {
    this.categoryForm = this.formbuilder.group({
      Id: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit(){
    this.submitted = true;
    var tempId = 0;
    var maxId = 0;
    
    this.arrCategory.forEach((p) => {
      if (maxId < p.id) {
        maxId = p.id;
      }
    });

    tempId = maxId + 1;

    console.log('Generated Temp ID:', tempId);

    const description = this.categoryForm.value.description;  // Correct field name

    if (description && this.categoryForm.valid) {
      this.category = new CategorySaptarshi(tempId, description);
      this.categoryservice.addCategory(this.category).subscribe(
        data => {
          console.log('Category added:', data);
        },
        error => {
          console.error('Error adding category:', error);
        }
      );
    } else {
      this.categoryForm.markAllAsTouched(); // Trigger validation messages for all fields
    }
  }
}
