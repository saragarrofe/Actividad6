import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  user!: User | any;

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id: string = (params.id)
      console.log('id', id)

      let response: any = await this.usersService.getById(id);
      console.log('response', response)

      this.user = response;
    })

  }

  async delete(pId: string | undefined): Promise<void>{

    if (pId !== undefined){
      try {
        let response = await this.usersService.delete(pId);
        console.log('response', response)
        if (response){ 
          Swal.fire({
            title: '¡CUIDADO! ',
            text: "Estás a punto de eliminar este usuario...",
            icon: 'warning',
            showDenyButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Sí, a por todas!',
            denyButtonText: 'NO!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                '¡ELIMINADO!',
                'El usuario ha sido eliminado.',
                'success'
              )
            } else if (result.isDenied){
              Swal.fire ('Uf! Menos mal', 'Finalmente no lo has eliminado...', 'info')
            }
          })
        }
      } catch(error){
        console.log('error', error)
      }
    }
  }

}
