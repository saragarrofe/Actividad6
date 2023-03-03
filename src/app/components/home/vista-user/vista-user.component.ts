import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-vista-user',
  templateUrl: './vista-user.component.html',
  styleUrls: ['./vista-user.component.css']
})


export class VistaUserComponent implements OnInit{

  user!: User | any;


  constructor(
    
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
    
    ){}

    ngOnInit(): void{

      this.activatedRoute.params.subscribe(async (params: any) => {
        let id: string = params._id;
        let response: any = await this.usersService.getById(id);
        this.user = response.results;
      })

    }


}



