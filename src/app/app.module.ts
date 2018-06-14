import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import ArticleComponent from './components/article/article.component';
import MenuComponent from './components/menu/menu.component';
import LoginComponent from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import TchatComponent from './components/tchat/tchat.component';
import { ROUTES } from './routes/app.routes';
import { RouterModule } from '@angular/router';
import ApiService from './services/api.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireFunctionsModule } from 'angularfire2/functions';
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import FilterTimestamp from './pipes/todate.pipe';

@NgModule({
  // Composants, pipe, directive
  declarations: [
    AppComponent,
    ArticleComponent,
    MenuComponent,
    LoginComponent,
    TchatComponent,
    FilterTimestamp
  ],
  // module
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(environment.firebase), // charge BDD firebase
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
  ],
  // service
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
