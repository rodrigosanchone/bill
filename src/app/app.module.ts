import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componenetes/login/login.component';
import { PruebaComponent } from './componenetes/prueba/prueba.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

import { SETTINGS } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
//import { provideAuth,getAuth } from '@angular/fire/auth'
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


import { AuthGuard } from './guard/auth.guard';
import { LoginServices } from './services/login.services';
import { InputInfoComponent } from './componenetes/input-info/input-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PruebaComponent,
    InputInfoComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase,'bill'),
    //provideAuth(() => getAuth()),
    //provideFirestore(() => getFirestore()),
  ],
  providers: [
    AuthGuard,
    LoginServices,
    
    {provide:SETTINGS,useValue:{}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
