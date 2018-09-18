import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
@Injectable({
    providedIn: 'root'
})
export class FirebaseLService {


    constructor() { }

    signUpE(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            console.log(this);
            
            // Handle Errors here.
            var errorCode = error.code;
            console.log('fire err1:', errorCode);
            var errorMessage = error.message;
            console.log('fore err2:', errorMessage);
            if(errorCode || errorMessage){
                
            }
        });
        
    }

    signIn(email, password){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(Response =>{
                console.log(Response);
                console.log('responce :', Response);
                
            })
            .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
            // ...
        });
    }

    signOut () {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });
    }

}
