import { Injectable } from '@angular/core';
import { id, USERS } from '../db/users.db';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private arrUsers: User[] = USERS;
  private id: number = id;

  //aquí tendre que crear metodos getters y setters

  constructor() { }


  getAll(): User[] {
    return this.arrUsers;
  }

  getById(pId: number) : User | any {
    return this.arrUsers.find(users => users.id === pId)
  } 

  insertUsuario(pUser : User): string {

    let existe = this.arrUsers.some(user => user.email === pUser.email)
    if(!existe){

    pUser.id = this.id;
    this.arrUsers.push(pUser);
    this.id++
    return 'Usuario registrado';
    }
    return'Usuario duplicado'
  }
}
