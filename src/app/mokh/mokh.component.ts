import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel }   from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth/auth.service' ;
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mokh',
  templateUrl: './mokh.component.html',
  styleUrls: ['./mokh.component.scss']
})
export class MokhComponent implements OnInit {

  constructor(
    private service:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  /*
  onSubmit(value: NgForm , e : NgModel , p:NgModel) {
    
  }
  */
 getColor(){
 }
 OnSubmit(){
  this.service.loginGoogle();

 }
 LogGithub(){
   this.service.doGithubLogin();
 }
 onSubmit(e : NgModel , p:NgModel)
 {

  this.service.signInUser(e.value,p.value).then(
    () => {
      this.router.navigate(['/home']);
    },
    
  );
  console.log(firebase.auth().onAuthStateChanged);
 // firebase.auth().onAuthStateChanged;
  //this.service.signInUser(e.value,p.value);
//this.service.createNewUser(e.value , p.value);
 }
 LogGoogle(){
    console.log("login ..");
   this.service.loginGoogle();  
    //this.service.doGoogleLogin();
  }
  //signIn(e : NgModel , p:NgModel){
 //console.log(p.value);
 LogFacebook(){
 this.service.doFacebookLogin();
 }
//     this.service.signInUser(e.value,p.value);
LogTwitter(){
  this.router.navigate(['/home']);

}
  }
  

