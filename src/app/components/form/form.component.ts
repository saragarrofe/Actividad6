import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  title: string = 'Registro'

  formModel: FormGroup;

  constructor(
    
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute

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
      console.log('response', response)
      if (response.id){
        alert(`usuario ${response.first_name} con id ${response.id} se ha creado correctamente`);
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

  ngOnInit(): void {
    //debemos capturar la ruta activa.
    this.activatedRoute.params.subscribe((params:any)=> {

      let id: string = (params.id); 
      if (id) {
        this.title = 'Actualizar';

      }
   
      console.log('params.id', params.id)
    }) 
  }

  /*
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id: string = (params.id)
      console.log('id', id)

      let response: any = await this.usersService.getById(id);
      console.log('response', response)

      this.user = response;


  */




  }



