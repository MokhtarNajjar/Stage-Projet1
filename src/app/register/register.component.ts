import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service' ;
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { NgForm, NgModel }   from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  etat: string = 'intelligent';
 // date = new Date();

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  constructor(  private service:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  getColor(){
    if(this.etat==="")
    return "red";
    else return "green";
  }
  onregister(e : NgModel , p:NgModel){
console.log("creating new user .."+ e.value);
    this.service.createNewUser(e.value,p.value).then(
      () => {
        this.router.navigate(['/home']);
      },
      
    );
  }
}
