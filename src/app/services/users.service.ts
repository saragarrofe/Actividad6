import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

 

  baseUrl: string = 'https://peticiones.online/api/users'

  constructor(private httpClient: HttpClient) { }


  getAll(pPage: number = 1): Promise<any>{
    return lastValueFrom( this.httpClient.get<any>(`${this.baseUrl}?page=${pPage}`))

  }
}
/*
import { id, USERS } from '../db/users.db';
import { User } from '../interfaces/user.interface';

 private arrUsers: User[] = USERS;
  private id: number = id;


  User[] {
    return this.arrUsers;
  }

  getById(pId: number) : User | undefined {
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
  */