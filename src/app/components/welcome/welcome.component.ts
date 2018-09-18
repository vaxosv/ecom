import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  bool = false;
  courses: any[]
  constructor(
    private db: AngularFireDatabase
  ) {
    let jj = db.list('/courses')
    jj.snapshotChanges()
      .subscribe(result => {
        console.log(result)
      });

  }

  ngOnInit() {

  }

  funing() {
    this.bool = !this.bool;
    console.log('weeeeee');
  }

}
