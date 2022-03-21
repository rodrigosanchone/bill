import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import{map} from 'rxjs/operators'




@Injectable()
export class LoginServices{
  constructor(
      private authService: AngularFireAuth,
     
  ){}

  login(email: string, password: string){
    return new Promise((resolve, reject)=>{
        this.authService.signInWithEmailAndPassword(email, password)
        .then(datos => resolve (datos),
        error => reject(error)
        )
    }
    
    )
 }

  logGmail(){
   return this.authService.signInWithPopup(new GoogleAuthProvider())
  }
   

  getAuth(){
    return this.authService.authState.pipe(
      map( auth=> auth)
    );
  }

  logout(){
    this.authService.signOut();
  }


}