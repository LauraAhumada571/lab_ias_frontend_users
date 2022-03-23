import { Injectable } from '@angular/core';

import { User } from '../models/user';

@Injectable()
export class UserService {

  

  constructor() { }

  get(id: string, name: string, lastname: string, age: string){
    
    let data: User= <User>{};

    data = {
      id: id,
      name: name,
      lastname: lastname,
      age: Number(age)
    }
    return JSON.stringify(data);
  }

  saveUser(data: User): string{
    let result = 'Data were successfully stored :' + JSON.stringify(data);
    return result;
  }
}
