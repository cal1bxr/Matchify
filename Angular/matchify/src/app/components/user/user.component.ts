import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title: string = "User Info";
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
 
  toggleInfo(){
    console.log("I have been clicked");
  }
}