import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  dataUser: User;
  //dataUser: User = <User>{};

  @Output() dataEvent = new EventEmitter<User>();
  @Output() dataGetEvent = new EventEmitter<string[]>();

  constructor() { 
    this.dataUser = {} as User;
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const dataUser = {
      id: this.dataUser.id,
      name: this.dataUser.name,
      lastname: this.dataUser.lastname,
      age: this.dataUser.age
    }
    this.dataEvent.emit(dataUser);
  }

  get(): void {
    const dataGetUser = [
      this.dataUser.id,
      this.dataUser.name,
      this.dataUser.lastname,
      this.dataUser.age.toString()
    ]
    this.dataGetEvent.emit(dataGetUser);
  }
}
