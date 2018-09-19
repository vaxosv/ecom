import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseLService } from '../../services/firebase-l.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Item { name: string; }
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  private itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<Item>;

  update(item: Item) {
    this.itemDoc.update(item);
  }

  form = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  constructor(
    public afAuth: AngularFireAuth,
    public fc: FirebaseLService,
    private afs: AngularFirestore
  ) {
    this.itemDoc = afs.doc<Item>('items/1');
    this.item = this.itemDoc.valueChanges();
  }

  ngOnInit() {
  }

  signup() {
     

    this.fc.signUpE(this.form.get('email').value, this.form.get('password').value)
  }

  singUpG() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          console.log('res:', res);
          resolve(res);
        });
    });
  }
}
