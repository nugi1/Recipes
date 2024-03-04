import { Component, OnInit, ChangeDetectorRef, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { SignServiceService } from '../sign-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{
  authorised: boolean = false

  constructor(private router: Router, private sign: SignServiceService){
    this.authorised = this.sign.isAuthorised();
  }

  ngOnInit(): void {
    this.authorised = this.sign.isAuthorised();
  }

  onClick(name: string){
    this.router.navigate([name]);
  }

  isAuthorised(): boolean{
    return this.sign.isAuthorised();
  }
}
