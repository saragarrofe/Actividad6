import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl("", [
        Validators.required
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\S+\@\S+\.\S+/)
        // (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) otro tipo de validador para el campo del mail
      ]),
      imagen: new FormControl("", [
        Validators.required
      ]),


    },[])
  }

  getDataForm(){
    console.log(this.formModel.value)

  }

  checkControl(pControlName: string, pError: string): boolean {
    if(this.formModel.get(pControlName)?.hasError(pError) && this.formModel.get(pControlName)?.touched){
      return true
    }
    return false

  }




  }



