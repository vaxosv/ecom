import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './components/about/about.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FirebaseLService } from './services/firebase-l.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavComponent,
    AboutComponent,
    LoginFormComponent,
    SignUpFormComponent,
    FooterComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule
  ],
  providers: [FirebaseLService],
  bootstrap: [AppComponent]
})
export class AppModule { }
