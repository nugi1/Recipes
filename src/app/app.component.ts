import { Component, OnInit } from '@angular/core';
import { SignServiceService } from './sign-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'my_app';
  authorised: boolean = false
  constructor(private sign: SignServiceService) {
    console.log(this.sign.isAuthorised())
  }

  ngOnInit(){
    console.log("Called")
  }
}
