import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users = [{
    name : "Nipun",
    gitUrl : 'abc',
    about : '888888888'
  },
  {
    name : "Jane Doe",
    gitUrl : 'abc',
    about:'Some example text some example text. Jane Doe is an architect and engineer'
  }]

  constructor() { }


  getUsers(){
    return of(this.users);
  }
}
