import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-lista-users',
  templateUrl: './lista-users.component.html',
  styleUrls: ['./lista-users.component.css']
})
export class ListaUsersComponent implements OnInit{

  arrUsers: User [] = [];

  constructor(private usersService: UsersService) {

  }

  ngOnInit(){
    //necesitos llamar al servicio para traer un listado de usuarios
    this.arrUsers = this.usersService.getAll()
    console.log(this.arrUsers);

  }


}
