import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

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
        if (response){ //(!response)
          alert('Usuario borrado correctamente')
        }
      } catch(error){
        console.log('error', error)
      }
    }
  }
}
