import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

export function passwordMatchValidator(g: FormGroup){
    return (control: AbstractControl): ValidationErrors | null => {
        if(g.get('password')?.value === g.get('confirmPassword')?.value){
            return null
        }
        else{
            return {'passwordMismatch':true}
        }
    }
}

export function mustMatch(controlName: string, mismatchingControlName:string){
    return (formGroup: FormGroup)=>{
        const control = formGroup.controls[controlName]
        const matchingControl = formGroup.controls[mismatchingControlName]

        if(matchingControl.errors != null && matchingControl.errors['passwordsMismatch'] == null){
            return
        }
        if(matchingControl.value !== control.value){
            return matchingControl.setErrors({passwordMismatch:true})
        }else{
            return matchingControl.setErrors(null)
        }
    }
}