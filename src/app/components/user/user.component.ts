import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
  }

  addNewUser(newUser: User) {
    alert(this.userService.saveUser(newUser));
  }

  getUser(getUser: string[]){
    alert(this.userService.get(getUser[0], getUser[1], getUser[2], getUser[3]));
  }
}
