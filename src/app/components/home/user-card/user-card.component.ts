import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  @Input() miUser!: User;

  constructor(private usersServices: UsersService){}

  async delete(pId: string | undefined): Promise<void>{

    if (pId !== undefined){
      try {
        let response = await this.usersServices.delete(pId);
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
