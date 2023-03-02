import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({


    },[])
  }

  getDataForm(){

  }




  }



