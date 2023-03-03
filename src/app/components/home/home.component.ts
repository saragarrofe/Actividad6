import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  arrUsers: User[] = [];

  constructor(private userService: UsersService){}

  async ngOnInit(): Promise<void> {
    try{
      let response = await this.userService.getAll()
      this.arrUsers = response.results 
      // console.log(this.arrUser)
    }
    catch (error){
      console.log(error)
    }

   

  }

}
