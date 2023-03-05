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
  msg: string = "";
  type: string = "";

  constructor(
    
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute

    ) {

    this.formModel = new FormGroup({
      first_name: new FormControl("", [
        Validators.required,
        Validators.minLength(2)
      ]),
      last_name: new FormControl("", [
        Validators.required,
        Validators.minLength(2)
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
    let user: User = this.formModel.value

    if (user.id){
      let response = await this.usersService.update(user);
      this.msg = `usuario ${user.first_name} con id ${user.id} se ha actualizado correctamente`;
      this.type = 'success';
      // this.router.navigate(['/home']);
    }else {
      try {
        let response = await this.usersService.create(user);
        console.log('response', response)
        if (response.id){
          this.msg =`usuario ${user.first_name} con id ${response.id} se ha creado correctamente`;
          this.type = 'success';
          // this.router.navigate(['/home']);
          }
         }
       catch(err) {
          console.log(err)
        }
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
    this.activatedRoute.params.subscribe(async (params:any)=> {

      let id: string = (params.id); 
      if (id) {
        this.title = 'Actualizar';
        let response: any = await this.usersService.getById(id);
        const user: User = response; 
        
        this.formModel = new FormGroup({
          id: new FormControl(id, []),
          first_name: new FormControl(user?.first_name, [
            Validators.required,
            Validators.minLength(3)
         ]),
          last_name: new FormControl(user?.last_name, [
            Validators.required
         ]),
          email: new FormControl(user?.email, [
            Validators.required,
            Validators.pattern(/^\S+\@\S+\.\S+/)
        // (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) otro tipo de validador para el campo del mail
         ]),
          image: new FormControl(user?.image, [
            Validators.required
         ]),
    },[])
      }
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



