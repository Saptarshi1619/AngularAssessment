import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategorySaptarshi } from '../../../../Models/categorysaptarshi';
import { CourseCategoryService } from '../../../../services/course-category.service';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrl: './updatecategory.component.scss'
})
export class UpdatecategoryComponent {
  categoryForm: FormGroup;
  submitted = false;
  arrCategory: CategorySaptarshi[] = [];
  category: CategorySaptarshi = new CategorySaptarshi(0, '');
  idUpdated: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CourseCategoryService
  ) {
    // Fetch all categories initially
    this.categoryService.getAllCategory().subscribe(data => {
      this.arrCategory = data;
    });
    
    // Initialize the form group
    this.categoryForm = this.formBuilder.group({
      id: [0],
      description: ['']
    });
  }

  ngOnInit(): void {
    // Initialize the form with validations
    this.categoryForm = this.formBuilder.group({
      id: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    const id = this.categoryForm.value.id;
    const description = this.categoryForm.value.description; // Corrected to 'description'

    if (id && description && this.categoryForm.valid) {
      this.category = new CategorySaptarshi(id, description);

      // Call the service to update the category
      this.categoryService.updateCategory(this.category).subscribe(
        data => {
          console.log('Category updated:', data);
          // Optionally, handle the UI after successful update (e.g., show a success message, reset form)
        },
        error => {
          console.error('Error updating category:', error);
        }
      );
    } else {
      this.categoryForm.markAllAsTouched(); // Trigger validation messages
    }
  }

  onChangeType(evt: any): void {
    const idObtained = evt.target.value;
    this.idUpdated = parseInt(idObtained.split(':')[0].trim(), 10); // Parse the ID

    // Fetch the selected category by its ID
    this.categoryService.getCategoryById(this.idUpdated).subscribe(data => {
      this.category = data;
      // Populate the form with the category details
      this.categoryForm.get('id')?.setValue(this.category.id);
      this.categoryForm.get('description')?.setValue(this.category.description);
    });
  }
}
