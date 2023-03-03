import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

 /*@Input() miUsuario!: User;*/

  arrUsers: User[] = [];

constructor(private usersService: UsersService){}

  ngOnInit() : void {
    this.arrUsers = this.usersService.getAll()
   
  }

}
