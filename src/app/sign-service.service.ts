import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './sign/User';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignServiceService {
  private apiUrl = 'http://localhost:3000/user'
  users?: User[];
  authorised: boolean = false;

  constructor(private http: HttpClient) { }

  userExists(){
    var users = this.http.get<User[]>(this.apiUrl);
    return users;
  }

  setAuthorised(){
    this.authorised = true
  }

  isAuthorised(){
    return this.authorised
  }
}
