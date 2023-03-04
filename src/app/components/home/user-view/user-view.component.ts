import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

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

}
