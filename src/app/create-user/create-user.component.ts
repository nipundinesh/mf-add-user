import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  usersList : any [];

  constructor(private userService : UserServiceService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe((users) => {
      this.usersList = users;
    });
    
  }

  add(){
    console.log(this.usersList);
    
    console.log('Add btn clicked...');
    
  }

  showProfile(user){
    console.log(user);
    
    console.log('showProfile btn clicked...');
    
  }

}
