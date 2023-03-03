import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  formModel: FormGroup;

  constructor(
    
    private usersService: UsersService,
    private router: Router

    ) {

    this.formModel = new FormGroup({
      first_name: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      last_name: new FormControl("", [
        Validators.required
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\S+\@\S+\.\S+/)
        // (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) otro tipo de validador para el campo del mail
      ]),
      image: new FormControl("", [
        Validators.required
      ]),


    },[])
  }

  async getDataForm(){
    try {
      let user: User = this.formModel.value;
      let response = await this.usersService.create(user);
      if (response._id){
        alert(`usuario ${response.first_name} con id ${response._id} se ha creado correctamente`);
        this.router.navigate(['/home']);
    }
  }
  catch(err) {
    console.log(err)
  }

  }

  checkControl(pControlName: string, pError: string): boolean {
    if(this.formModel.get(pControlName)?.hasError(pError) && this.formModel.get(pControlName)?.touched){
      return true
    }
    return false

  }




  }



