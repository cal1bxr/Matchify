import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from "../models/user"

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  postRegistration(user: User){
    this.http.post('http://localhost:8081/data/users', user);
    console.log(user);
  }
}
