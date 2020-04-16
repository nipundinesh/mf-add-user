import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  usersList : any [];

  firstName: string;
  lastName: string;
  phoneNumber :string;
  empid : string;
  gitUrl : string; 
  comment : string;

  constructor(private userService : UserServiceService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe((users) => {

      console.log(users);
      
      // this.usersList = users;
    });
    
  }

  add(){
    console.log(this.usersList);
    
    console.log('Add btn clicked...');
    
    this.userService.addUser({
      "firstName" : this.firstName,
      "lastName" : this.lastName, 
      "phoneNumber" : this.phoneNumber,
      "empid" : this.empid,
      "gitUrl" : this.gitUrl,
      "about" : this.comment
 
    }).subscribe((msg) => {
      console.log(msg);
      
    });
  }

  showProfile(user){
    console.log(user);
    
    console.log('showProfile btn clicked...');
    
  }

}
