import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs';
@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
  })
  export class WelcomeComponent implements OnInit {
    i:number = 0;
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
        // this.add()
    }

    add() {
        this.db.list('/courses')
            .push({
                saxeli: `course ${this.i}`,
            })

        this.i ++;
    }

    remove () {
        this.db.list('/courses')
            .remove ()
    }

    // TODO: user autorissation

}
