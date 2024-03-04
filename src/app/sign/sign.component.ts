import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './User';
import { SignServiceService } from '../sign-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'] // Note the plural 'styleUrls'
})
export class SignComponent implements OnInit {
  signForm!: FormGroup;
  users!: User[];
  authorised: boolean = false;
  
  constructor(private fb: FormBuilder, private sign: SignServiceService, private router: Router) {
    console.log("Constructor called");
  }

  ngOnInit(): void {
    this.signForm = this.fb.group({
      name: ['', [Validators.required]], // You may use pattern validator for specific format
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    var checkName = ''
    var checkPassword = ''
    if (this.signForm?.valid) {
      checkName = (this.signForm?.get('name')?.value);
      checkPassword = (this.signForm?.get('password')?.value)
    } else {
      this.signForm?.markAllAsTouched();
    }
    
    this.sign.userExists().subscribe({
      next: response => {
        if (response) {
          this.users = response;
          
          const userExists = this.users.some(user => user.name === checkName && user.password == checkPassword);
          if (userExists) {
            this.sign.setAuthorised()
            this.router.navigate(['/home'])
            console.log(this.sign.isAuthorised())

            
          } else {
            console.log('User does not exist');
          }
        }
      },
      error : error => console.log(error)
    });
    
  }
}
