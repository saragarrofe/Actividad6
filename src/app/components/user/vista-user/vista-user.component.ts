import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-vista-user',
  templateUrl: './vista-user.component.html',
  styleUrls: ['./vista-user.component.css']
})


export class VistaUserComponent implements OnInit{

  user: User | any; 
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
    ){}

    ngOnInit(): void {
      this.activatedRoute.params.subscribe( (params: any)=>{
        let id = Number(params.iduser);
        let response = this.usersService.getById(id)
        if (response) {
          this.user = response
        } else {
          alert ('Este usuario no existe')
          this.router.navigate(['/user'])
        }
       
      })
    }
  }



