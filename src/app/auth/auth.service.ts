import { Injectable } from '@angular/core';
//import { AngularFireAuth } from 'src/app/auth';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth) { }

    loginGoogle()
    {
      console.log("redireecting to google");
      this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

  signOutUser() {
    firebase.auth().signOut();
  }
  
  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
            alert(error);
            
          }
        );
      }
    );
}
/*
*/

doGoogleLogin() {
  return new Promise<any>((resolve, reject) => {
    let provider = new firebase.auth.GoogleAuthProvider();
 //var provider = new firebase.auth.OAuthProvider('google.com');

    this.afAuth.auth
    .signInWithPopup(provider)
    .then(res => {
      resolve(res);
    })
  })
  throw new Error("Method not implemented.");
}

signInUser(email: string, password: string) {
  return new Promise(
    (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
          alert(error);
        }
      );
    }
  );

}
/*
doGoogleLogin(){
  return new Promise<any>((resolve, reject) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
  alert("ok");
    this.afAuth.auth
    .signInWithPopup(provider)
    .then(res => {
      resolve(res);
    })
  })
}
/** */
doFacebookLogin(){
  return new Promise<any>((resolve, reject) => {
    let provider = new firebase.auth.FacebookAuthProvider();
    this.afAuth.auth
    .signInWithPopup(provider)
    .then(res => {
      resolve(res);
      console.log("ok ca marche");
    }, err => {
      console.log(err+"ne marche pas");
      reject(err);
    })
  })
}
doGithubLogin(){
  return new Promise<any>((resolve, reject) => {
    let provider = new firebase.auth.GithubAuthProvider();
    this.afAuth.auth
    .signInWithPopup(provider)
    .then(res => {
      resolve(res);
      console.log("ok ca marche");
    }, err => {
      console.log(err+"ne marche pas");
      reject(err);
    })
  })
}
}