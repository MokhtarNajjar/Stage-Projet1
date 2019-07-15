import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service' ;
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:AuthService,
    private router: Router) {

   }

  ngOnInit() {
  }

  logout(){
    this.service.afAuth.auth.signOut();
    this.router.navigate(['/'])
    //this.service.afAuth.auth.signOut();

  }
}
